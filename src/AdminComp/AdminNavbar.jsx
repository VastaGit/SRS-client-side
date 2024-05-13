

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminNavbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-red-600 p-4">
      <button onClick={() => alert('Logout')} className="bg-white text-red-600 px-4 py-2 rounded">Logout</button>
      <div className="flex justify-end">
        <div className="flex space-x-4">
          <Link to="/" className={`text-white hover:text-gray-200 ${location.pathname === '/' ? 'active-link' : ''} no-underline`}>Home</Link>
          <Link to="/courses" className={`text-white hover:text-gray-200 ${location.pathname === '/courses' ? 'active-link' : ''} no-underline`}>Courses</Link>
          <Link to="/addUser" className={`text-white hover:text-gray-200 ${location.pathname === '/addUser' ? 'active-link' : ''} no-underline`}>Add User</Link>

        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
