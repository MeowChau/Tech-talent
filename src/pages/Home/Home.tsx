// src/pages/Home/Home.tsx
import React, { useEffect, useState } from 'react';
import { Button, Input, Select, List, Typography } from 'antd';
import { fetchCities, fetchCompanies, fetchTags } from '../../api/api';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const { Option } = Select;
const { Title } = Typography;

const Home: React.FC = () => {
    const [companies, setCompanies] = useState([]);
    const [tags, setTags] = useState([]);
    const [cities, setCities] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const loadData = async () => {
        const [companiesData, tagsData, citiesData] = await Promise.all([
            fetchCompanies(),
            fetchTags(),
            fetchCities(),
        ]);
        setCompanies(companiesData);
        setTags(tagsData);
        setCities(citiesData);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleSearch = () => {
        window.location.href = `/search?keyword=${searchKeyword}&city=${selectedCity}`;
    };

    return (
        <div style={{ padding: '40px', background: '#f0f2f5' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Title level={2} style={{ textAlign: 'center' }}>Tìm Kiếm Việc Làm</Title>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Input 
                        placeholder="Tìm kiếm công việc..." 
                        value={searchKeyword} 
                        onChange={(e) => setSearchKeyword(e.target.value)} 
                        style={{ width: '300px', marginRight: '10px' }} 
                    />
                    <Select 
                        placeholder="Chọn Thành Phố" 
                        onChange={setSelectedCity} 
                        style={{ width: '200px', marginRight: '10px' }}
                    >
                        {cities.map(city => (
                            <Option key={city.key} value={city.value}>{city.value}</Option>
                        ))}
                    </Select>
                    <Button type="primary" onClick={handleSearch}>Tìm Kiếm</Button>
                </div>
                <Title level={4}>Kỹ Năng</Title>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={tags}
                    renderItem={tag => (
                        <List.Item>
                            <Button type="dashed" style={{ width: '100%' }} onClick={() => handleSearch(tag.value)}>
                                {tag.value}
                            </Button>
                        </List.Item>
                    )}
                />
                <Title level={4}>Công Ty Nổi Bật</Title>
                <List
                    dataSource={companies}
                    renderItem={company => (
                        <List.Item>
                            <Link to={`/company/${company.id}`} style={{ width: '100%' }}>{company.companyName}</Link>
                        </List.Item>
                    )}
                />
            </motion.div>
        </div>
    );
};

export default Home;