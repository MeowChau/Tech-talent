import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs'; // Import trang "Về Chúng Tôi"
import CandidateLogin from './pages/Auth/CandidateLogin';


const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} /> {/* Route cho trang "Về Chúng Tôi" */}
                <Route path="/candidate/login" element={<CandidateLogin />} />

            </Routes>
            <Footer />
        </Router>
    );
};

export default App;