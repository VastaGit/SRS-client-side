// App.jsx

import React, { useState, useEffect } from 'react';
import simulateUserAuthentication from './data/authUtils.jsx'; // Import the authentication function
import StudentHomePage from './StudentHomePage.jsx';
import AdminHomePage from './AdminHomePage.jsx';
import AdvisorHomePage from './AdvisorHomePage.jsx';

const App = () => {
  // Define state to manage the role of the user
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Call the authentication function when the app starts to simulate user login
    simulateUserAuthentication();
    
    // Retrieve user information from local storage
    const userData = localStorage.getItem('user');

    if (userData) {
      // Parse user data and set the role
      const { role } = JSON.parse(userData);
      setRole(role);
    } else {
      console.error('User data not found');
    }
  }, []);

  // Conditionally render the homepage based on the role
  let homePage;
  switch (role) {
    case 'student':
      homePage = <StudentHomePage />;
      break;
    case 'advisor':
      homePage = <AdvisorHomePage />;
      break;
    case 'admin':
      homePage = <AdminHomePage />;
      break;
    default:
      homePage = <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the homepage based on the role */}
      {homePage}
    </div>
  );
};

export default App;
