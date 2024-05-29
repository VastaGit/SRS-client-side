import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
            <Route exact path="/admin/home" component={HomePage} />
            <Route path="/admin/courses" component={Courses} />
            <Route path="/admin/addUser" component={AddUser} />
            <Route path='/admin/logout'>
              {({ history }) => {
                  setUserRole(null)
                  localStorage.removeItem('jwt')
                  localStorage.removeItem('userRole')
                  localStorage.removeItem('username')
                  history.push('/')
                  return null
                }}
            </Route>
            <Redirect from='/' to='/admin/home' />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AdminRouter;