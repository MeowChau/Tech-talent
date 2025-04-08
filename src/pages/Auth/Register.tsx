import React from 'react';
import { Form, Input, Button, Typography, Select, notification } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const Register: React.FC = () => {
    const [form] = Form.useForm();

    const handleRegister = async (values: any) => {
        try {
            // Giả lập gọi API đăng ký
            console.log('Thông tin đăng ký:', values);
            notification.success({
                message: 'Đăng ký thành công!',
                description: 'Tài khoản của bạn đã được tạo thành công.',
            });
            form.resetFields(); // Reset form sau khi đăng ký thành công
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
                        ]}
                    >
                        <Input placeholder="Nhập email của bạn" />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
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
                            { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ!' },
                        ]}
                    >
                        <Input placeholder="Nhập số điện thoại của bạn" />
                    </Form.Item>
                    <Form.Item
                        label="Vai trò"
                        name="role"
                        rules={[{ required: true, message: 'Vui lòng chọn vai trò!' }]}
                    >
                        <Select placeholder="Chọn vai trò của bạn">
                            <Option value="candidate">Ứng viên</Option>
                            <Option value="employer">Nhà tuyển dụng</Option>
                        </Select>
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