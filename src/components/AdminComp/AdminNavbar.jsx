import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {

  return (
    <nav className="bg-red-600 p-4">
      <button onClick={() => alert('Logout')} className="bg-white text-red-600 px-4 py-2 rounded">Logout</button>
      <div className="flex justify-end">
        <div className="flex space-x-4">
          <NavLink to="/" className='text-white hover:text-gray-200 no-underline pr-4 border-r-2'>Home</NavLink>
          <NavLink to="/courses" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Courses</NavLink>
          <NavLink to="/addUser" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Add User</NavLink>
          <NavLink to="/logout" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Logout</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;