import React from 'react';
import { useForm } from 'react-hook-form';
import { notification, Button } from 'antd';

const EmployerSignup: React.FC = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data); // Handle registration logic
        notification.success({
            message: 'Registration Successful',
        });
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#fff" }}>
            <h2 style={{ color: "#333" }}>Register as Employer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("companyName")} placeholder="Company Name" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input {...register("email")} type="email" placeholder="Email" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input {...register("phone")} placeholder="Phone" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input {...register("password")} type="password" placeholder="Password" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <Button type="primary" htmlType="submit">Register</Button>
            </form>
        </div>
    );
};

export default EmployerSignup;