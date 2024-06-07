import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 The ToDoList App. All rights reserved.</p>
      <div className="social-icons">
        <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
        <a href="#"><img src="/twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="/instagram.svg" alt="Instagram" /></a>
      </div>
    </footer>
  );
};

export default Footer;

