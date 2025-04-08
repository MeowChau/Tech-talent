import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';
import CandidateLogin from './pages/Auth/CandidateLogin';
import JobList from './pages/Job/JobList'; // Import trang "Tuyển Dụng"

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/candidate/login" element={<CandidateLogin />} />
                <Route path="/jobs" element={<JobList />} /> {/* Route cho trang "Tuyển Dụng" */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;