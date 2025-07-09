import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="aside">
          <div className="buttons">
             <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            
            <Link to="/login">
              <button>Login</button>
            </Link>
           
          </div>
        </div>

        <div className="right">
          
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
