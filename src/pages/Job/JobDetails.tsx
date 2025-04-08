import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Spin } from 'antd';
import { fetchJobById } from '../../api/api';

const { Title, Paragraph } = Typography;

const JobDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Lấy ID từ URL
    const [job, setJob] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadJob = async () => {
            if (!id) return;
            try {
                const jobData = await fetchJobById(id); // Gọi API để lấy thông tin công việc
                setJob(jobData);
            } catch (error) {
                console.error('Error fetching job details:', error);
            } finally {
                setLoading(false);
            }
        };
        loadJob();
    }, [id]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spin size="large" />
            </div>
        );
    }

    if (!job) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}>Không tìm thấy thông tin công việc.</div>;
    }

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <Title level={2} style={{ color: '#333' }}>
                {job.name} - {job.unit}
            </Title>
            <Paragraph><strong>Mức lương:</strong> {job.salary} USD</Paragraph>
            <Paragraph><strong>Thành phố:</strong> {job.city.join(', ')}</Paragraph>
            <Paragraph><strong>Mô tả công việc:</strong> {job.description}</Paragraph>
            <Paragraph><strong>Tags:</strong> {job.tags.join(', ')}</Paragraph>
            <Paragraph><strong>Ngày tạo:</strong> {job.createAt}</Paragraph>
            <Paragraph><strong>Ngày cập nhật:</strong> {job.updateAt}</Paragraph>
        </div>
    );
};

export default JobDetails;