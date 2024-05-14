import React, { useState } from 'react'
import '../styles/componentStyles/courseSchedule.css'

const groupCoursesByDayAndStartTime = courses => {
  const groupedCourses = {}

  courses.forEach(course => {
    const key = `${course.day}-${course.start}`
    if (!groupedCourses[key]) {
      groupedCourses[key] = []
    }
    groupedCourses[key].push(course)
  })

  return groupedCourses
}

const CourseTable = ({ schedule }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const getDayIndex = day => {
    return daysOfWeek.indexOf(day)
  }
  const time = [
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM'
  ]
  const [showPopup, setShowPopup] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  // Group courses by their start times
  const groupedCourses = groupCoursesByDayAndStartTime(schedule[0].courses)

  return (
    <div className='schedule-container'>
      <table>
        <tr>
          <th></th>
          {daysOfWeek.map((day, index) => (
            <th key={index} className='day'>
              {day}
            </th>
          ))}
        </tr>
        {time.map((timeSlot, index) => (
          <tr key={index}>
            <th>{timeSlot}</th>
            {daysOfWeek.map((day, dayIndex) => (
              <td key={dayIndex}>
                {Object.values(groupedCourses).map((courses, groupIndex) => {
                  const courseStartHour = new Date(
                    `1970-01-01T${courses[0].start}`
                  ).getHours()
                  const isCourseOnThisDay = courses.some(
                    course => getDayIndex(course.day) === dayIndex
                  )

                  // Check if the course starts at the current hour
                  return courseStartHour === index + 8 && isCourseOnThisDay ? (
                    <div key={groupIndex} className='course-group'>
                      {courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className='course'
                          onClick={() => {
                            setSelectedCourse(course)
                            setShowPopup(true)
                          }}
                        >
                          <div className='course-title'>
                            {course.title.substring(0, 7)}
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
      </table>
      {showPopup && (
        <div className='popup' onClick={() => setShowPopup(false)}>
          <div className='popup-content'>
            <h2>Course details</h2>
            <p className='mb'>
              Course code:{' '}
              <span className='c-gold'>
                {selectedCourse.title.substring(0, 7)}
              </span>
            </p>
            <p className='mb'>
              Teacher: <span className='c-gold'>{selectedCourse.notes}</span>
            </p>
            <p className='mb'>
              Location: <span className='c-gold'>{selectedCourse.loc}</span>
            </p>
            <p className='mb'>
              Start Time: <span className='c-gold'>{selectedCourse.start}</span>
            </p>
            <p className='mb'>
              End Time: <span className='c-gold'>{selectedCourse.end}</span>
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

export default CourseTable
