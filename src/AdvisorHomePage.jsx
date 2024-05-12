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
