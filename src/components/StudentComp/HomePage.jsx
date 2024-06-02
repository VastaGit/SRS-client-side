import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = ({ userInfo }) => {
  const [courses, setCourses] = useState([]);
  const gpa = 3.5;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5145/Schedule/StudentId/' + userInfo.userId);
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };
    fetchCourses();
  }, [userInfo]);

  return (
    <div className="container w-5/6 mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Current Courses</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full  border-collapse border border-black-500 " >
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 border-solid border-2 border-black-600 ">Course Name</th>
              <th className="px-4 py-2 border-solid border-2 border-black-600 ">Course Code</th>
              <th className="px-4 py-2 border-solid border-2 border-black-600 ">Instructor</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="px-4 py-2">{course.courseName}</td>
                <td className="px-4 py-2">{course.courseCode}</td>
                <td className="px-4 py-2">{course.professorName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold mt-8 text-red-600 ">Current GPA: {gpa}</h2>
    </div>
  );
};

export default HomePage;