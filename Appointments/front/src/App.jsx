import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./views/about/About";
import { Home } from "./views/home/Home";
import { Login } from "./views/login/Login";
import { MyAppointments } from "./views/myAppointments/MyAppointments";
import { Register } from "./views/register/Register";
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