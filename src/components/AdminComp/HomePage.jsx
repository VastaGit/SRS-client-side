import React from 'react';
import studentInfo from '../../data/studentInfo.json';

const HomePage = () => {
  const advisorCount = studentInfo.advisors.length;
  const studentCount = studentInfo.studentDetails.length;

  const handleViewDetails = (name) => {
    alert(`View details for ${name}`);
  };

  return (
    <div className="container w-5/6 mx-auto px-4 py-8">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Advisors</h1>
        <div className="max-h-64 overflow-y-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {studentInfo.advisors.map((advisor, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                  <td className="py-2 px-4">{advisor.name}</td>
                  <td className="py-2 px-4">
                  <div className='flex justify-end'>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                      onClick={() => handleViewDetails(advisor.name)}
                    >
                      View
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-red-600">Number of advisors: {advisorCount}</p>

        <h1 className="text-2xl font-bold mt-8 mb-4 text-red-600">Students</h1>
        <div className="max-h-64 overflow-y-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {studentInfo.studentDetails.map((student, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}`}>
                  <td className="py-2 px-4">{student.name}</td>
                  <td className="py-2 px-4 ">
                  <div className='flex justify-end'>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                      onClick={() => handleViewDetails(student.name)}
                    >
                      View
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-red-600">Number of students: {studentCount}</p>
      </div>
    </div>
  );
};

export default HomePage;
