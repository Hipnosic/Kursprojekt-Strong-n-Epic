import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/logIn/LoginPage';
import SignupPage from './pages/signUp/SignupPage';
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
          <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
