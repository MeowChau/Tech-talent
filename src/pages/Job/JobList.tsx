import React from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons'; // Import icon

const { Title, Text } = Typography;

const JobList: React.FC = () => {
    const buttons = [
        'Cloud',
        'Cyber Security',
        'AI',
        'Semiconductor',
        '5G',
        'Software Engineering',
        'Data Engineering',
        'IoT',
        'Aerospace',
    ];

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}> {/* Trừ chiều cao của footer */}
            {/* Phần bên trái (70%) */}
            <div style={{ 
                flex: 7, 
                backgroundColor: '#f9f9f9', 
                padding: '20px', 
                overflow: 'auto' // Thêm cuộn dọc nếu nội dung vượt quá
            }}>
                <Title level={3} style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Các vị trí tuyển dụng tại Tech Talent 2025
                </Title>
                <Row gutter={[24, 24]}> {/* Tăng khoảng cách giữa các hàng và cột */}
                    {buttons.map((item, index) => (
                        <Col key={index} xs={24} sm={12} md={8}>
                            <Card 
                                hoverable 
                                style={{ 
                                    textAlign: 'center', 
                                    borderRadius: '8px', 
                                    height: '240px', // Tăng chiều cao của các ô
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'flex-start', // Căn nội dung lên trên
                                    alignItems: 'center', 
                                    padding: '20px' 
                                }}
                                bodyStyle={{ padding: '20px' }}
                            >
                                <Title level={5} style={{ margin: 0 }}>
                                    Tech_talent_{item}
                                </Title>
                                <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
                                    <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                                        Ngày hết hạn: 31/12/2025
                                    </Text>
                                    <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                                        {index >= 6 ? 'Tổng Công ty Đầu tư' : index < 3 ? 'Tổng Công ty Giải pháp' : 'Tổng Công ty Công nghệ'}
                                    </Text>
                                    <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                                        {index >= 6 ? 'Ninh Bình' : index < 3 ? 'TP HCM' : 'Hà Nội'}
                                    </Text>
                                </div>
                                <div style={{ marginTop: 'auto' }}> {/* Đặt button ở dưới cùng */}
                                    <Button type="link" icon={<RightOutlined />}>
                                        Xem thêm
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Phần bên phải (30%) */}
            <div style={{ 
                flex: 3, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '20px', 
                flexDirection: 'column', 
                overflow: 'auto' // Thêm cuộn dọc nếu nội dung vượt quá
            }}>
                <Title level={4} style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Nội dung bên phải
                </Title>
            </div>
        </div>
    );
};

export default JobList;