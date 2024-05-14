import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-red-600 p-4">
      <button onClick={() => alert('Logout')} className="bg-white text-red-600 px-4 py-2 rounded">Logout</button>
      <div className="flex justify-end">
        <div className="flex space-x-4">
          <Link to="/" className={`text-white hover:text-gray-200 ${location.pathname === '/' ? 'active-link' : ''} no-underline`}>Home</Link>
          <Link to="/course-schedule" className={`text-white hover:text-gray-200 ${location.pathname === '/courseschedule' ? 'active-link' : ''} no-underline`}>Course Schedule</Link>
          <Link to="/academic-record" className={`text-white hover:text-gray-200 ${location.pathname === '/courseschedule' ? 'active-link' : ''} no-underline`}>Academic Records</Link>
          <Link to="/course-registration" className={`text-white hover:text-gray-200 ${location.pathname === '/courseschedule' ? 'active-link' : ''} no-underline`}>Course Registration</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
