import { useState, useEffect } from 'react';
import { Row, Col, Input, Spin, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import JobCard from '../components/JobCard';
import { getJobs } from '../api/jobs';
import { Job } from '../types/job.d';

const { Title } = Typography;

const HomePage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
      <Title 
        level={2} 
        style={{ 
          textAlign: 'center', 
          marginBottom: 24,
          color: '#1890ff'
        }}
      >
        Find Your Dream Tech Job
      </Title>
      
      <Input
        placeholder="Search jobs by title, company or location"
        prefix={<SearchOutlined />}
        size="large"
        style={{ marginBottom: 24 }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <Spin size="large" style={{ display: 'block', margin: '40px auto' }} />
      ) : (
        <Row gutter={[16, 16]}>
          {filteredJobs.map((job) => (
            <Col key={job.id} xs={24} sm={12} md={8} lg={8}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <JobCard job={job} />
              </motion.div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomePage;