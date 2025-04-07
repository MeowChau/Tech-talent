// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar: React.FC = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <Link to="/">Trang Chủ</Link>
            </Menu.Item>
            <Menu.Item key="companies">
                <Link to="/companies">Công Ty</Link>
            </Menu.Item>
            <Menu.Item key="jobs">
                <Link to="/jobs">Các Công Việc</Link>
            </Menu.Item>
            <Menu.Item key="signup">
                <Link to="/signup-employer">Đăng Ký Nhà Tuyển Dụng</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;