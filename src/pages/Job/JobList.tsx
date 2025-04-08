import React, { useState } from 'react';
import { Typography, Button } from 'antd';
import FilterDropdown from '../../components/common/FilterDropdown';
import JobListContent from '../../components/job/JobListContent';

const { Title } = Typography;

const JobList: React.FC = () => {
    const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
    const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

    const jobs = [
        { id: '1', title: 'Cloud', unit: 'Tổng Công ty Giải pháp', area: 'TP HCM', deadline: '2025-12-31', name: 'Cloud Engineer', city: ['Ho Chi Minh City'] },
        { id: '2', title: 'Cyber Security', unit: 'Tổng Công ty Giải pháp', area: 'TP HCM', deadline: '2025-12-31', name: 'Cyber Security Specialist', city: ['Ho Chi Minh City'] },
        { id: '3', title: 'AI', unit: 'Tổng Công ty Giải pháp', area: 'TP HCM', deadline: '2025-12-31', name: 'AI Researcher', city: ['Ho Chi Minh City'] },
        { id: '4', title: 'Semiconductor', unit: 'Tổng Công ty Công nghệ', area: 'Hà Nội', deadline: '2025-12-31', name: 'Semiconductor Engineer', city: ['Hanoi'] },
        { id: '5', title: '5G', unit: 'Tổng Công ty Công nghệ', area: 'Hà Nội', deadline: '2025-12-31', name: '5G Specialist', city: ['Hanoi'] },
        { id: '6', title: 'Software Engineering', unit: 'Tổng Công ty Công nghệ', area: 'Hà Nội', deadline: '2025-12-31', name: 'Software Engineer', city: ['Hanoi'] },
        { id: '7', title: 'Data Engineering', unit: 'Tổng Công ty Đầu tư', area: 'Ninh Bình', deadline: '2025-12-31', name: 'Data Engineer', city: ['Ninh Binh'] },
        { id: '8', title: 'IoT', unit: 'Tổng Công ty Đầu tư', area: 'Ninh Bình', deadline: '2025-12-31', name: 'IoT Specialist', city: ['Ninh Binh'] },
        { id: '9', title: 'Aerospace', unit: 'Tổng Công ty Đầu tư', area: 'Ninh Bình', deadline: '2025-12-31', name: 'Aerospace Engineer', city: ['Ninh Binh'] },
    ];

    const filteredJobs = jobs.filter((job) => {
        const unitMatch = selectedUnits.length === 0 || selectedUnits.includes(job.unit);
        const areaMatch = selectedAreas.length === 0 || selectedAreas.includes(job.area);
        return unitMatch && areaMatch;
    });

    const handleUnitChange = (item: string) => {
        setSelectedUnits((prev) =>
            prev.includes(item) ? prev.filter((unit) => unit !== item) : [...prev, item]
        );
    };

    const handleAreaChange = (item: string) => {
        setSelectedAreas((prev) =>
            prev.includes(item) ? prev.filter((area) => area !== item) : [...prev, item]
        );
    };

    const clearAll = () => {
        setSelectedUnits([]);
        setSelectedAreas([]);
    };

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
            <div style={{ flex: 7, backgroundColor: '#f9f9f9', padding: '20px', overflow: 'auto' }}>
                <Title level={3} style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Các vị trí tuyển dụng tại Tech Talent 2025
                </Title>
                <JobListContent jobs={filteredJobs} />
            </div>
            <div style={{ flex: 3, padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Title level={4} style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Lọc kết quả
                </Title>
                <FilterDropdown
                    title="Đơn vị tuyển dụng"
                    options={['Tổng Công ty Giải pháp', 'Tổng Công ty Công nghệ', 'Tổng Công ty Đầu tư']}
                    selectedOptions={selectedUnits}
                    onChange={handleUnitChange}
                />
                <FilterDropdown
                    title="Khu vực"
                    options={['Hà Nội', 'Ninh Bình', 'TP HCM']}
                    selectedOptions={selectedAreas}
                    onChange={handleAreaChange}
                />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button type="default" onClick={clearAll}>
                        Xóa tất cả
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JobList;