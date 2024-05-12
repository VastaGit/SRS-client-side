import React from 'react';
import '../styles/styles.css';

const HomePage = ({ courses, gpa }) => {
  return (
    <div>
      <h2>Current Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Current GPA: {gpa}</h2>
    </div>
  );
};

export default HomePage;
