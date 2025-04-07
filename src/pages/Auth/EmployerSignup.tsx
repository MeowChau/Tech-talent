// src/pages/Auth/EmployerSignup.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, notification } from 'antd';
import { createCompany } from '../../services/jobService';

interface FormValues {
    companyName: string;
    phone: string;
    email: string;
    password: string;
}

const EmployerSignup: React.FC = () => {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            await createCompany(data);
            notification.success({ message: 'Đăng Ký Thành Công!' });
            window.location.href = '/admin/login';
        } catch (error) {
            notification.error({ message: 'Đăng Ký Thất Bại!' });
        }
    };

    return (
        <div style={{ padding: '40px' }}>
            <h2>Đăng Ký Nhà Tuyển Dụng</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Tên Công Ty" {...register('companyName', { required: true })} style={{ marginBottom: '10px' }} />
                <Input placeholder="Số Điện Thoại" {...register('phone', { required: true })} style={{ marginBottom: '10px' }} />
                <Input placeholder="Email" {...register('email', { required: true })} style={{ marginBottom: '10px' }} />
                <Input.Password placeholder="Mật Khẩu" {...register('password', { required: true })} style={{ marginBottom: '10px' }} />
                <Button type="primary" htmlType="submit">Đăng Ký</Button>
            </form>
        </div>
    );
};

export default EmployerSignup;