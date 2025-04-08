// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/AdminDashboard';
import JobManagement from './pages/Job/JobManagement';
import CVList from './pages/CV/CVList';
import JobDetails from './pages/Job/JobDetails';
import CompanyDetails from './pages/Company/CompanyDetails';
import Home from './pages/Home/Home';
import AdminLogin from './pages/Auth/AdminLogin';
import EmployerSignup from './pages/Auth/EmployerSignup';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/signup" element={<EmployerSignup />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/jobs" element={<JobManagement />} />
                <Route path="/admin/cvs" element={<CVList />} />
                <Route path="/job/:id" element={<JobDetails />} />
                <Route path="/company/:id" element={<CompanyDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;