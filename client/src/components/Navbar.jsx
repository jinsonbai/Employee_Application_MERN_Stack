// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { logout, getToken } from '../authService';

const Navbar = () => {
  const handleLogout = () => {
    logout();
    window.location.href = '/login'; // Redirect to login page after logout
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {getToken() ? (
          <>
            <li><Link to="/employees">Employees</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
