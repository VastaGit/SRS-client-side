import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {

  return (
    <nav className="bg-red-600 p-4">
      <div className="flex justify-end">
        <div className="flex space-x-4">
          <NavLink to="/admin/home" className='text-white hover:text-gray-200 no-underline pr-4 border-r-2'>Home</NavLink>
          <NavLink to="/admin/courses" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Courses</NavLink>
          <NavLink to="/admin/addUser" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Add User</NavLink>
          <NavLink to="/admin/logout" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Logout</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;