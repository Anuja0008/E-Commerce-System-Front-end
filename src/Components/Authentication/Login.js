import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //oyata validation kargggana ona
    if (!email || !password) {
      return setError('Both email and password are required.');
    }

    try {
      // Simulate login request (replace with actual API call)
      console.log('Logging in with:', { email, password });
      
      // For now, just simulate success
      localStorage.setItem('token', 'fake-jwt-token');
      navigate('/');  // Navigate after successful login
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      {/* Video reference from public folder */}
      <video className="background-video1" autoPlay loop muted>
        <source src="/Vedios/login.mp4" type="video/mp4" />
      </video>

      <div className="login-box">
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
       
        
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        
          <a href="forgotpassword">Forgot Password?</a><br></br>
        
        
          <a href="Register">Signup?</a>
       
      </div>
    </div>
  );
};

export default Login;
