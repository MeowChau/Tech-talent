import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Typography, Button, Tag, Divider, Space, Skeleton, List, message } from 'antd';
import { 
  EnvironmentOutlined, 
  DollarOutlined, 
  ClockCircleOutlined,
  ArrowLeftOutlined,
  BuildOutlined,
  CheckOutlined,
  CalendarOutlined,
  SyncOutlined
} from '@ant-design/icons';
import { getJobById } from '../api/job'; // Changed from '../api/job'
import { Job } from '../types/job.d'; // Changed from '../types/job.d'
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (!id) {
          throw new Error('Missing job ID');
        }
        
        const data = await getJobById(id);
        setJob(data);
      } catch (err) {
        console.error('Error fetching job:', err);
        setError('Không thể tải thông tin công việc');
        message.error('Đã xảy ra lỗi khi tải thông tin công việc');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px 16px' }}>
        <Skeleton active paragraph={{ rows: 10 }} />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px 16px', textAlign: 'center' }}>
        <Title level={4}>{error || 'Không tìm thấy công việc'}</Title>
        <Button 
          type="primary" 
          onClick={() => navigate(-1)}
          style={{ marginTop: 16 }}
        >
          Quay lại danh sách
        </Button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    } catch {
      return 'N/A';
    }
  };

  // Safe array access with fallback
  const requirements = Array.isArray(job.requirements) ? job.requirements : ['Không có yêu cầu cụ thể'];
  const benefits = Array.isArray(job.benefits) ? job.benefits : ['Không có phúc lợi cụ thể'];
  const cities = Array.isArray(job.city) ? job.city : [];
  const tags = Array.isArray(job.tags) ? job.tags : [];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '24px 16px' }}>
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(-1)}
        style={{ marginBottom: 16 }}
      >
        Quay lại
      </Button>

      <Card bordered={false}>
        <Title level={2}>{job.name || 'Không có tiêu đề'}</Title>
        <Title level={4} type="secondary">
          {job.company?.companyName || 'Công ty không xác định'}
        </Title>

        <Space size={[8, 16]} wrap style={{ margin: '16px 0' }}>
          {cities.map((city, index) => (
            <Tag key={`city-${index}`} icon={<EnvironmentOutlined />}>
              {city}
            </Tag>
          ))}
          
          <Tag icon={<DollarOutlined />}>{job.salary || 'Thương lượng'}</Tag>
          
          <Tag 
            icon={<ClockCircleOutlined />} 
            color={job.status ? 'green' : 'red'}
          >
            {job.status ? 'Đang tuyển' : 'Đã đóng'}
          </Tag>
          
          {tags.map((tag, index) => (
            <Tag key={`tag-${index}`} icon={<BuildOutlined />}>
              {tag}
            </Tag>
          ))}
        </Space>

        <Divider orientation="left">Mô tả công việc</Divider>
        <Paragraph style={{ whiteSpace: 'pre-line' }}>
          {job.description || 'Không có mô tả'}
        </Paragraph>

        {requirements.length > 0 && (
          <>
            <Divider orientation="left">Yêu cầu công việc</Divider>
            <List
              size="small"
              dataSource={requirements}
              renderItem={(req, index) => (
                <List.Item key={`req-${index}`}>
                  <Text>
                    <CheckOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                    {String(req)}
                  </Text>
                </List.Item>
              )}
            />
          </>
        )}

        {benefits.length > 0 && (
          <>
            <Divider orientation="left">Phúc lợi</Divider>
            <List
              size="small"
              dataSource={benefits}
              renderItem={(benefit, index) => (
                <List.Item key={`benefit-${index}`}>
                  <Text>
                    <CheckOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                    {String(benefit)}
                  </Text>
                </List.Item>
              )}
            />
          </>
        )}

        <Divider />
        <Space>
          <Text type="secondary">
            <CalendarOutlined style={{ marginRight: 4 }} />
            Đăng ngày: {formatDate(job.createAt)}
          </Text>
          <Text type="secondary">
            <SyncOutlined style={{ marginRight: 4 }} />
            Cập nhật: {formatDate(job.updateAt)}
          </Text>
        </Space>

        <Button 
          type="primary" 
          size="large" 
          block
          style={{ marginTop: 24 }}
          onClick={() => navigate(`/apply/${job.id}`)}
          disabled={!job.status}
        >
          {job.status ? 'Ứng tuyển ngay' : 'Đã ngừng tuyển'}
        </Button>
      </Card>
    </div>
  );
};

export default JobDetailPage;