import React from 'react';
import { Typography, Button } from 'antd';
import { CloudOutlined, LockOutlined, RobotOutlined, ApiOutlined, RadarChartOutlined, CodeOutlined, DatabaseOutlined, GatewayOutlined, RocketOutlined, ArrowRightOutlined, TeamOutlined, SolutionOutlined } from '@ant-design/icons';
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

            {/* Phần mới: Tech Talent là gì? */}
            <div style={{ display: 'flex', marginTop: '40px', gap: '20px', alignItems: 'flex-start' }}>
                {/* Bên trái */}
                <div style={{ flex: 1, textAlign: 'left' }}>
                    <Title level={2} style={{ color: '#FF6600' }}>Tech Talent là gì?</Title>
                    <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>
                        Tech Talent là sáng kiến đào tạo chuyên sâu do đội ngũ chuyên gia dày dạn kinh nghiệm thiết kế, nhằm đồng hành cùng thế hệ trẻ trong hành trình khám phá năng lực bản thân và hoàn thiện trình độ chuyên môn. Chương trình tập trung vào 9 mũi nhọn công nghệ: Thiết kế vi mạch (Semiconductor), Hàng không vũ trụ (Aerospace), An ninh mạng (Cyber Security), Khoa học dữ liệu & Trí tuệ nhân tạo (Data Science & AI), Kỹ thuật dữ liệu (Data Engineering), Kỹ thuật phần mềm (Software Engineering), Điện toán đám mây (Cloud), Mạng 5G và Vạn vật kết nối (IoT), mang đến lộ trình phát triển toàn diện cho các tài năng kỹ thuật trẻ.
                    </p>
                    <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333', marginTop: '20px' }}>
                        Đến với Tech Talent, các tài năng trẻ có cơ hội:
                    </p>
                </div>

                {/* Bên phải */}
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #FF6600', borderRadius: '8px' }}>
                        <RocketOutlined style={{ fontSize: '24px', color: '#FF6600' }} />
                        <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>
                            Trải nghiệm lộ trình đào tạo chuyên sâu, đồng hành cùng đội ngũ cố vấn giàu kinh nghiệm từ Tech và quốc tế.
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #FF6600', borderRadius: '8px' }}>
                        <CodeOutlined style={{ fontSize: '24px', color: '#FF6600' }} />
                        <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>
                            Tự tin ứng dụng lý thuyết vào thực tế thông qua các dự án đa lĩnh vực.
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #FF6600', borderRadius: '8px' }}>
                        <TeamOutlined style={{ fontSize: '24px', color: '#FF6600' }} />
                        <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>
                            Mở rộng network chất lượng với cộng đồng tài năng trẻ, kết nối cùng các chuyên gia dày dạn kinh nghiệm.
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #FF6600', borderRadius: '8px' }}>
                        <SolutionOutlined style={{ fontSize: '24px', color: '#FF6600' }} />
                        <p style={{ fontSize: '14px', color: '#333', margin: 0 }}>
                            Tích lũy kinh nghiệm thực tế và có cơ hội “ghi tên” vào đội ngũ nhân sự chính thức của Tech ngay từ khi trên giảng đường.
                        </p>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Title level={2} style={{ color: '#FF6600', fontWeight: 'bold' }}>Timeline</Title>
            </div>
            {/* Con dốc Timeline */}
<div style={{ marginTop: '20px', position: 'relative', height: '250px' }}>
    {/* Đường dốc */}
    <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            height: '4px',
            background: 'linear-gradient(to right, #FF6600, transparent)',
            transform: 'translateY(-50%) rotate(-5deg)',
        }}
    ></motion.div>

    {/* Các giai đoạn */}
    {['1. Tiếp nhận hồ sơ', '2. Kiểm tra năng lực', '3. Phỏng vấn hội đồng', '4. Đào tạo chuyên sâu', '5. Tham gia dự án thực tế'].map((stage, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            style={{
                position: 'absolute',
                left: `${index * 20}%`,
                bottom: index % 2 === 0 ? `${index * 10 + 20}px` : `${index * 10}px`, // Giai đoạn 2, 4 nằm trên
                textAlign: 'center',
            }}
        >
            {/* Vòng tròn */}
            <motion.div
                whileHover={{ scale: 1.2 }}
                style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#FF6600',
                    borderRadius: '50%',
                    margin: '0 auto',
                    boxShadow: '0 4px 8px rgba(255, 102, 0, 0.5)',
                }}
            ></motion.div>
            {/* Nhãn */}
            <p style={{ marginTop: '10px', color: '#333', fontWeight: 'bold' }}>{stage}</p>
        </motion.div>
    ))}
</div>
        </div>
    );
};

export default Home;