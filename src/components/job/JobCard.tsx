import React from 'react';
import { Card, Typography, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface JobCardProps {
    title: string;
    unit: string;
    area: string;
    deadline: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, unit, area, deadline }) => {
    return (
        <Card
            hoverable
            style={{
                textAlign: 'center',
                borderRadius: '8px',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '20px',
            }}
            bodyStyle={{ padding: '20px' }}
        >
            <Title level={5} style={{ margin: 0 }}>
                Tech_talent_{title}
            </Title>
            <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
                <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                    Ngày hết hạn: {deadline}
                </Text>
                <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                    {unit}
                </Text>
                <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                    {area}
                </Text>
            </div>
            <div style={{ marginTop: 'auto' }}>
                <Button type="link" icon={<RightOutlined />}>
                    Xem thêm
                </Button>
            </div>
        </Card>
    );
};

export default JobCard;