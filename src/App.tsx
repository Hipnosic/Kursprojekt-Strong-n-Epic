import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/landing/LandingPage';




function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
