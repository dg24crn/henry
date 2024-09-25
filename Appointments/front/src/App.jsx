import "./App.css";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { About } from "./views/about/About.jsx";
import { Home } from "./views/home/home.jsx";
import { Login } from "./views/login/Login.jsx";
import { MyAppointments } from "./views/myAppointments/MyAppointments.jsx";
import { Register } from "./views/register/Register.jsx";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/appointments" element={<MyAppointments/>}/>
      </Routes>
    </div>
  );
}

export default App;