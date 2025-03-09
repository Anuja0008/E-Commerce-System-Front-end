import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the external CSS file

const Register = () => {
  const navigate = useNavigate();
  const [fullname, setfullName] = useState("");
  const [username, setUsername] = useState("");  
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      return setError('All fields are required.');
    }

    if (password !== confirmPassword) {
      return setError("Passwords don't match.");
    }

    try {
      console.log('Registering with:', { email, password });

      // Simulate success and navigate to login
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/Vedios/background.mp4" type="video/mp4" />
      </video>

      <div className="register-box">
        <h2>Register</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
        <input
            type="fullname"
            placeholder="fullname"
            value={fullname}
            onChange={(e) => setfullName(e.target.value)}
          />
           <input
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <input
            type="phonenumber"
            placeholder="phonenumber"
            value={phonenumber}
            onChange={(e) =>  setPhonenumber(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  required
  style={{
    appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: 'white', fontSize: '16px',cursor: 'pointer',boxSizing: 'border-box',
  }}
>
  <option value="">Select Role</option>
  <option value="seller">Seller</option>
  <option value="customer">Customer</option>
</select>


          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
