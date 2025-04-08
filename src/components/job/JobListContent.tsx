import React from 'react';
import { Row, Col } from 'antd';
import JobCard from './JobCard';

interface Job {
    id: number;
    title: string;
    unit: string;
    area: string;
}

interface JobListContentProps {
    jobs: Job[];
}

const JobListContent: React.FC<JobListContentProps> = ({ jobs }) => {
    return (
        <Row gutter={[24, 24]}>
            {jobs.map((job) => (
                <Col key={job.id} xs={24} sm={12} md={8}>
                    <JobCard
                        title={job.title}
                        unit={job.unit}
                        area={job.area}
                        deadline="31/12/2025"
                    />
                </Col>
            ))}
        </Row>
    );
};

export default JobListContent;