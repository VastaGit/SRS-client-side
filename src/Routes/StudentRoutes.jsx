import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/StudentComp/Navbar.jsx';
import HomePage from '../components/StudentComp/HomePage.jsx';
import CourseSchedule from '../components/CourseSchedule.jsx';
import AcademicRecord from '../components/AcademicRecord.jsx';
import CourseRegistration from '../components/StudentComp/CourseRegistration.jsx';
import studentInfo from '../data/studentInfo.json';
import '../styles/styles.css';

const StudentRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <HomePage courses={studentInfo.courses} gpa={studentInfo.gpa} />
            </Route>
            <Route path="/course-schedule">
              <CourseSchedule schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />
            </Route>
            <Route path="/academic-record">
              <AcademicRecord academicRecord={studentInfo.academicRecord} />
            </Route>
            <Route path="/registration">
              <CourseRegistration schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)}/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default StudentRouter;
