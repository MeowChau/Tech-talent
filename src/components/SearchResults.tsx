import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchJobs } from '../api/api';
import { List, Card } from 'antd';

const SearchResults: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const keyword = params.get('keyword') || '';
    const city = params.get('city') || '';
    interface Job {
        id: string;
        name: string;
        salary: string;
        tags: string[];
        city: string[];
        createAt: string;
    }
    
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        const loadJobs = async () => {
            const allJobs: Job[] = await fetchJobs();
            const filteredJobs = allJobs.filter(job => 
                (keyword ? job.name.includes(keyword) : true) && 
                (city ? job.city.includes(city) : true)
            );
            setJobs(filteredJobs);
        };
        loadJobs();
    }, [keyword, city]);

    return (
        <div style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
            <h2>Kết Quá Tìm Kiếm</h2>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={jobs}
                renderItem={job => (
                    <List.Item>
                        <Card title={job.name} bordered={false}>
                            <p>Mức lương: {job.salary}</p>
                            <p>Tags: {job.tags.join(', ')}</p>
                            <p>Thành phố: {job.city.join(', ')}</p>
                            <p>Ngày đăng: {job.createAt}</p>
                            <Link to={`/job/${job.id}`}>Chi Tiết</Link>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default SearchResults;