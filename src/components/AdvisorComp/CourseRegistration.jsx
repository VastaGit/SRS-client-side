import React from 'react'
import CourseSchedule from '../CourseSchedule'

const CourseRegistration = ({schedule}) => {
  return (
    <div className='bg-white min-h-screen'>
      <div className='max-w-4xl mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-6'>Course Registration</h1>
        <div className='mb-6 p-4 bg-white shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Selected Courses</h2>
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div>Course name</div>
            <div>ECTS</div>
            <div>Credits</div>
          </div>
          <hr />
          <div className='text-right mt-4'>
            <span className='font-semibold'>Total Credits: 17</span>
          </div>
          <div className='flex justify-end space-x-4 mt-4'>
            <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>
              Remove course
            </button>
            <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'>
              Add a course
            </button>
          </div>
        </div>
        <CourseSchedule schedule={schedule}/>
        <div className='text-center mt-4'>
          <button className='bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700'>
            Save Selection
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseRegistration