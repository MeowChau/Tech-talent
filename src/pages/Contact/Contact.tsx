import React from 'react';
import { Typography, Form, Input, Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Contact: React.FC = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log('Thông tin gửi đi:', values);
        form.resetFields(); // Reset form sau khi gửi
    };

    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: "'Lexend', sans-serif" }}>
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
                    display: 'flex',
                    justifyContent: 'center', // Căn giữa theo chiều ngang
                    alignItems: 'center', // Căn giữa theo chiều dọc
                    backgroundColor: '#fff',
                    padding: '40px',
                }}
            >
                <div style={{ width: '100%', maxWidth: '500px' }}>
                    <Title level={4} style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>
                        Liên hệ với chúng tôi
                    </Title>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        style={{
                            backgroundColor: '#f9f9f9',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Form.Item
                            label="Họ và Tên"
                            name="fullName"
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                        >
                            <Input placeholder="Nhập họ và tên của bạn" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Vui lòng nhập email!' },
                                { type: 'email', message: 'Email không hợp lệ!' },
                            ]}
                        >
                            <Input placeholder="Nhập email của bạn" />
                        </Form.Item>
                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[
                                { required: true, message: 'Vui lòng nhập số điện thoại!' },
                                { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ!' },
                            ]}
                        >
                            <Input placeholder="Nhập số điện thoại của bạn" />
                        </Form.Item>
                        <Form.Item
                            label="Nội dung"
                            name="message"
                            rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
                        >
                            <Input.TextArea rows={4} placeholder="Nhập nội dung bạn muốn gửi" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Gửi thông tin
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;