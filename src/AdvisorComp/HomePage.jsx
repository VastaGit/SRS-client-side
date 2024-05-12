/*
import React from 'react';
import data from '../data/studentInfo.json';

const Home = () => {
  const { academicRecord, courses } = data;

  return (
    <div>
      <h2>Academic Record</h2>
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}> 
        <table className="table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Year</th>
              <th>Semester</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {academicRecord.map((record, index) => {
              const course = courses.find(c => c.code === record.course);
              return (
                <tr key={index}>
                  <td>{course ? course.name : record.course}</td>
                  <td>{record.year}</td>
                  <td>{record.semester}</td>
                  <td>{record.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
*/
import React from 'react';
import data from '../data/studentInfo.json';
import '../AdminComp/MySpecificComponent.module.css';
const Home = () => {
  const { studentDetails } = data;

  return (
    <div>
      <h2>Students</h2>
      <table className=" table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td className=''>
              <button onClick={() => handleRegistrationClick(student.studentId)} className="btn btn-primary">Registration</button>
              <button onClick={() => handleAcademicRecordClick(student.studentId)} className="btn btn-secondary">Academic Record</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;


