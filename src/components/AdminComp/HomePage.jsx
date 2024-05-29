import React, { useState, useEffect } from 'react';
import axios from 'axios';
import studentInfo from '../../data/studentInfo.json';
import ModalComponent from './ModalComponent';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [selectedType, setSelectedType] = useState(""); // To keep track of the selected item type


  const handleViewDetails = (details, type) => {
    setSelectedDetails(details);
    setSelectedType(type); // Set the type of the selected item
    setIsModalOpen(true);
  };

  // State to store the fetched advisors
  const [advisors, setAdvisors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch advisors
        const advisorsResponse = await axios.get('http://localhost:5145/Advisor');
        setAdvisors(advisorsResponse.data);
        console.log(advisorsResponse.data.advisorId);

        // Fetch students
        const studentsResponse = await axios.get('http://localhost:5145/Student'); // Assuming the students endpoint URL
        setStudents(studentsResponse.data);
        console.log(studentsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const advisorCount = advisors.length;
  const studentCount = students.length;


  return (
    <div className="container w-5/6 mx-auto px-4 py-8">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Advisors</h1>
        <h2 className="py-2 px-4 border-b text-black font-bold">Name</h2>
        <div className="max-h-64 overflow-y-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              {advisors.map((advisor, index) => (
                <tr key={advisor.advisorId} className={`border-b ${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                  <td className="py-2 px-4">{advisor.professor.firstName + ' ' + advisor.professor.lastName}</td>
                  <td className="py-2 px-4">
                  <div className='flex justify-end'>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                      onClick={() => handleViewDetails(advisor, "advisor")}
                    >
                      View Details
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
        <h2 className="py-2 px-4 border-b text-black font-bold">Name</h2>
        <div className="max-h-64 overflow-y-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <tbody>
              {students.map((student, index) => (
                <tr key={student.studentId} className={`border-b ${index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}`}>
                  <td className="py-2 px-4">{student.firstName + ' ' + student.lastName}</td>
                  <td className="py-2 px-4">
                  <div className='flex justify-end'>
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                      onClick={() => handleViewDetails(student, "student")}
                    >
                      View Details
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
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        details={selectedDetails}
        type={selectedType}
      />
    </div>
  );
};

export default HomePage;
