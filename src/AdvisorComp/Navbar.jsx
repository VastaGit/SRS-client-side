import React from 'react';
import { Link } from 'react-router-dom';
import '../AdminComp/MySpecificComponent.module.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <button onClick={() => alert('Logout')} className="btn btn-light">Logout</button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="/courseschedule" className="nav-item nav-link">Course Schedule</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
