import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [data, setData] = useState({ advisors: [], students: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/studentInfo.json');
        const jsonData = await response.json();
        setData({ advisors: jsonData.advisors, students: jsonData.studentDetails });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <div className="lists-container">
          <div className="advisors-list w-1/2 mr-2">
            <h2 className="text-2xl font-bold mb-4">Advisors</h2>
            <div className="overflow-y-auto max-h-48">
              <ul className="divide-y divide-gray-300">
                {data.advisors.map((advisor, index) => (
                  <li key={index} className="py-2">{advisor.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="students-list w-1/2 ml-2">
            <h2 className="text-2xl font-bold mb-4">Students</h2>
            <div className="overflow-y-auto max-h-48">
              <ul className="divide-y divide-gray-300">
                {data.students.map((student, index) => (
                  <li key={index} className="py-2">{student.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
