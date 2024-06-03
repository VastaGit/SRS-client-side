/*import React from 'react'
import CourseSchedule from '../CourseSchedule'

const CourseRegistration = ({studentId}) => {
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
        <CourseSchedule studentId={studentId}/>
        <div className='text-center mt-4'>
          <button className='bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700'>
            Save Selection
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseRegistration*/

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CourseSchedule from '../CourseSchedule'

const CourseRegistration = ({ userInfo }) => {
  const [courses, setCourses] = useState([])
  const [selectedCourses, setSelectedCourses] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [ScheduledCourses, setScheduledCourses] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5145/Course/available/' + userInfo.userId)
      .then(response => {
        setCourses(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error)
      })
  }, [userInfo])

  const handleSelectCourse = course => {
    setSelectedCourses([...selectedCourses, course])
    axios
      .get('http://localhost:5145/Course/available/' + userInfo.userId)
      .then(response => {
        const filteredSchedules = response.data
          .filter(item => item.courseCode === course.courseCode)
          .map(item => item.schedule.map(scheduleItem => ({
            dayOfWeek: scheduleItem.dayOfWeek,
            startTime: scheduleItem.startTime,
            endTime: scheduleItem.endTime,
            roomNo: scheduleItem.roomNo,
            scheduleId: scheduleItem.scheduleId,
            courseCode: item.courseCode,
            courseName: item.courseName,
            professorName: item.professorName
          })))
          .flat()
        setScheduledCourses(prevScheduledCourses => [
          ...prevScheduledCourses,
          ...filteredSchedules
        ])
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error)
      })
    setShowModal(false)
  }

  const handleRemoveCourse = course => {
    setSelectedCourses(
      selectedCourses.filter(c => c.courseId !== course.courseId)
    )
    setScheduledCourses(
      ScheduledCourses.filter(sc => sc.courseCode !== course.courseCode)
    )
  }

  const handleSaveSelection = async () => {
    const data = {
      studentId: userInfo.userId,
      courseId: selectedCourses.map(course => course.courseId),
      isApproved: 1 // Setting isApproved to 1 for advisor approval
    }
  
    try {
      const response = await axios.post(`http://localhost:5145/StudentCourse/${userInfo.userId}`, data)
      console.log(response.data)
  
      alert('Courses saved successfully!')
    } catch (error) {
      console.error('Error saving courses:', error)
      alert('Failed to save courses.')
    }
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
                <th className='border px-4 py-2 bg-green-100'>Course Name</th>
                <th className='border px-4 py-2 bg-green-100'>Course Code</th>
                <th className='border px-4 py-2 bg-green-100'>Professor</th>
                <th className='border px-4 py-2 bg-green-100'>Credit Hours</th>
                <th className='border px-4 py-2 bg-green-100'>Actions</th>
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
        <CourseSchedule courses={ScheduledCourses} />
        <div className='text-center mt-4'>
          <button
            onClick={handleSaveSelection}
            className='bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700'
          >
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
            <div className='overflow-y-auto' style={{ maxHeight: '300px' }}>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='border px-4 py-2 bg-green-100'>
                      Course Name
                    </th>
                    <th className='border px-4 py-2 bg-green-100'>
                      Credit Hours
                    </th>
                    <th className='border px-4 py-2 bg-green-100'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map(course => (
                    <tr key={course.courseId}>
                      <td className='border px-4 py-2'>{course.courseName}</td>
                      <td className='border px-4 py-2'>{course.creditHours}</td>
                      <td className='border px-4 py-2'>
                        <button
                          onClick={() => handleSelectCourse(course)}
                          className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700'
                        >
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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