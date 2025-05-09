import React from 'react';
import { Row, Col } from 'antd';
import JobCard from './JobCard';

interface Job {
    id: string;
    name: string;
    unit: string;
    city: string[];
    deadline: string;
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
                        id={job.id}
                        title={job.name}
                        unit={job.unit}
                        area={job.city.join(', ')}
                        deadline={job.deadline}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default JobListContent;