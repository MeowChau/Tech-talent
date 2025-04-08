import React from 'react';
import { LaptopOutlined } from '@ant-design/icons'; // Import icon từ Navbar

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
            <div style={{ flex: 1, textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <LaptopOutlined style={{ fontSize: '24px', color: '#FF6600' }} />
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Tech_Talent</span>
            </div>

            {/* Cột giữa */}
            <div style={{ flex: 1, textAlign: 'center' }}>
                <p>Contact us: support@techtalent.com</p>
            </div>

            {/* Cột bên phải */}
            <div style={{ flex: 1, textAlign: 'right' }}>
                <p>&copy; 2023 Job Search App. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;