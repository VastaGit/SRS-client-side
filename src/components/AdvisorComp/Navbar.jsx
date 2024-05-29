import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='justify-end'>
      <div className='flex space-x-4'>
        <NavLink to='/advisor/home' className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Home</NavLink>
        <NavLink to='/advisor/course-schedule' className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Course Schedule</NavLink>
        <NavLink to='/advisor/logout' className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>Logout</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
