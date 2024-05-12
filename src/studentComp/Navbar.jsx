import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  return (
    <nav>
    <button onClick={() => alert('Logout')} className="logout-btn">Logout</button>
    <div className='nav-items'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/courseschedule" className="nav-link">Course Schedule</Link>
      <Link to="/academicrecord" className="nav-link">Academic Record</Link>
      <Link to="/registration" className="nav-link">Registration</Link>
      </div>
    </nav>
  );
};

export default Navbar;
