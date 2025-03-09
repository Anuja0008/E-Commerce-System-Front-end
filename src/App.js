import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Login from './Components/Login';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <Router>
      <div>
        <Routes>  {/* Replace Switch with Routes */}
           <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />}/> 
           <Route path="/forgotpassword" element={<ForgotPassword />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
