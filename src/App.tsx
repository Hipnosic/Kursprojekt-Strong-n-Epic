import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/logIn/LoginPage";
import SignupPage from "./pages/signUp/SignupPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
