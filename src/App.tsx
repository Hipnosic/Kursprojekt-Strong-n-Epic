import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/logIn/LoginPage';
import { UserInfo } from './types/UserTypes';

const defaultUser: UserInfo = {
  id: 0,
  username: "",
  password: "",
  role: "USER",
  sessions: [],
}

function App() {
  const [currentUser, setCurrentUser] = useState(defaultUser);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage setCurrentUser={setCurrentUser}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
