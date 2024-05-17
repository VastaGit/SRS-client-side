import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='justify-end'>
      <div className='flex space-x-4'>
        <NavLink to="/" className='text-white hover:text-gray-200 no-underline pr-4 border-r-2'>Home</NavLink>
        <NavLink to="/course-schedule" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Course Schedule</NavLink>
        <NavLink to="/academic-record" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Academic Record</NavLink>
        <NavLink to="/course-registration" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Registration</NavLink>
        <NavLink to="/logout" className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Logout</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
