import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyById } from '../../api/api';

const CompanyDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [company, setCompany] = useState<any>(null);

    useEffect(() => {
        const loadCompany = async () => {
            if (!id) {
                console.error("Company ID is undefined");
                return;
            }
            const companyData = await fetchCompanyById(id);
            setCompany(companyData);
        };
        loadCompany();
    }, [id]);

    if (!company) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px", backgroundColor: "#fff" }}>
            <h2 style={{ color: "#333" }}>{company.companyName}</h2>
            <p>Address: {company.address}</p>
            <p>Phone: {company.phone}</p>
            <p>Email: {company.email}</p>
            <p>Website: <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></p>
            <p>Employees: {company.quantityPeople}</p>
            <p>Description: {company.description}</p>
            <p>Details: {company.detail}</p>
        </div>
    );
};

export default CompanyDetails;