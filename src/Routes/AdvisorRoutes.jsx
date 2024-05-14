import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/AdvisorComp/Navbar.jsx';
import HomePage from '../components/AdvisorComp/HomePage.jsx';
import Courses from '../components/AdminComp/Courses.jsx';
import CourseSchedule from '../components/CourseSchedule.jsx';
import CourseRegistration from '../components/AdvisorComp/CourseRegistration.jsx';
import studentInfo from '../data/studentInfo.json';
import AcademicRecord from '../components/AcademicRecord.jsx';

const AdvisorRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={Courses} />
            <Route path="/course-schedule">
              <CourseSchedule schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />
            </Route>
            <Route path="/course-registration">
              <CourseRegistration schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />
            </Route>
            <Route path="/academic-record">
              <AcademicRecord academicRecord={studentInfo.academicRecord} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdvisorRouter;
