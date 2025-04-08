import React from 'react';

const JobList: React.FC = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Phần bên trái (70%) */}
            <div style={{ 
                flex: 7, 
                backgroundColor: '#f9f9f9', 
                display: 'flex', 
                justifyContent: 'flex-start', // Đẩy nội dung lên trên
                alignItems: 'flex-start', // Căn nội dung lên trên cùng
                textAlign: 'center', 
                padding: '20px' 
            }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginTop: '20px' }}>
                    Các vị trí tuyển dụng tại Tech Talent 2025
                </h2>
            </div>

            {/* Phần bên phải (30%) */}
            <div style={{ 
                flex: 3, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                color: '#333', 
                textAlign: 'center', 
                padding: '20px' 
            }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Nội dung bên phải</h1>
            </div>
        </div>
    );
};

export default JobList;