import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home.jsx";
import SignIn from './components/pages/signin.jsx';
import Dashboard from './components/pages/dashboard.jsx';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}
 
export default App;