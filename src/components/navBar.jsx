import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-red-600 text-white p-4 shadow-md flex justify-between items-center'>
      <div className='flex gap-4'>
        <a href='#' className='hover:text-red-300'>
          Home
        </a>
        <a href='#' className='hover:text-red-300'>
          Course Schedule
        </a>
        <a href='#' className='hover:text-red-300'>
          Academic Record
        </a>
        <a href='#' className='hover:text-red-300'>
          Registration
        </a>
      </div>
      <button className='hover:text-red-300'>Log out</button>
    </div>
  )
}

export default NavBar
