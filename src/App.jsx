import React, { useState, useEffect } from 'react'
import StudentRouter from './Routes/StudentRoutes.jsx'
import AdminRouter from './Routes/AdminRoutes.jsx'
import AdvisorRouter from './Routes/AdvisorRoutes.jsx'
import Login from './Login.jsx'

const App = () => {
  const [userRole, setUserRole] = useState(null)

  const handleLogin = (username, password) => {

    const mockUserData = {
      username: 'john_doe',
      role: 'student'
    }

    if (mockUserData) {
      setUserRole(mockUserData.role)
      console.log(username, password)
    } else {
      console.error('User data not found')
    }
  }

  let Page
  switch (userRole) {
    case 'student':
      Page = <StudentRouter userRole={userRole} setUserRole={setUserRole}/>
      break
    case 'advisor':
      Page = <AdvisorRouter userRole={userRole} setUserRole={setUserRole}/>
      break
    case 'admin':
      Page = <AdminRouter userRole={userRole} setUserRole={setUserRole}/>
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
