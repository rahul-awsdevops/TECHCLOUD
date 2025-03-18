import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Me</Link>
      <Link to="/courses" className="nav-link">Courses</Link>
    </nav>
  );
};

export default Navbar;