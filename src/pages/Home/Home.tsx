import React from 'react';
import { Typography } from 'antd';
import { CloudOutlined, LockOutlined, RobotOutlined, ApiOutlined, RadarChartOutlined, CodeOutlined, DatabaseOutlined, GatewayOutlined, RocketOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title } = Typography;

const Home: React.FC = () => {
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

            {/* Hiệu ứng icon xoay */}
            <div style={{ position: 'relative', textAlign: 'center', marginTop: '20px' }}>
                {[
                    { icon: <CloudOutlined />, label: 'Cloud' },
                    { icon: <LockOutlined />, label: 'Cyber Security' },
                    { icon: <RobotOutlined />, label: 'AI' },
                    { icon: <ApiOutlined />, label: 'Semiconductor' },
                    { icon: <RadarChartOutlined />, label: '5G' },
                    { icon: <CodeOutlined />, label: 'Software Engineering' },
                    { icon: <DatabaseOutlined />, label: 'Data Engineering' },
                    { icon: <GatewayOutlined />, label: 'IoT' },
                    { icon: <RocketOutlined />, label: 'Aerospace' },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        style={{
                            display: 'inline-block',
                            margin: '10px',
                            fontSize: '40px',
                            color: '#FF6600',
                        }}
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>

            {/* Hiệu ứng chữ "Tech Talent 2025" */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}
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
        </div>
    );
};

export default Home;