import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="lists-container">
        <div className="advisors-list">
          <h2>Advisors</h2>
          <ul>
            <li>Advisor 1</li>
            <li>Advisor 2</li>
            <li>Advisor 3</li>
            {/* Add more advisors as needed */}
          </ul>
        </div>
        <div className="students-list">
          <h2>Students</h2>
          <ul>
            <li>Student 1</li>
            <li>Student 2</li>
            <li>Student 3</li>
            {/* Add more students as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
