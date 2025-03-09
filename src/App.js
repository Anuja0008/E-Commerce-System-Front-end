import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Login from '../src/Components/Authentication/Login';
import Register from '../src/Components/Authentication/Register';
import ForgotPassword from '../src/Components/Authentication/ForgotPassword';

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
