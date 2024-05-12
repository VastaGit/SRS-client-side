import React from 'react';
import '../styles/styles.css';

const CourseSchedule = ({ schedule, showCourseDetails }) => {
  return (
    <div>
      <h2>Course Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((timeSlot, index) => (
            <tr key={index}>
              <td>{timeSlot.time}</td>
              {timeSlot.courses.map((course, index) => (
                <td key={index} onClick={() => showCourseDetails(course.code)}>{course.code}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseSchedule;
