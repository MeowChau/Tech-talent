import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/job/:id" component={JobDetails} />
                <Route path="/search" component={SearchResults} />
                <Route path="/companies" component={CompanyList} />
                <Route path="/company/:id" component={CompanyDetails} />
                <Route path="/signup-employer" component={EmployerSignup} />
            </Switch>
        </Router>
    );
};

export default App;