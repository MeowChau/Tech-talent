import React, { useState } from 'react';
import { Card, Row, Col, Typography, Button, Dropdown, Menu, Checkbox } from 'antd';
import { DownOutlined, RightOutlined } from '@ant-design/icons'; // Import icons

const { Title, Text } = Typography;

const JobList: React.FC = () => {
    // State để quản lý các mục được chọn
    const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
    const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

    // Danh sách các vị trí tuyển dụng
    const jobs = [
        { id: 1, title: 'Cloud', unit: 'Tổng Công ty Giải pháp', area: 'TP HCM' },
        { id: 2, title: 'Cyber Security', unit: 'Tổng Công ty Giải pháp', area: 'TP HCM' },
        { id: 3, title: 'AI', unit: 'Tổng Công ty Giải pháp', area: 'TP HCM' },
        { id: 4, title: 'Semiconductor', unit: 'Tổng Công ty Công nghệ', area: 'Hà Nội' },
        { id: 5, title: '5G', unit: 'Tổng Công ty Công nghệ', area: 'Hà Nội' },
        { id: 6, title: 'Software Engineering', unit: 'Tổng Công ty Công nghệ', area: 'Hà Nội' },
        { id: 7, title: 'Data Engineering', unit: 'Tổng Công ty Đầu tư', area: 'Ninh Bình' },
        { id: 8, title: 'IoT', unit: 'Tổng Công ty Đầu tư', area: 'Ninh Bình' },
        { id: 9, title: 'Aerospace', unit: 'Tổng Công ty Đầu tư', area: 'Ninh Bình' },
    ];

    // Lọc danh sách công việc dựa trên lựa chọn
    const filteredJobs = jobs.filter((job) => {
        const unitMatch = selectedUnits.length === 0 || selectedUnits.includes(job.unit);
        const areaMatch = selectedAreas.length === 0 || selectedAreas.includes(job.area);
        return unitMatch && areaMatch;
    });

    // Xử lý chọn/deselect cho "Đơn vị tuyển dụng"
    const handleUnitChange = (item: string) => {
        setSelectedUnits((prev) =>
            prev.includes(item) ? prev.filter((unit) => unit !== item) : [...prev, item]
        );
    };

    // Xử lý chọn/deselect cho "Khu vực"
    const handleAreaChange = (item: string) => {
        setSelectedAreas((prev) =>
            prev.includes(item) ? prev.filter((area) => area !== item) : [...prev, item]
        );
    };

    // Xóa tất cả lựa chọn
    const clearAll = () => {
        setSelectedUnits([]);
        setSelectedAreas([]);
    };

    // Menu cho "Đơn vị tuyển dụng"
    const unitMenu = (
        <Menu>
            {['Tổng Công ty Giải pháp', 'Tổng Công ty Công nghệ', 'Tổng Công ty Đầu tư'].map((item) => (
                <Menu.Item key={item}>
                    <Checkbox
                        checked={selectedUnits.includes(item)}
                        onChange={() => handleUnitChange(item)}
                    >
                        {item}
                    </Checkbox>
                </Menu.Item>
            ))}
        </Menu>
    );

    // Menu cho "Khu vực"
    const areaMenu = (
        <Menu>
            {['Hà Nội', 'Ninh Bình', 'TP HCM'].map((item) => (
                <Menu.Item key={item}>
                    <Checkbox
                        checked={selectedAreas.includes(item)}
                        onChange={() => handleAreaChange(item)}
                    >
                        {item}
                    </Checkbox>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}> {/* Trừ chiều cao của footer */}
            {/* Phần bên trái (70%) */}
            <div style={{ 
                flex: 7, 
                backgroundColor: '#f9f9f9', 
                padding: '20px', 
                overflow: 'auto' // Thêm cuộn dọc nếu nội dung vượt quá
            }}>
                <Title level={3} style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Các vị trí tuyển dụng tại Tech Talent 2025
                </Title>
                <Row gutter={[24, 24]}> {/* Tăng khoảng cách giữa các hàng và cột */}
                    {filteredJobs.map((job) => (
                        <Col key={job.id} xs={24} sm={12} md={8}>
                            <Card 
                                hoverable 
                                style={{ 
                                    textAlign: 'center', 
                                    borderRadius: '8px', 
                                    height: '240px', // Tăng chiều cao của các ô
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'flex-start', // Căn nội dung lên trên
                                    alignItems: 'center', 
                                    padding: '20px' 
                                }}
                                bodyStyle={{ padding: '20px' }}
                            >
                                <Title level={5} style={{ margin: 0 }}>
                                    Tech_talent_{job.title}
                                </Title>
                                <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
                                    <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                                        Ngày hết hạn: 31/12/2025
                                    </Text>
                                    <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                                        {job.unit}
                                    </Text>
                                    <Text style={{ color: '#888', display: 'block', marginBottom: '8px' }}>
                                        {job.area}
                                    </Text>
                                </div>
                                <div style={{ marginTop: 'auto' }}> {/* Đặt button ở dưới cùng */}
                                    <Button type="link" icon={<RightOutlined />}>
                                        Xem thêm
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Phần bên phải (30%) */}
            <div style={{ 
                flex: 3, 
                display: 'flex', 
                justifyContent: 'flex-start', // Căn nội dung lên trên
                alignItems: 'flex-start', 
                padding: '20px', 
                flexDirection: 'column', 
                overflow: 'auto' // Thêm cuộn dọc nếu nội dung vượt quá
            }}>
                <Title level={4} style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                    Lọc kết quả
                </Title>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <Dropdown overlay={unitMenu} trigger={['click']}>
                        <Button style={{ width: '100%', textAlign: 'left' }}>
                            Đơn vị tuyển dụng <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div style={{ width: '100%', marginBottom: '10px' }}>
                    <Dropdown overlay={areaMenu} trigger={['click']}>
                        <Button style={{ width: '100%', textAlign: 'left' }}>
                            Khu vực <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <Button type="default" onClick={clearAll} style={{ alignSelf: 'center', marginTop: '10px' }}>
                    Xóa tất cả
                </Button>
            </div>
        </div>
    );
};

export default JobList;