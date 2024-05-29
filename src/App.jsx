import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import StudentRouter from './Routes/StudentRoutes.jsx'
import AdminRouter from './Routes/AdminRoutes.jsx'
import AdvisorRouter from './Routes/AdvisorRoutes.jsx'
import Login from './Login.jsx'
import axios from 'axios'
import PrivateRoute from './Routes/PrivateRoute' // Import the PrivateRoute component

const App = () => {
  const [userRole, setUserRole] = useState('')
  const [userInfo, setUserInfo] = useState(null)
  const [userToken, setUserToken] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      setUserToken(token)
    }
  }, [])

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5145/User/SignIn/', {
        email: username,
        password: password
      })
      console.log(response.data)

      setUserRole(response.data.user.roleName)
      setUserInfo(response.data.user)
      localStorage.setItem('jwt', response.data.jwt)
    } catch (error) {
      console.error('Error fetching courses:', error.message)
    }
  }

  let Page
  switch (userRole) {
    case 'Student':
      Page = (
        <StudentRouter
          userRole={userRole}
          userInfo={userInfo}
          setUserRole={setUserRole}
        />
      )
      break
    case 'Advisor':
      Page = (
        <AdvisorRouter
          userRole={userRole}
          userInfo={userInfo}
          setUserRole={setUserRole}
        />
      )
      break
    case 'Admin':
      Page = (
        <AdminRouter
          userRole={userRole}
          userInfo={userInfo}
          setUserRole={setUserRole}
        />
      )
      break
    default:
      Page = <Login onLogin={handleLogin} />
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => Page} />
        <PrivateRoute path="/student" component={() => <StudentRouter userRole={userRole} userInfo={userInfo} setUserRole={setUserRole} />} />
        <PrivateRoute path="/advisor" component={() => <AdvisorRouter userRole={userRole} userInfo={userInfo} setUserRole={setUserRole} />} />
        <PrivateRoute path="/admin" component={() => <AdminRouter userRole={userRole} userInfo={userInfo} setUserRole={setUserRole} />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App
