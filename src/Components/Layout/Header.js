import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
    background: '#62484e',
    color: '#eddee1',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
  color: '#eddee1',
  textDecoration: 'none'
}

export default Header;