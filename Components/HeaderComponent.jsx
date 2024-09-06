import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HeaderComponents.css';

const HeaderComponent = () => {
  return (
    <div>
      <header style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 0'
      }}>
        <nav className='navbar navbar-dark bg-dark'>
          <Link to="/" className="navbar-brand">Com-Reparo</Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">repair Details</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent;
