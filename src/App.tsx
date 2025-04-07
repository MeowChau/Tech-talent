import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import JobDetails from './components/Job/JobDetails';
import SearchResults from './components/SearchResults';
import CompanyList from './components/Company/CompanyList';
import CompanyDetails from './components/Company/CompanyDetails';
import EmployerSignup from './components/Auth/EmployerSignup';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/job/:id" element={<JobDetails />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/companies" element={<CompanyList />} />
                <Route path="/company/:id" element={<CompanyDetails />} />
                <Route path="/signup-employer" element={<EmployerSignup />} />
            </Routes>
        </Router>
    );
};

export default App;