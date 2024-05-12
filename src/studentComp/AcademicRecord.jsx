import React from 'react';
import '../styles/styles.css';

const AcademicRecord = ({ academicRecord }) => {
  return (
    <div>
      <h2>Academic Record</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Semester</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {academicRecord.map((record, index) => (
            <tr key={index}>
              <td>{record.year}</td>
              <td>{record.semester}</td>
              <td>{record.course}</td>
              <td>{record.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcademicRecord;
