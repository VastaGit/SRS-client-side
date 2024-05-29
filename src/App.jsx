import React, { useState, useEffect } from 'react'
import StudentRouter from './Routes/StudentRoutes.jsx'
import AdminRouter from './Routes/AdminRoutes.jsx'
import AdvisorRouter from './Routes/AdvisorRoutes.jsx'
import Login from './Login.jsx'
import axios from 'axios'


const App = () => {
  const [userRole, setUserRole] = useState('')
  const [username, setUsername] = useState('')
  
  const handleLogin = async (username, password) => {
    console.log(username)
    console.log(password)
    try {
      const response = await axios.post('http://localhost:5145/User/SignIn/',
      {
        "email": username,
        "password": password
      });
      console.log(response.data);
    
      // const mockUserData = {
      //   username: response.data.userName,
      //   role: response.data.roleName
      // }
      setUserRole(response.data.user.roleName)
      setUsername(response.data.user.userName)
      console.log(userRole)

    } catch (error) {
      console.error('Error fetching courses:', error.message);
    }

    // if (mockUserData) {
    //   setUserRole(mockUserData.role)
    //   console.log(username, password)
    // } else {
    //   console.error('User data not found')
    // }
  }

  let Page
  switch (userRole) {
    case 'Student':
      Page = <StudentRouter userRole={userRole} setUserRole={setUserRole} />
      break
    case 'Advisor':
      Page = <AdvisorRouter userRole={userRole} setUserRole={setUserRole} />
      break
    case 'Admin':
      Page = <AdminRouter userRole={userRole} setUserRole={setUserRole} />
      break
    default:
      Page = <Login onLogin={handleLogin} />
  }
  return (
    <div>
      {Page}
    </div>
  )
}

export default App