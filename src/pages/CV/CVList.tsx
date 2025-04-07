// src/pages/CV/CVList.tsx
import React, { useEffect, useState } from 'react';

import { Table, Button, notification } from 'antd';
import { fetchCVs, deleteCV, updateCVStatus } from '../../api/api';

interface CV {
    id: string;
    name: string;
    email: string;
    phone: string;
    createAt: string;
    statusRead: boolean;
}

const CVList: React.FC = () => {
    const [cvs, setCVs] = useState<CV[]>([]);

    useEffect(() => {
        const loadCVs = async () => {
            const cvsData = await fetchCVs();
            setCVs(cvsData);
        };
        
        loadCVs();
    }, []);

    const handleDelete = async (cvId: string) => {
        await deleteCV(cvId);
        notification.success({ message: 'Xóa CV Thành Công' });
        setCVs(cvs.filter((cv: any) => cv.id !== cvId));
    };

    const handleMarkRead = async (cvId: string) => {
        await updateCVStatus(cvId);
        notification.success({ message: 'Đã Đánh Dấu Là Đã Đọc' });
        const updatedCVs = await fetchCVs();
        setCVs(updatedCVs);
    };

    return (
        <div>
            <h2>Danh Sách CV</h2>
            <Table dataSource={cvs} rowKey="id">
                <Table.Column title="Họ Tên" dataIndex="name" />
                <Table.Column title="Email" dataIndex="email" />
                <Table.Column title="Số Điện Thoại" dataIndex="phone" />
                <Table.Column title="Ngày Gửi" dataIndex="createAt" />
                <Table.Column title="Trạng Thái" dataIndex="statusRead" render={(status) => (status ? 'Đã Xem' : 'Chưa Xem')} />
                <Table.Column
                    title="Hành Động"
                    render={(text, record) => (
                        <>
                            <Button onClick={() => handleMarkRead(record.id)}>Đánh Dấu Đã Đọc</Button>
                            <Button onClick={() => handleDelete(record.id)} danger>Xóa</Button>
                        </>
                    )}
                />
            </Table>
        </div>
    );
};

export default CVList;