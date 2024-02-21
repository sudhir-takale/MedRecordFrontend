// src/components/Header.js

import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Your Project Name</h1>
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#4285f4', // You can change this color to match your project's theme
  padding: '20px',
  textAlign: 'center',
};

const h1Style = {
  margin: '0',
  color: 'white',
};

export default Header;
