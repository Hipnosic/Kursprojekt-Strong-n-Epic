import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/logIn/LoginPage';
import SignupPage from './pages/signUp/SignupPage';
import { UserInfo } from './types/UserTypes';
import { Session } from './types/Session'
import HomePage from './pages/home/HomePage';
import AdminPage from './pages/admin/AdminPage';

const defaultUser: UserInfo = {
  id: 0,
  username: "",
  password: "",
  email: "",
  role: "USER",
  sessions: [],
}

const defaultSession: Session = {
  id: 0,
  title: "",
  trainer: "",
  start: "",
  end: "",
  date: "",
  spots: 0,
  registered: [],
}

function App() {
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [currentSession, setCurrentSession] = useState(defaultSession)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage setCurrentUser={setCurrentUser}/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/homePage" element={<HomePage setCurrentSession={setCurrentSession}/>} />
          <Route path="/admin" element={<AdminPage setCurrentSession={setCurrentSession}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
