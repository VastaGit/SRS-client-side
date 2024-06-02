import React, { useEffect, useState } from 'react'
import '../styles/componentStyles/courseSchedule.css'
import axios from 'axios'

const normalizeDay = day => {
  const dayMap = {
    Mon: 'Mon',
    Monday: 'Mon',
    Tue: 'Tue',
    Tuesday: 'Tue',
    Wed: 'Wed',
    Wednesday: 'Wed',
    Thu: 'Thu',
    Thursday: 'Thu',
    Fri: 'Fri',
    Friday: 'Fri'
  }
  return dayMap[day] || day
}

const normalizeTime = time => {
  return time.length === 8 ? time.slice(0, 5) : time
}

const groupCoursesByDayAndStartTime = courses => {
  const groupedCourses = {}

  courses.forEach(course => {
    const day = normalizeDay(course.dayOfWeek)
    const startTime = normalizeTime(course.startTime)
    const key = `${day}-${startTime}`
    if (!groupedCourses[key]) {
      groupedCourses[key] = []
    }
    groupedCourses[key].push(course)
  })

  return groupedCourses
}

const CourseSchedule = ({ userInfo, courses: initialCourses }) => {
  const [courses, setCourses] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  useEffect(() => {
    if (!initialCourses) {
      const fetchCourses = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5145/Schedule/${
              userInfo.roleName === 'Student' ? 'StudentId' : 'ProfessorId'
            }/${userInfo.userId}`
          )
          setCourses(response.data)
        } catch (error) {
          console.error('Error fetching courses:', error.message)
        }
      }
      fetchCourses()
    } else {
      setCourses(initialCourses)
    }
  }, [userInfo, initialCourses])

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const time = [
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00'
  ]

  const groupedCourses = groupCoursesByDayAndStartTime(courses)

  return (
    <div className='schedule-container w-5/6'>
      <h2 className='text-2xl font-bold mb-4 text-red-600'>Course Schedule</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map((day, index) => (
              <th key={index} className='day'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {time.map((timeSlot, index) => (
            <tr key={index}>
              <th>{timeSlot}</th>
              {daysOfWeek.map((day, dayIndex) => (
                <td key={dayIndex}>
                  {Object.keys(groupedCourses).map((key, groupIndex) => {
                    const [courseDay, courseStartTime] = key.split('-')
                    const courseStartHour = parseInt(
                      courseStartTime.split(':')[0],
                      10
                    )
                    const isCourseOnThisDay = courseDay === day

                    return courseStartHour === index + 8 &&
                      isCourseOnThisDay ? (
                      <div key={groupIndex} className='course-group'>
                        {groupedCourses[key].map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className='course'
                            onClick={() => {
                              setSelectedCourse(course)
                              setShowPopup(true)
                            }}
                          >
                            <div className='course-title'>
                              {course.courseCode}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null
                  })}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <div className='popup' onClick={() => setShowPopup(false)}>
          <div className='popup-content'>
            <h2>Course details</h2>
            <p className='mb'>
              Course code:{' '}
              <span className='c-gold'>{selectedCourse.courseCode}</span>
            </p>
            <p className='mb'>
              Teacher:{' '}
              <span className='c-gold'>{selectedCourse.professorName}</span>
            </p>
            <p className='mb'>
              Location: <span className='c-gold'>{selectedCourse.roomNo}</span>
            </p>
            <p className='mb'>
              Start Time:{' '}
              <span className='c-gold'>{selectedCourse.startTime}</span>
            </p>
            <p className='mb'>
              End Time: <span className='c-gold'>{selectedCourse.endTime}</span>
            </p>
            <div className='btn'>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseSchedule
