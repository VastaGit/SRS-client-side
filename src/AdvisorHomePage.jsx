/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './AdvisorComp/Navbar.jsx';
import AcademicRecord from './AdvisorComp/HomePage.jsx';
import CourseSchedual from './AdvisorComp/CourseSchedual.jsx';

const AdvisorHomePage = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={AcademicRecord} />
            <Route path="/courseschedule" component={CourseSchedual} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdvisorHomePage;

*/import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './AdvisorComp/Navbar.jsx';
import HomePage from './AdvisorComp/HomePage.jsx';
import Courses from './AdminComp/Courses.jsx';


const AdminHomePage = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={Courses} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdminHomePage;