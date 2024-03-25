import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading,setloading]=useState(false);
  const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setloading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log('REgiseter successful');
        alert('registration sucessfull login to continue')
        navigate('/')  
        
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
      setError('Error occurred while logging in');
    } finally {
        setloading(false);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        {loading ? 'Register in...' : ''}
      </form>
    </div>
  );
}

export default RegisterForm;
