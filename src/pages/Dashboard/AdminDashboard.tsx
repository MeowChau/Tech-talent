// src/pages/Dashboard/AdminDashboard.tsx
import React, { useEffect, useState } from 'react';
import { fetchJobs, fetchCVs } from '../../api/api';
import { Card, Col, Row, Statistic } from 'antd';

const AdminDashboard: React.FC = () => {
    const [jobCount, setJobCount] = useState(0);
    const [activeJobCount, setActiveJobCount] = useState(0);
    const [inactiveJobCount, setInactiveJobCount] = useState(0);
    const [cvCount, setCvCount] = useState(0);
    const [readCvCount, setReadCvCount] = useState(0);
    const [unreadCvCount, setUnreadCvCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const jobs = await fetchJobs();
            const cvs = await fetchCVs();

            setJobCount(jobs.length);
            setActiveJobCount(jobs.filter(job => job.status).length);
            setInactiveJobCount(jobs.filter(job => !job.status).length);

            setCvCount(cvs.length);
            setReadCvCount(cvs.filter(cv => cv.statusRead).length);
            setUnreadCvCount(cvs.filter(cv => !cv.statusRead).length);
        };

        fetchData();
    }, []);

    return (
        <div style={{ padding: '40px' }}>
            <h2>Dashboard</h2>
            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <Statistic title="Tổng Số Job" value={jobCount} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Job Đang Bật" value={activeJobCount} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Job Đang Tắt" value={inactiveJobCount} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Tổng Số CV" value={cvCount} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="CV Đã Đọc" value={readCvCount} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="CV Chưa Đọc" value={unreadCvCount} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashboard;