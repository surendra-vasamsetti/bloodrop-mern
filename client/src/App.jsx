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
import DashBanks from "./components/goccomponents/DashBanks";
import DashMain from "./components/goccomponents/DashMain";
import GovBloodBankTable from "./components/goccomponents/GovBankTable";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bbregister" element={<BloodBankRegister />} />
        <Route path="/bblogin" element={<BloodBankLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashmain" element={<DashMain />} />
        <Route path="/banks" element={<DashBanks />} />
        <Route
          path="/bloodbank-table/:category"
          element={<GovBloodBankTable />}
        />
      </Routes>
    </BrowserRouter>
  );
}
