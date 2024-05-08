import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import CourseSchedule from './components/CourseSchedule.jsx';
import AcademicRecord from './components/AcademicRecord.jsx';
import Registration from './components/Registration.jsx';
import studentInfo from './data/studentInfo.json';
import Login from './components/Login.jsx';
import './styles/styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
    console.log(username, password);
    // setUserRole(role);
  };

  return (
    <Router>
      <div>
        {isLoggedIn && <Navbar />} {/* Navbar is only rendered if isLoggedIn is true */}
        <main className="container">
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? (
                <Redirect to="/home" />
              ) : (
                <Login onLogin={handleLogin} />
              )}
            </Route>
            <Route path="/home">
              {isLoggedIn ? (
                <HomePage courses={studentInfo.courses} gpa={studentInfo.gpa} />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/courseschedule">
              {isLoggedIn ? (
                <CourseSchedule schedule={studentInfo.schedule} />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/academicrecord">
              {isLoggedIn ? (
                <AcademicRecord academicRecord={studentInfo.academicRecord} />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/registration">
              {isLoggedIn ? (
                <Registration />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;