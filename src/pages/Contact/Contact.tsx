import React from 'react';
import { Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Contact: React.FC = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Phần bên trái */}
            <div
                style={{
                    flex: 1,
                    backgroundColor: '#f0f8ff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Các dấu hỏi lộn xộn */}
                {[...Array(20)].map((_, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            fontSize: `${Math.random() * 30 + 20}px`,
                            color: '#FF6600',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            opacity: 0.3,
                        }}
                    >
                        ?
                    </div>
                ))}

                {/* Nội dung chính */}
                <MessageOutlined style={{ fontSize: '64px', color: '#FF6600', marginBottom: '20px' }} />
                <Title level={3} style={{ color: '#333', textAlign: 'center' }}>
                    Bạn cần trợ giúp?
                </Title>
                <Text style={{ color: '#555', textAlign: 'center', marginTop: '10px', fontSize: '16px' }}>
                    Xin hãy điền đầy đủ những thông tin dưới đây và gửi cho chúng tôi. Chúng tôi sẽ liên hệ với bạn
                    trong thời gian nhanh nhất.
                </Text>
            </div>

            {/* Phần bên phải */}
            <div
                style={{
                    flex: 2,
                    padding: '40px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Title level={4} style={{ color: '#333', marginBottom: '20px' }}>
                    Liên hệ với chúng tôi
                </Title>
                <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#666' }}>
                    Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, vui lòng liên hệ với chúng tôi qua các kênh sau:
                </p>
                <ul style={{ marginTop: '20px', paddingLeft: '20px', color: '#333' }}>
                    <li>Email: support@techtalent.com</li>
                    <li>Hotline: 0123 456 789</li>
                    <li>Địa chỉ: 123 Đường ABC, Hà Nội</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;