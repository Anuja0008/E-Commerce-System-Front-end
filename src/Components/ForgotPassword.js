import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // to show loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous messages or errors
    setError('');
    setMessage('');

    // Basic validation
    if (!email) {
      return setError('Email is required.');
    }

    setIsLoading(true);

    try {
      // Simulate forgot password request (replace with actual API call)
      console.log('Sending password reset link to:', email);

      // For now, just simulate success
      setTimeout(() => {
        setIsLoading(false); // stop loading
        setMessage('Password reset link sent to your email.');
        
        // Navigate to the login page after success
        navigate('/login');
      }, 2000); // Simulate delay
    } catch (err) {
      setIsLoading(false);
      setError('Failed to send password reset link. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Forgot Password</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', marginBottom: '10px' }}
        />
        <button 
          type="submit" 
          disabled={isLoading} 
          style={{
            padding: '10px', 
            backgroundColor: '#FFAC1C', 
            border: 'none', 
            color: 'white', 
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Sending...' : 'Submit'}
        </button>
      </form>

      <p style={{ marginTop: '10px' }}>
        <a href="/" style={{ color: '#FFAC1C' }}>Back to Login</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
