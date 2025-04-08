import React from 'react';
import { BulbOutlined, RocketOutlined, HeartOutlined } from '@ant-design/icons'; // Import các icon từ Ant Design

const AboutUs: React.FC = () => {
    return (
        <div style={{ 
            padding: '40px', 
            maxWidth: '800px', 
            margin: '0 auto', 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #FF6600, #FFCC00)', // Nền gradient sống động
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            color: '#fff', // Màu chữ trắng để nổi bật trên nền
            fontFamily: "'Lexend', sans-serif", // Font chữ Lexend
        }}>
            <h1 style={{ 
                color: '#fff', 
                marginBottom: '20px', 
                fontSize: '36px', 
                fontWeight: 'bold', 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' // Hiệu ứng đổ bóng chữ
            }}>
                Về Chúng Tôi
            </h1>
            <p style={{ 
                fontSize: '18px', 
                lineHeight: '1.8', 
                color: '#fff', 
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' // Hiệu ứng đổ bóng chữ
            }}>
                Chúng tôi đang tăng tốc mạnh mẽ, mở rộng ảnh hưởng tại nhiều thị trường trong khu vực. 
                Những kế hoạch táo bạo đang được triển khai, và chúng tôi rất mong bạn sẽ đồng hành 
                cùng chúng tôi kiến tạo xã hội số theo phong cách của chính bạn.
            </p>
            <h2 style={{ 
                marginTop: '40px', 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: '#fff', 
                textShadow: 'none' // Bỏ hiệu ứng đổ bóng
            }}>
                Giá trị dẫn dắt
            </h2>

            {/* 3 lá bài */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
                {/* Lá bài 1 */}
                <div style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    cursor: 'pointer',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF6600';
                    e.currentTarget.innerHTML = '<span style="color: #fff;">Kiến tạo</span>';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.innerHTML = '<span style="font-size: 50px; color: #FF6600;"><i class="anticon anticon-bulb"></i></span>';
                }}>
                    <BulbOutlined style={{ fontSize: '50px', color: '#FF6600' }} />
                </div>

                {/* Lá bài 2 */}
                <div style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    cursor: 'pointer',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF6600';
                    e.currentTarget.innerHTML = '<span style="color: #fff;">Sáng tạo</span>';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.innerHTML = '<span style="font-size: 50px; color: #FF6600;"><i class="anticon anticon-rocket"></i></span>';
                }}>
                    <RocketOutlined style={{ fontSize: '50px', color: '#FF6600' }} />
                </div>

                {/* Lá bài 3 */}
                <div style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    cursor: 'pointer',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF6600';
                    e.currentTarget.innerHTML = '<span style="color: #fff;">Khát khao</span>';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.innerHTML = '<span style="font-size: 50px; color: #FF6600;"><i class="anticon anticon-heart"></i></span>';
                }}>
                    <HeartOutlined style={{ fontSize: '50px', color: '#FF6600' }} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;