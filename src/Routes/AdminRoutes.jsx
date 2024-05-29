import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminNavbar from '../components/AdminComp/AdminNavbar.jsx';
import HomePage from '../components/AdminComp/HomePage.jsx';
import Courses from '../components/AdminComp/Courses.jsx';
import AddUser from '../components/AdminComp/AddUser.jsx';

const AdminRouter = ({userRole, setUserRole}) => {
  return (
    <Router>
      <div>
        <AdminNavbar />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={Courses} />
            <Route path="/addUser" component={AddUser} />
            <Route path='/logout'>
              {({ history }) => {
                setUserRole(null)
                history.push('/')
                return null
              }}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdminRouter;