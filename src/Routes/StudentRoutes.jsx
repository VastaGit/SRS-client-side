import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/studentComp/Navbar.jsx';
import HomePage from '../components/studentComp/HomePage.jsx';
import CourseSchedule from '../components/studentComp/CourseSchedule.jsx';
import AcademicRecord from '../components/studentComp/AcademicRecord.jsx';
import Registration from '../components/studentComp/Registration.jsx';
import studentInfo from '../data/studentInfo.json';
import '../styles/styles.css';

const StudentRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/home">
              <HomePage courses={studentInfo.courses} gpa={studentInfo.gpa} />
            </Route>
            <Route path="/courseschedule">
              <CourseSchedule schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />
            </Route>
            <Route path="/academicrecord">
              <AcademicRecord academicRecord={studentInfo.academicRecord} />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default StudentRouter;
