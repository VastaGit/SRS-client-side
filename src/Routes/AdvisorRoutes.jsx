import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/AdvisorComp/Navbar.jsx';
import HomePage from '../components/AdvisorComp/HomePage.jsx';
import Courses from '../components/AdminComp/Courses.jsx';
import CourseSchedule from '../components/CourseSchedule.jsx';
import CourseRegistration from '../components/AdvisorComp/CourseRegistration.jsx';
import studentInfo from '../data/studentInfo.json';
import AcademicRecord from '../components/AcademicRecord';
import PrivateRoute from './PrivateRoute' // Import the PrivateRoute component

const AdvisorRouter = ({userRole, setUserRole, userInfo}) => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
          <PrivateRoute
              exact
              path="/advisor/home"
              component={() => <HomePage userInfo={userInfo} />}
            />
            {/* <Route path="/advisor/courses" component={Courses} /> */}

            <PrivateRoute
              path="/advisor/course-schedule"
              component ={() => <CourseSchedule
               userInfo={userInfo} schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />} 
            />

             <Route path="/advisor/course-registration">
              <CourseRegistration 
              userInfo={userInfo}
              schedule={studentInfo.schedule} showCourseDetails={(courseCode) => alert(`Course Details for ${courseCode}`)} />
            </Route>
            <PrivateRoute
            path='/advisor/academic-record'
            component={() => (
              <AcademicRecord academicRecord={studentInfo.academicRecord} />
            )}
          />
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

