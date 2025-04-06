import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../../api/api';
import { Link } from 'react-router-dom';

const CompanyList: React.FC = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const loadCompanies = async () => {
            const data = await fetchCompanies();
            setCompanies(data);
        };
        loadCompanies();
    }, []);

    return (
        <div style={{ padding: "20px", backgroundColor: "#fff" }}>
            <h2 style={{ color: "#333" }}>Company List</h2>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        <Link to={`/company/${company.id}`}>{company.companyName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;