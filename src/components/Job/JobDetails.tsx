import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobById } from '../../api/api';
import { useForm } from 'react-hook-form';
import { notification, Button } from 'antd';

const JobDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<any>(null);
    
    useEffect(() => {
        const loadJob = async () => {
            const jobData = await fetchJobById(id);
            setJob(jobData);
        };
        loadJob();
    }, [id]);

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        notification.success({
            message: 'Application Submitted Successfully',
        });
    };

    if (!job) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px", backgroundColor: "#fff" }}>
            <h2 style={{ color: "#333" }}>{job.name}</h2>
            <p>Location: {job.city.join(', ')}</p>
            <p>Salary: ${job.salary}</p>
            <p>Tags: {job.tags.join(', ')}</p>
            <p>Description: {job.description}</p>
            <h3 style={{ color: "#555" }}>Apply Now</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Your Name" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input {...register("phone")} placeholder="Phone" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input {...register("email")} placeholder="Email" type="email" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <textarea {...register("description")} placeholder="Introduce Yourself" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <input {...register("linkProject")} placeholder="Link to Project" required style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                <Button type="primary" htmlType="submit">Submit Application</Button>
            </form>
        </div>
    );
};

export default JobDetails;