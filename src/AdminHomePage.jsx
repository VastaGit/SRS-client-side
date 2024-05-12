import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminNavbar from './AdminComp/AdminNavbar.jsx';
import HomePage from './AdminComp/HomePage.jsx';
import Courses from './AdminComp/Courses.jsx';
import AddUser from './AdminComp/AddUser.jsx';

const AdminHomePage = () => {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={Courses} />
            <Route path="/adduser" component={AddUser} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdminHomePage;
