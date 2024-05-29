import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/AdvisorComp/Navbar.jsx';
import HomePage from '../components/AdvisorComp/HomePage.jsx';
import Courses from '../components/AdminComp/Courses.jsx';
import CourseSchedule from '../components/CourseSchedule.jsx';
import CourseRegistration from '../components/AdvisorComp/CourseRegistration.jsx';
import studentInfo from '../data/studentInfo.json';
import AcademicRecord from '../components/AcademicRecord.jsx';

const AdvisorRouter = ({userRole, setUserRole}) => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/advisor/home" component={HomePage} />
            {/* <Route path="/advisor/courses" component={Courses} /> */}
            <Route path="/advisor/course-schedule">
              <CourseSchedule schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />
            </Route>
            {/* <Route path="/advisor/course-registration">
              <CourseRegistration schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />
            </Route>
            <Route path="/advisor/academic-record">
              <AcademicRecord academicRecord={studentInfo.academicRecord} />
            </Route> */}
            <Route path='/advisor/logout'>
              {({ history }) => {
                setUserRole(null)
                localStorage.removeItem('jwt')
                localStorage.removeItem('userRole')
                localStorage.removeItem('username')
                history.push('/')
                return null
              }}
            </Route>
            <Redirect from='/' to='/advisor/home' />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdvisorRouter;
