import React, { useState, useEffect } from 'react'
import simulateUserAuthentication from './data/authUtils.jsx' // Import the authentication function
import StudentRouter from './Routes/StudentRoutes.jsx'
import AdminRouter from './Routes/AdminRoutes.jsx'
import AdvisorRouter from './Routes/AdvisorRoutes.jsx'
import Login from './Login.jsx'

const App = () => {
  // Define state to manage the userRole of the user
  const [userRole, setUserRole] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (username, password) => {
    setIsLoggedIn(true)
    console.log(username, password)
    // setUserRole(userRole);
  }

  // useEffect(() => {
  //   // Call the authentication function when the app starts to simulate user login
  //   simulateUserAuthentication();

  //   // Retrieve user information from local storage
  //   const userData = localStorage.getItem('user');

  //   if (userData) {
  //     // Parse user data and set the userRole
  //     const { userRole } = JSON.parse(userData);
  //     setUserRole(userRole);
  //   } else {
  //     console.error('User data not found');
  //   }
  // }, []);

  // Conditionally render the homepage based on the userRole
  let homePage
  // if (isLoggedIn) {
    switch (userRole) {
      case 'student':
        homePage = <StudentRouter />
        break
      case 'advisor':
        homePage = <AdvisorRouter />
        break
      case 'admin':
        homePage = <AdminRouter />
        break
      default:
        homePage = <Login/>
    }
  // } else {
  //   homePage = <LoginPage />
  // }

  return (
    <div>
      {/* Render the homepage based on the userRole */}
      {homePage}
    </div>
  )
}

export default App
