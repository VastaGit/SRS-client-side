import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CourseSchedule from '../CourseSchedule'

const CourseRegistration = ({ studentId }) => {
  const [courses, setCourses] = useState([])
  const [selectedCourses, setSelectedCourses] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:5145/Course/available/' + studentId)
      .then(response => {
        setCourses(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error)
      })
  }, [])

  const handleSelectCourse = course => {
    setSelectedCourses([...selectedCourses, course])
    setShowModal(false)
  }

  const handleRemoveCourse = course => {
    setSelectedCourses(
      selectedCourses.filter(c => c.courseId !== course.courseId)
    )
  }

  return (
    <div className='bg-white min-h-screen'>
      <div className='max-w-4xl mx-auto p-8'>
        <h2 className='text-2xl font-bold mb-4 text-red-600'>
          Course Registration
        </h2>
        <div className='mb-6 p-4 bg-white shadow-md'>
          <h2 className='text-xl font-semibold mb-4 text-red-600'>
            Selected Courses
          </h2>
          <table className='w-full mb-4'>
            <thead>
              <tr>
                <th className='border px-4 py-2'>Course Name</th>
                <th className='border px-4 py-2'>Course Code</th>
                <th className='border px-4 py-2'>Professor</th>
                <th className='border px-4 py-2'>Credit Hours</th>
                <th className='border px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourses.map(course => (
                <tr key={course.courseId}>
                  <td className='border px-4 py-2'>{course.courseName}</td>
                  <td className='border px-4 py-2'>{course.courseCode}</td>
                  <td className='border px-4 py-2'>{course.professorName}</td>
                  <td className='border px-4 py-2'>{course.creditHours}</td>
                  <td className='border px-4 py-2'>
                    <button
                      onClick={() => handleRemoveCourse(course)}
                      className='bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700'
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='text-right mt-4'>
            <span className='font-semibold'>
              Total Credits:{' '}
              {selectedCourses.reduce(
                (total, course) => total + course.creditHours,
                0
              )}
            </span>
          </div>
          <div className='flex justify-end space-x-4 mt-4'>
            <button
              onClick={() => setShowModal(true)}
              className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
            >
              Add a course
            </button>
          </div>
        </div>
        <CourseSchedule studentId={studentId} />
        <div className='text-center mt-4'>
          <button className='bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700'>
            Save Selection
          </button>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-8 rounded shadow-md'>
            <h2 className='text-xl font-semibold mb-4 text-red-600'>
              Select Courses
            </h2>
            <ul>
              {courses.map(course => (
                <li key={course.courseId} className='mb-2'>
                  <button
                    onClick={() => handleSelectCourse(course)}
                    className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
                  >
                    {course.courseName}
                  </button>
                </li>
              ))}
            </ul>
            <div className='text-right mt-4'>
              <button
                onClick={() => setShowModal(false)}
                className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseRegistration
