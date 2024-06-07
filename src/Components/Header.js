import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">
          <img src="/logo.svg" alt="Logo" />
          
        </a> 
        <h2 className="title">The ToDoList App</h2>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

