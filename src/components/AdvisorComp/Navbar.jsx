import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='justify-end'>
      <div className='flex space-x-4'>
        <Link 
          to='/' 
          className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'>
          Home
        </Link>
        <Link
          to='/course-schedule'
          className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'
        >
          Course Schedule
        </Link>
        <Link
          to='/academic-record'
          className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'
        >
          Academic Records
        </Link>
        <Link
          to='/course-registration'
          className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'
        >
          Course Registration
        </Link>
        <Link
          to='/logout'
          className='text-white hover:text-gray-200 no-underline border-r-2 pr-4'
        >
          Logout
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
