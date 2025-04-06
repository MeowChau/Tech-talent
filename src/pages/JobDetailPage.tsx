import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Typography, Button, Tag, Divider, Space, Skeleton } from 'antd';
import { 
  EnvironmentOutlined, 
  DollarOutlined, 
  ClockCircleOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import { getJobById } from '../api/jobs';
import { Job } from '../types/job';
import { useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (!id) return;
        const data = await getJobById(id);
        setJob(data);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <Skeleton active />;
  }

  if (!job) {
    return <div>Không tìm thấy công việc</div>;
  }

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
        <Title level={2}>{job.title}</Title>
        <Title level={4} type="secondary">{job.company}</Title>

        <Space size={[8, 16]} wrap style={{ margin: '16px 0' }}>
          <Tag icon={<EnvironmentOutlined />}>{job.location}</Tag>
          <Tag icon={<DollarOutlined />}>{job.salary}</Tag>
          <Tag icon={<ClockCircleOutlined />}>
            {job.jobType === 'full-time' ? 'Toàn thời gian' : 
             job.jobType === 'part-time' ? 'Bán thời gian' : 
             job.jobType === 'contract' ? 'Hợp đồng' : 'Thực tập'}
          </Tag>
          {job.isRemote && <Tag color="green">Làm việc từ xa</Tag>}
        </Space>

        <Divider orientation="left">Mô tả công việc</Divider>
        <Paragraph>{job.description}</Paragraph>

        <Divider orientation="left">Yêu cầu công việc</Divider>
        <ul>
          {job.requirements.map((req, index) => (
            <li key={index}><Text>{req}</Text></li>
          ))}
        </ul>

        {job.benefits.length > 0 && (
          <>
            <Divider orientation="left">Phúc lợi</Divider>
            <ul>
              {job.benefits.map((benefit, index) => (
                <li key={index}><Text>{benefit}</Text></li>
              ))}
            </ul>
          </>
        )}

        <Divider />
        <Text type="secondary">Đăng ngày: {new Date(job.postedAt).toLocaleDateString()}</Text>

        <Button 
          type="primary" 
          size="large" 
          block
          style={{ marginTop: 24 }}
        >
          Ứng tuyển ngay
        </Button>
      </Card>
    </div>
  );
};

export default JobDetailPage;