import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { LaptopOutlined } from '@ant-design/icons'; // Import icon máy tính

const Navbar: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FF6600', padding: '0 20px' }}>
            {/* Logo và tên */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <LaptopOutlined style={{ fontSize: '24px', color: '#fff', marginRight: '10px' }} />
                <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>Tech_Talent</span>
            </div>

            {/* Menu chính */}
            <Menu
                mode="horizontal"
                theme="dark"
                style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    backgroundColor: '#FF6600', // Màu cam
                    borderBottom: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    flex: 1, // Đẩy menu ra giữa
                }}
            >
                <Menu.Item key="home">
                    <Link to="/" style={{ color: '#fff' }}>Trang Chủ</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about" style={{ color: '#fff' }}>Về Chúng Tôi</Link>
                </Menu.Item>
                <Menu.Item key="jobs">
                    <Link to="/jobs" style={{ color: '#fff' }}>Tuyển Dụng</Link>
                </Menu.Item>
                <Menu.Item key="contact">
                    <Link to="/contact" style={{ color: '#fff' }}>Liên Hệ</Link>
                </Menu.Item>
            </Menu>

            {/* Nút bên phải */}
            <div>
                <Button type="default" style={{ marginRight: '10px' }}>
                    <Link to="/candidate">Ứng Viên</Link>
                </Button>
                <Button type="primary">
                    <Link to="/admin/login" style={{ color: '#fff' }}>Quản Trị Viên</Link>
                </Button>
            </div>
        </div>
    );
};

export default Navbar;