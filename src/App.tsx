import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import CandidateLogin from './pages/Auth/CandidateLogin';
import JobList from './pages/Job/JobList';
import JobDetails from './pages/Job/JobDetails';
import Contact from './pages/Contact/Contact';
import Register from './pages/Auth/Register'; // Import trang đăng ký

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/candidate/login" element={<CandidateLogin />} />
                <Route path="/jobs" element={<JobList />} />
                <Route path="/jobs/:id" element={<JobDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} /> {/* Định nghĩa route cho trang đăng ký */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;