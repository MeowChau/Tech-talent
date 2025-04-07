// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard/AdminDashboard';
import JobManagement from './pages/Job/JobManagement';
import CVList from './pages/CV/CVList';
import CompanyList from './pages/Company/CompanyList';
import JobDetails from './pages/Job/JobDetails';
import CompanyDetails from './pages/Company/CompanyDetails';
import Home from './pages/Home/Home';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/admin/login" component={AdminLogin} />
                <Route path="/admin/signup" component={EmployerSignup} />
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/jobs" component={JobManagement} />
                <Route path="/admin/cvs" component={CVList} />
                <Route path="/job/:id" component={JobDetails} />
                <Route path="/company/:id" component={CompanyDetails} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;