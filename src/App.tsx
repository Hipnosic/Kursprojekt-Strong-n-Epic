import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/logIn/LoginPage';
import { UserInfo } from './types/UserTypes';

const defaultUser: UserInfo = {
  username: "",
  password: "",
  role: "USER",
}

function App() {
  const [currentUser, setCurrentUser] = useState(defaultUser);

  useEffect(() => {
    fetch('/users')
      .then((response) => {
        return response.json
      })
  })

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
