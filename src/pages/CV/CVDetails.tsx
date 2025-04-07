// src/pages/CV/CVDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCVById } from '../../api/api';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const CVDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [cv, setCV] = useState<any>(null);

    useEffect(() => {
        const loadCV = async () => {
            const cvData = await fetchCVById(id);
            setCV(cvData);
        };
        loadCV();
    }, [id]);

    if (!cv) return <div>Loading...</div>;

    return (
        <div style={{ padding: '40px', backgroundColor: '#fff' }}>
            <Title>Thông Tin Ứng Viên</Title>
            <Paragraph>Họ Tên: {cv.name}</Paragraph>
            <Paragraph>Email: {cv.email}</Paragraph>
            <Paragraph>Số Điện Thoại: {cv.phone}</Paragraph>
            <Paragraph>Giới Thiệu Bản Thân: {cv.description}</Paragraph>
            <Paragraph>Thành Phố: {cv.city}</Paragraph>
            <Paragraph>Link Project: {cv.linkProject}</Paragraph>
        </div>
    );
};

export default CVDetails;