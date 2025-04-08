import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, notification } from 'antd';
import { motion } from 'framer-motion'; // Import framer-motion để tạo hiệu ứng
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import {
    CloudOutlined,
    LockOutlined,
    RobotOutlined,
    ApiOutlined,
    RadarChartOutlined,
    CodeOutlined,
    DatabaseOutlined,
    GatewayOutlined,
    RocketOutlined,
} from '@ant-design/icons'; // Import các icon

interface FormValues {
    email: string;
    password: string;
}

const CandidateLogin: React.FC = () => {
    const { register, handleSubmit } = useForm<FormValues>();
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const onSubmit = async (data: FormValues) => {
        try {
            if (data.email === "candidate@example.com" && data.password === "password123") {
                notification.success({ message: 'Đăng Nhập Thành Công!' });
                window.location.href = '/candidate/dashboard';
            } else {
                throw new Error("Thông tin đăng nhập không chính xác!");
            }
        } catch (error) {
            notification.error({ 
                message: 'Đăng Nhập Thất Bại!', 
                description: error instanceof Error ? error.message : 'Đã xảy ra lỗi không xác định!' 
            });
        }
    };

    // Danh sách các icon
    const icons = [
        <CloudOutlined />,
        <LockOutlined />,
        <RobotOutlined />,
        <ApiOutlined />,
        <RadarChartOutlined />,
        <CodeOutlined />,
        <DatabaseOutlined />,
        <GatewayOutlined />,
        <RocketOutlined />,
    ];

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Phần bên trái */}
            <div style={{ 
                flex: 1, 
                background: 'linear-gradient(135deg, #FF6600, #FFCC00)', 
                position: 'relative', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                color: '#fff', 
                fontSize: '36px', 
                fontWeight: 'bold', 
                textAlign: 'center' 
            }}>
                <div>Tech_Talent 2025</div>
                <p style={{ fontSize: '16px', fontWeight: 'normal', marginTop: '10px', maxWidth: '80%' }}>
                    Nơi bạn có thể thỏa sức sáng tạo, vượt qua thử thách để chứng minh bản thân và không ngừng trau dồi kiến thức, kỹ năng.
                </p>

                {/* Các icon bay nhảy */}
                {icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        style={{
                            position: 'absolute',
                            fontSize: '40px',
                            color: '#fff',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    >
                        {icon}
                    </motion.div>
                ))}
            </div>

            {/* Phần bên phải */}
            <div style={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#f9f9f9' 
            }}>
                <div style={{ 
                    padding: '40px', 
                    maxWidth: '400px', 
                    width: '100%', 
                    backgroundColor: '#fff', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}>
                    <h2 style={{ textAlign: 'center', color: '#FF6600' }}>Chào mừng</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
                        Hãy đăng nhập để trải nghiệm cùng chúng tôi
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            placeholder="Email" 
                            {...register('email', { required: true })} 
                            style={{ marginBottom: '10px' }} 
                        />
                        <Input.Password 
                            placeholder="Mật Khẩu" 
                            {...register('password', { required: true })} 
                            style={{ marginBottom: '10px' }} 
                        />
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            style={{ 
                                width: '100%', 
                                backgroundColor: '#FF6600', 
                                borderColor: '#FF6600' 
                            }}
                        >
                            Đăng Nhập
                        </Button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '10px', color: '#FF6600', cursor: 'pointer' }}>
                        Bạn quên mật khẩu?
                    </p>
                    <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />
                    <Button 
                        type="default" 
                        style={{ 
                            width: '100%', 
                            backgroundColor: '#fff', 
                            borderColor: '#FF6600', 
                            color: '#FF6600' 
                        }}
                        onClick={() => navigate('/register')} // Điều hướng đến trang đăng ký
                    >
                        Đăng ký tài khoản
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CandidateLogin;