import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    contactPersonEmail: "",
    password: "",
    contactNo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/bloodbank/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      alert("Login successful!");
      navigate("/profile");
    } catch (error) {
      alert(error.message);
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg p-3 mx-auto flex flex-col justify-center text-center">
      <h1 className="text-center text-3xl font-semibold">BLOOD-BANK SIGN IN</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="Enter your contact person email"
          id="contactPersonEmail"
          value={formData.contactPersonEmail}
          onChange={handleChange}
          className="bg-gray-200 rounded-lg p-3 mt-7"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="bg-gray-200 rounded-lg p-3 mt-5"
          required
        />
        <input
          type="text"
          placeholder="Enter your contact number"
          id="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          className="bg-gray-200 rounded-lg p-3 mt-5"
          required
        />
        <button className="bg-red-500 p-3 rounded-lg text-white" type="submit">
          SIGN IN
        </button>
      </form>
      <div className="flex gap-5 mt-2">
        <p>Don't have an account?</p>
        <Link to="/bbregister">
          <span className="text-red-500 font-semibold">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
