// src/pages/Auth/AdminLogin.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, notification } from 'antd';
import { loginAdmin } from '../../services/jobService';

interface FormValues {
    email: string;
    password: string;
}

const AdminLogin: React.FC = () => {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await loginAdmin(data); // Hàm loginAdmin này cần được định nghĩa trong jobService
            localStorage.setItem('token', response.data.token);
            notification.success({ message: 'Đăng Nhập Thành Công!' });
            window.location.href = '/admin/dashboard';
        } catch (error) {
            notification.error({ message: 'Đăng Nhập Thất Bại!' });
        }
    };

    return (
        <div style={{ padding: '40px' }}>
            <h2>Đăng Nhập Nhân Tuyển Dụng</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Email" {...register('email', { required: true })} style={{ marginBottom: '10px' }} />
                <Input.Password placeholder="Mật Khẩu" {...register('password', { required: true })} style={{ marginBottom: '10px' }} />
                <Button type="primary" htmlType="submit">Đăng Nhập</Button>
            </form>
        </div>
    );
};

export default AdminLogin;