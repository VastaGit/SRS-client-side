/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './AdvisorComp/Navbar.jsx';
import AcademicRecord from './AdvisorComp/HomePage.jsx';
import CourseSchedule from './AdvisorComp/CourseSchedule.jsx';

const AdvisorHomePage = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={AcademicRecord} />
            <Route path="/courseschedule" component={CourseSchedule} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdvisorHomePage;

*/import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/AdvisorComp/Navbar.jsx';
import HomePage from '../components/AdvisorComp/HomePage.jsx';
import Courses from '../components/AdminComp/Courses.jsx';


const AdvisorRouter = () => {
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

export default AdvisorRouter;
