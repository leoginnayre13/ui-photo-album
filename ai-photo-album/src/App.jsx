import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword";
import Register from "./components/Register";
import Dashboard from "./components/pages/Dashboard";
import FaceId from "./components/pages/FaceId";
import Profile from "./components/pages/Profile";
import Albums from "./components/pages/Albums";
import TestPage from "./components/pages/TestPage";
import Tags from "./components/pages/Tags";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faces" element={<FaceId />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </Router>
  );
}

export default App;
