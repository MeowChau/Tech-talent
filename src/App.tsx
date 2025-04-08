import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import CandidateLogin from './pages/Auth/CandidateLogin';
import JobList from './pages/Job/JobList';
import JobDetails from './pages/Job/JobDetails'; // Import trang chi tiết công việc
import Contact from './pages/Contact/Contact';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/candidate/login" element={<CandidateLogin />} />
                <Route path="/jobs" element={<JobList />} />
                <Route path="/jobs/:id" element={<JobDetails />} /> {/* Route chi tiết công việc */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;