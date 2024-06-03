import React from 'react';
import AcademicRecord from '../AcademicRecord'; // Import the AcademicRecord component

const AcademicRecordPopup = ({ studentId, onClose }) => {
  const academicRecordData = [
    { "year": "2023", "semester": "Fall", "course": "MATH101", "grade": "A" },
    { "year": "2023", "semester": "Spring", "course": "PHYS101", "grade": "B+" },
    { "year": "2023", "semester": "Fall", "course": "MATH101", "grade": "A" },
    { "year": "2023", "semester": "Spring", "course": "PHYS101", "grade": "B+" },
    { "year": "2023", "semester": "Fall", "course": "MATH101", "grade": "A" },
    { "year": "2023", "semester": "Spring", "course": "PHYS101", "grade": "B+" }
  ];

  const cgpa = 3.5;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <button onClick={onClose} className="float-right text-lg font-semibold focus:outline-none">X</button>
        <h2 className="text-2xl font-bold mb-4 text-red-600">Academic Record</h2>
        <AcademicRecord academicRecord={academicRecordData} />
        <div className="mt-4">
          <p className="text-lg font-semibold text-red-600">CGPA: {cgpa}</p>
        </div>
      </div>
    </div>
  );
};

export default AcademicRecordPopup;
