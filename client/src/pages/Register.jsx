

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    fathername: "",
    mothername: "",
    mobileNo: "",
    state: "",
    district: "",
    city: "",
    address: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateMobileNumber = (number) => {
    return number.length === 10 && /^[0-9]+$/.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateMobileNumber(formData.mobileNo)) {
      setErrors({ mobileNo: "Please enter a valid 10-digit mobile number" });
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || errors)
      }

      console.log(data);

      // Clear the form fields after successful submission
      setFormData({
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        fathername: "",
        mothername: "",
        mobileNo: "",
        state: "",
        district: "",
        city: "",
        address: "",
        pincode: "",
      });

      alert("User registered successfully!");
      navigate("/login");
    } catch (error) {
      if (error.message.includes("Mobile number already exists")) {
        setErrors({
          mobileNo: "Mobile number already exists, please use another number",
        });
      } else {
        alert(error.message);
      }
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-4xl p-3 mx-auto flex flex-col justify-center text-center">
      <h1 className="text-center text-3xl font-semibold">SIGN UP</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 max-w-4xl p-5 mx-auto"
      >
        <div>
          <label htmlFor="username" className="block text-left mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-left mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="mobileNo" className="block text-left mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            id="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
          {errors.mobileNo && (
            <p className="text-red-500 text-left">{errors.mobileNo}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-left mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-left mb-1">
            Age
          </label>
          <input
            type="number"
            placeholder="Enter your age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-left mb-1">
            Gender
          </label>
          <input
            type="text"
            placeholder="Enter your gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="fathername" className="block text-left mb-1">
            Father's Name
          </label>
          <input
            type="text"
            placeholder="Enter your father's name"
            id="fathername"
            value={formData.fathername}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="mothername" className="block text-left mb-1">
            Mother's Name
          </label>
          <input
            type="text"
            placeholder="Enter your mother's name"
            id="mothername"
            value={formData.mothername}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-left mb-1">
            State
          </label>
          <input
            type="text"
            placeholder="Enter your state"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="district" className="block text-left mb-1">
            District
          </label>
          <input
            type="text"
            placeholder="Enter your district"
            id="district"
            value={formData.district}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-left mb-1">
            City
          </label>
          <input
            type="text"
            placeholder="Enter your city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-left mb-1">
            Address
          </label>
          <input
            type="text"
            placeholder="Enter your address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="pincode" className="block text-left mb-1">
            Pincode
          </label>
          <input
            type="number"
            placeholder="Enter your pincode"
            id="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <button
          type="submit"
          className="col-span-1 md:col-span-2 lg:col-span-3 bg-red-500 p-3 rounded-lg text-white mt-5"
        >
          SIGN UP
        </button>
      </form>
      <div className="flex gap-5 mt-2">
        <p>Already have an account?</p>
        <Link to="/login">
          <span className="text-red-500 font-semibold">Sign In</span>
        </Link>
      </div>
    </div>
  );

};

export default Register;
