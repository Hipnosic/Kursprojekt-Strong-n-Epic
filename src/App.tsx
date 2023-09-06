import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/landing/LandingPage';
import { UserInfo } from './types/UserTypes';

const defaultUser: UserInfo = {
  username: "",
  password: "",
  role: "USER",
}



function App() {
  const [currentUser, setCurrentUser] = useState(defaultUser) 

  
  return (
    <>
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<LandingPage setCurrentUser={setCurrentUser}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
