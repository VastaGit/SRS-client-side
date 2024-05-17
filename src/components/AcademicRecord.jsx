import React from 'react';

const AcademicRecord = ({ academicRecord }) => {
  return (
    <div className="container w-5/6 mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Academic Record</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full  border-collapse border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-left">Semester</th>
              <th className="px-4 py-2 text-left">Course</th>
              <th className="px-4 py-2 text-left">Grade</th>
            </tr>
          </thead>
          <tbody>
            {academicRecord.map((record, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="px-4 py-2">{record.year}</td>
                <td className="px-4 py-2">{record.semester}</td>
                <td className="px-4 py-2">{record.course}</td>
                <td className="px-4 py-2">{record.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcademicRecord;
