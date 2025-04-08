import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div style={{ 
            padding: '40px', 
            maxWidth: '800px', 
            margin: '0 auto', 
            textAlign: 'center', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
        }}>
            <h1 style={{ color: '#FF6600', marginBottom: '20px' }}>Về Chúng Tôi</h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                Chúng tôi đang tăng tốc mạnh mẽ, mở rộng ảnh hưởng tại nhiều thị trường trong khu vực. 
                Những kế hoạch táo bạo đang được triển khai, và chúng tôi rất mong bạn sẽ đồng hành 
                cùng chúng tôi kiến tạo xã hội số theo phong cách của chính bạn.
            </p>
        </div>
    );
};

export default AboutUs;