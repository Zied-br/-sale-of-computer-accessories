import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import AllPost from "./pages/AllPost.js/AllPost.js";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Intro from "./pages/introduction/Intro";
import Mouse from "./pages/Mouse";
import USBHub from "./pages/USBHub";
import ExternalDrive from "./pages/ExternalDrive";
import Keyboard from "./pages/Keyboard";
import Headphones from "./pages/Headphones";
import Laptop from "./pages/Laptop";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AllPost" element={<AllPost />} />
        <Route path="/introduction" element={<Intro />} />
        <Route path="/posts">
          <Route path="mouse" element={<Mouse />} />
          <Route path="usb-hub" element={<USBHub />} />
          <Route path="external-drive" element={<ExternalDrive />} />
          <Route path="keyboard" element={<Keyboard />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="laptop-stand" element={<Laptop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
