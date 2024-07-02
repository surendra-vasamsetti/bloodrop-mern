import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    BloodBankName: "",
    ParentHospitalName: "",
    password: "",
    category: "",
    firstRegistrationDate: "",
    LicenseNo: "",
    fromDate: "",
    ToDate: "",
    contactPerson: "",
    contactPersonEmail: "",
    contactNo: "",
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
    if (!validateMobileNumber(formData.contactNo)) {
      setErrors({ contactNo: "Please enter a valid 10-digit contact number" });
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/bloodbank/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || errors);
      }

      console.log(data);

      // Clear the form fields after successful submission
      setFormData({
        BloodBankName: "",
        ParentHospitalName: "",
        password: "",
        category: "",
        firstRegistrationDate: "",
        LicenseNo: "",
        fromDate: "",
        ToDate: "",
        contactPerson: "",
        contactPersonEmail: "",
        contactNo: "",
        state: "",
        district: "",
        city: "",
        address: "",
        pincode: "",
      });

      alert("Blood bank registered successfully!");
      navigate("/login");
    } catch (error) {
      if (error.message.includes("Mobile number already exists")) {
        setErrors({
          contactNo: "Contact number already exists, please use another number",
        });
      } else {
        alert(error.message);
      }
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-4xl p-3 mx-auto flex flex-col justify-center text-center">
      <h1 className="text-center text-3xl font-semibold">Blood Bank Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 max-w-4xl p-5 mx-auto"
      >
        <div>
          <label htmlFor="BloodBankName" className="block text-left mb-1">
            Blood Bank Name
          </label>
          <input
            type="text"
            placeholder="Enter blood bank name"
            id="BloodBankName"
            value={formData.BloodBankName}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="ParentHospitalName" className="block text-left mb-1">
            Parent Hospital Name
          </label>
          <input
            type="text"
            placeholder="Enter parent hospital name"
            id="ParentHospitalName"
            value={formData.ParentHospitalName}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-left mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-left mb-1">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="firstRegistrationDate"
            className="block text-left mb-1"
          >
            First Registration Date
          </label>
          <input
            type="text"
            placeholder="Enter first registration date"
            id="firstRegistrationDate"
            value={formData.firstRegistrationDate}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="LicenseNo" className="block text-left mb-1">
            License No
          </label>
          <input
            type="text"
            placeholder="Enter license number"
            id="LicenseNo"
            value={formData.LicenseNo}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="fromDate" className="block text-left mb-1">
            From Date
          </label>
          <input
            type="text"
            placeholder="Enter from date"
            id="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="ToDate" className="block text-left mb-1">
            To Date
          </label>
          <input
            type="text"
            placeholder="Enter to date"
            id="ToDate"
            value={formData.ToDate}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="contactPerson" className="block text-left mb-1">
            Contact Person
          </label>
          <input
            type="text"
            placeholder="Enter contact person"
            id="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="contactPersonEmail" className="block text-left mb-1">
            Contact Person Email
          </label>
          <input
            type="email"
            placeholder="Enter contact person email"
            id="contactPersonEmail"
            value={formData.contactPersonEmail}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="contactNo" className="block text-left mb-1">
            Contact No
          </label>
          <input
            type="text"
            placeholder="Enter contact number"
            id="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            className="bg-gray-200 rounded-lg p-3 w-full"
          />
          {errors.contactNo && (
            <p className="text-red-500 text-left">{errors.contactNo}</p>
          )}
        </div>
        <div>
          <label htmlFor="state" className="block text-left mb-1">
            State
          </label>
          <input
            type="text"
            placeholder="Enter state"
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
            placeholder="Enter district"
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
            placeholder="Enter city"
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
            placeholder="Enter address"
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
            type="text"
            placeholder="Enter pincode"
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
        <Link to="/bblogin">
          <span className="text-red-500 font-semibold">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
