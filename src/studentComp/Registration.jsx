import React from 'react';
import CourseSchedule from './CourseTable'; 
import CourseRegistration from './CourseRegistration';
import '../styles/styles.css';

const Registration = () => {
  return (
    <div>
      <h2>Registration</h2>
      <CourseRegistration/>
    </div>
  );
};

export default Registration;
