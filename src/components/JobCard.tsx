import { Card, Tag, Typography, Button, Space, Tooltip } from 'antd';
import { EnvironmentOutlined, DollarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Job } from '../types/job.d';

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
          View Details
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
        {job.title}
      </Title>
      <Text strong style={{ display: 'block', marginBottom: 12 }}>{job.company}</Text>
      
      <Space size={[8, 8]} wrap style={{ marginBottom: 12 }}>
        <Tag icon={<EnvironmentOutlined />}>{job.location}</Tag>
        <Tag icon={<DollarOutlined />}>{job.salary}</Tag>
        <Tag icon={<ClockCircleOutlined />}>{job.jobType.replace('-', ' ')}</Tag>
        {job.isRemote && <Tag color="green">Remote</Tag>}
      </Space>
      
      <Tooltip title={job.description}>
        <Text 
          ellipsis 
          style={{ 
            display: 'block',
            color: 'rgba(0,0,0,0.65)'
          }}
        >
          {job.description}
        </Text>
      </Tooltip>
    </Card>
  );
};

export default JobCard;