import React from 'react'
import CourseTable from './courseTable'
import NavBar from './navBar'

const CourseSchedule = () => {
  
  return (
    <div className='bg-white min-h-screen'>
      <NavBar />
      <div className='max-w-4xl mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-6'>Course Schedule</h1>
        <CourseTable />
      </div>
    </div>
  )
}
export default CourseSchedule
