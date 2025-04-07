import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../../api/api';
import { Link } from 'react-router-dom';

const JobList: React.FC = () => {
    interface Job {
        id: string;
        name: string;
    }

    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        const loadJobs = async () => {
            const data = await fetchJobs();
            setJobs(data);
        };
        loadJobs();
    }, []);

    return (
        <div style={{ padding: "20px", backgroundColor: "#fff" }}>
            <h2 style={{ color: "#333" }}>Job List</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <Link to={`/job/${job.id}`}>{job.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;