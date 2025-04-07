import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar: React.FC = () => {
    return (
        <Menu mode="horizontal" style={{ backgroundColor: '#001529', color: '#fff' }}>
            <Menu.Item key="home">
                <Link to="/" style={{ color: '#fff' }}>Home</Link>
            </Menu.Item>
            <Menu.Item key="companies">
                <Link to="/companies" style={{ color: '#fff' }}>Companies</Link>
            </Menu.Item>
            <Menu.Item key="signup">
                <Link to="/signup-employer" style={{ color: '#fff' }}>Become an Employer</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;