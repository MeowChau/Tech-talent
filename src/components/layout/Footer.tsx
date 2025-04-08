import React from 'react';
import { LaptopOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons'; // Import các icon cần thiết
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '20px', 
            background: '#f0f2f5', 
            boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)' 
        }}>
            {/* Cột bên trái */}
            <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <LaptopOutlined style={{ fontSize: '24px', color: '#FF6600' }} />
                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Tech_Talent</span>
                </div>
                <p style={{ margin: 0, color: '#666' }}>Email: support@techtalent.com</p>
            </div>

            {/* Cột giữa */}
            <div style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    {['Trang Chủ', 'Về Chúng Tôi', 'Tuyển Dụng', 'Liên Hệ'].map((menu, index) => (
                        <Link 
                            key={index} 
                            to={`/${menu.toLowerCase().replace(/\s+/g, '')}`} 
                            style={{ 
                                color: '#333', 
                                fontWeight: 'bold', 
                                textDecoration: 'none', 
                                transition: 'color 0.3s ease' 
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6600')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
                        >
                            {menu}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Cột bên phải */}
            <div style={{ flex: 1, textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>Theo dõi chúng tôi</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <a 
                        href="https://www.facebook.com/bau.nguyen.560?locale=vi_VN" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                    >
                        <FacebookOutlined 
                            style={{ fontSize: '24px', color: '#4267B2', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                    </a>
                    <a 
                        href="https://www.instagram.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                    >
                        <InstagramOutlined 
                            style={{ fontSize: '24px', color: '#C13584', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                    </a>
                    <a 
                        href="https://www.youtube.com/@n.m.chauuu9472" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                    >
                        <YoutubeOutlined 
                            style={{ fontSize: '24px', color: '#FF0000', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/chaunmptit/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit' }}
                    >
                        <LinkedinOutlined 
                            style={{ fontSize: '24px', color: '#0077B5', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;