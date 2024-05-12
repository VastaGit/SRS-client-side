import React from 'react';
import { Link } from 'react-router-dom';
import './MySpecificComponent.module.css';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark $red-600">
        <button onClick={() => alert('Logout')} className="btn btn-light ">Logout</button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="/courseschedule" className="nav-item nav-link">Courses</Link>
          <Link to="/academicrecord" className="nav-item nav-link">Add User</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
