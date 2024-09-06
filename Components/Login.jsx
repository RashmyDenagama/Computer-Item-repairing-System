import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import logindata from '../Services/Admin'; // Import your login data

function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const user = logindata.find(
      (u) => u.email === username && u.password === password
    );

    if (user) {
      if (user.admin === 0) {
        navigate('/'); // Redirect to home if not admin
      } else if (user.admin === 1) {
        navigate('/Home'); // Redirect to admin page if admin
      }
    } else {
      setErrorMessage('Invalid credentials'); // Display error message if credentials are invalid
    }
  };

  return (
    <div className='body-login'>
      <div className="container">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Login" />
          <div className="error-message" id="errorMessage">
            {errorMessage}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
