import React from 'react';
import data from '../../data/studentInfo.json';

const HomePage = () => {
  const { studentDetails } = data;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Students List</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Student Name</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {studentDetails.map((student, index) => (
              <tr key={index} className={(index % 2 === 0) ? 'bg-amber-400' : 'bg-white'}>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-end">
                    <button onClick={() => handleRegistrationClick(student.studentId)} className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-blue-600">Registration</button>
                    <button onClick={() => handleAcademicRecordClick(student.studentId)} className="ml-2 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Academic Record</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
