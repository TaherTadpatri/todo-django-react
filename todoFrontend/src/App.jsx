import React, { useState } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm'; 
import RegisterForm from './Components/RegisterForm';

function App() {
  const [login, setLogin] = useState(true);

  const handleLoginClick = () => {
    setLogin(true);
  };

  const handleRegisterClick = () => {
    setLogin(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
        <button className="btn btn-primary" style ={{marginRight : '10px'}}onClick={handleLoginClick}>Login</button>
          <button className="btn btn-primary" onClick={handleRegisterClick}>Register</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
         
        {login ? <LoginForm /> : <RegisterForm />} 
        </div>
      </div>
    </div>
  );
}

export default App;
