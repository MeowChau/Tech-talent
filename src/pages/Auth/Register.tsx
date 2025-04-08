import React from 'react';
import { Form, Input, Button, Typography, notification } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const { Title } = Typography;

const Register: React.FC = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleRegister = async (values: any) => {
        try {
            // Lưu thông tin đăng ký vào localStorage
            localStorage.setItem('user', JSON.stringify(values));
            notification.success({
                message: 'Đăng ký thành công!',
                description: 'Tài khoản của bạn đã được tạo thành công.',
            });
            form.resetFields(); // Reset form sau khi đăng ký thành công
            navigate('/candidate/login'); // Điều hướng đến giao diện đăng nhập
        } catch (error) {
            notification.error({
                message: 'Đăng ký thất bại!',
                description: 'Đã xảy ra lỗi trong quá trình đăng ký. Vui lòng thử lại.',
            });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9f9f9' }}>
            <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <Title level={3} style={{ textAlign: 'center', color: '#FF6600', marginBottom: '20px' }}>
                    Đăng Ký Tài Khoản
                </Title>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleRegister}
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
                            {
                                pattern: /.+@.+\.com$/,
                                message: 'Email không đúng hợp lệ ',
                            },
                        ]}
                    >
                        <Input placeholder="Nhập email của bạn" />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            { required: true, message: 'Vui lòng nhập mật khẩu!' },
                            {
                                pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{9,}$/,
                                message: 'Mật khẩu phải dài hơn 8 ký tự, có ít nhất 1 chữ cái viết hoa và 1 số!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Nhập mật khẩu của bạn" />
                    </Form.Item>
                    <Form.Item
                        label="Xác nhận mật khẩu"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Xác nhận mật khẩu của bạn" />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            { required: true, message: 'Vui lòng nhập số điện thoại!' },
                            { pattern: /^[0-9]{10}$/, message: 'Số điện thoại phải đúng và đủ 10 số!' },
                        ]}
                    >
                        <Input placeholder="Nhập số điện thoại của bạn" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Đăng Ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Register;