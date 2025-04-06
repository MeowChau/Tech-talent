import { Card, Tag, Typography, Button, Space } from 'antd';
import { 
  EnvironmentOutlined, 
  DollarOutlined, 
  ClockCircleOutlined,
  BuildOutlined 
} from '@ant-design/icons';
import { Job } from '../types/job';

const { Text, Title } = Typography;

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card
      hoverable
      style={{ 
        marginBottom: 16,
        borderRadius: 8,
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}
      actions={[
        <Button type="primary" block style={{ borderRadius: 4 }}>
          Ứng tuyển ngay
        </Button>,
      ]}
    >
      <Title 
        level={4} 
        style={{ 
          marginBottom: 8,
          color: '#1890ff'
        }}
      >
        {job.name} {/* Đổi từ job.title sang job.name */}
      </Title>
      
      {/* Hiển thị tên công ty (cần fetch thêm thông tin company) */}
      <Text strong style={{ display: 'block', marginBottom: 12 }}>
        {job.company?.companyName || 'Công ty không xác định'}
      </Text>
      
      <Space size={[8, 8]} wrap style={{ marginBottom: 12 }}>
        {/* Thành phố - lấy city đầu tiên nếu có */}
        <Tag icon={<EnvironmentOutlined />}>
          {job.city?.[0] || 'Địa điểm không xác định'}
        </Tag>
        
        <Tag icon={<DollarOutlined />}>{job.salary}</Tag>
        
        <Tag icon={<ClockCircleOutlined />}>
          {job.status ? 'Đang tuyển' : 'Ngừng tuyển'}
        </Tag>
        
        {/* Tags ngôn ngữ */}
        {job.tags?.slice(0, 2).map((tag, index) => (
          <Tag key={index} icon={<BuildOutlined />}>{tag}</Tag>
        ))}
        
        {job.tags?.length > 2 && (
          <Tag>+{job.tags.length - 2} ngôn ngữ khác</Tag>
        )}
      </Space>
      
      <Text 
        ellipsis 
        style={{ 
          color: 'rgba(0,0,0,0.65)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}
      >
        {job.description}
      </Text>
    </Card>
  );
};

export default JobCard;