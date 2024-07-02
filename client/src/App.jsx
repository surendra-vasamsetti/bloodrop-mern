import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import BloodBankRegister from "./pages/BloodBankRegister";
import BloodBankLogin from "./pages/BloodBankLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/bbregister" element={<BloodBankRegister />}></Route>
        <Route path="/bblogin" element={<BloodBankLogin />}></Route>
        <Route path="/adminregister" element={<AdminRegister />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
