import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/home.jsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
 
export default App;