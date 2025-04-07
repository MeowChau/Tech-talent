// src/pages/Company/CompanyList.tsx
import React, { useEffect, useState } from 'react';
import { Table, Button, notification } from 'antd';
import { deleteCompany, fetchCompanies } from '../../api/api';

const CompanyList: React.FC = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const loadCompanies = async () => {
            const companiesData = await fetchCompanies();
            setCompanies(companiesData);
        };
        
        loadCompanies();
    }, []);

    const handleDelete = async (companyId: string) => {
        await deleteCompany(companyId); // Đảm bảo có hàm xóa công ty trong api
        notification.success({ message: 'Công Ty Đã Được Xóa' });
        setCompanies(companies.filter(company => company.id !== companyId));
    };

    return (
        <div>
            <h2>Danh Sách Công Ty</h2>
            <Table dataSource={companies} rowKey="id">
                <Table.Column title="Tên Công Ty" dataIndex="companyName" />
                <Table.Column title="Số Điện Thoại" dataIndex="phone" />
                <Table.Column title="Số Nhân Sự" dataIndex="quantityPeople" />
                <Table.Column title="Website" dataIndex="website" />
                <Table.Column
                    title="Hành Động"
                    render={(text, record) => (
                        <Button onClick={() => handleDelete(record.id)} danger>Xóa</Button>
                    )}
                />
            </Table>
        </div>
    );
};

export default CompanyList;