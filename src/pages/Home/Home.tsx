import React from 'react';
import { Typography, Button } from 'antd';
import { CloudOutlined, LockOutlined, RobotOutlined, ApiOutlined, RadarChartOutlined, CodeOutlined, DatabaseOutlined, GatewayOutlined, RocketOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title } = Typography;

const Home: React.FC = () => {
    const buttons = [
        { icon: <CloudOutlined />, label: 'Cloud' },
        { icon: <LockOutlined />, label: 'Cyber Security' },
        { icon: <RobotOutlined />, label: 'AI' },
        { icon: <ApiOutlined />, label: 'Semiconductor' },
        { icon: <RadarChartOutlined />, label: '5G' },
        { icon: <CodeOutlined />, label: 'Software Engineering' },
        { icon: <DatabaseOutlined />, label: 'Data Engineering' },
        { icon: <GatewayOutlined />, label: 'IoT' },
        { icon: <RocketOutlined />, label: 'Aerospace' },
    ];

    return (
        <div style={{ padding: '40px', background: '#f0f2f5', position: 'relative', overflow: 'hidden' }}>
            {/* Background động */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '200px',
                    fontWeight: 'bold',
                    color: '#FF6600',
                    whiteSpace: 'nowrap',
                    zIndex: -1,
                    letterSpacing: '15px',
                    opacity: 0.2,
                }}
            >
                TECH TALENT 2025
            </div>

            {/* Hiệu ứng chữ "Tech Talent 2025" */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ textAlign: 'center', marginBottom: '20px', position: 'relative', zIndex: 1 }}
            >
                <Title
                    level={1}
                    style={{
                        fontSize: '72px',
                        fontWeight: 'bold',
                        color: '#FF6600',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        fontFamily: `'Poppins', sans-serif`,
                    }}
                >
                    Tech Talent 2025
                </Title>
            </motion.div>

            {/* Nút "Apply Now" */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button type="primary" size="large" style={{ backgroundColor: '#FF6600', borderColor: '#FF6600' }}>
                    Apply Now <ArrowRightOutlined />
                </Button>
            </div>

            {/* 9 Icon xoay */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
                {buttons.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '50px',
                            height: '50px',
                            fontSize: '30px',
                            color: '#FF6600',
                        }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>

            {/* 9 Button chia thành 3 hàng */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
                {buttons.map((item, index) => (
                    <Button
                        key={index}
                        type="default"
                        icon={item.icon}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '50px',
                            fontWeight: 'bold',
                            color: '#FF6600',
                            borderColor: '#FF6600',
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Home;