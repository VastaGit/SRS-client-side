import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/componentStyles/navbar.css';



const Navbar = () => {
  return (
    <nav>
      <button onClick={() => alert('Logout')} className="logout-btn">Logout</button>
      <div className='nav-items'>
        <NavLink to="/home" className="nav-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/courseschedule" className="nav-link" activeClassName="active-link">Course Schedule</NavLink>
        <NavLink to="/academicrecord" className="nav-link" activeClassName="active-link">Academic Record</NavLink>
        <NavLink to="/registration" className="nav-link" activeClassName="active-link">Registration</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
