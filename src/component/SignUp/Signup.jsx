import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Profile");
  };
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col justify-center items-start ">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Create your PopX account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative mt-4">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-gray-800 border border-gray-300 rounded-md peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 transition-all 
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
    peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-sm 
    peer-focus:text-purple-500"
            >
              Full Name*
            </label>
          </div>
          <div className="relative mt-4">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-gray-800 border border-gray-300 rounded-md peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 transition-all 
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
    peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-sm 
    peer-focus:text-purple-500"
            >
              Phone number*
            </label>
          </div>

          <div className="relative mt-4">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-gray-800 border border-gray-300 rounded-md peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 transition-all 
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
    peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-sm 
    peer-focus:text-purple-500"
            >
              Phone number*
            </label>
          </div>

          <div className="relative mt-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 text-gray-800 border border-gray-300 rounded-md peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 transition-all 
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
    peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-sm 
    peer-focus:text-purple-500"
            >
              Email address*
            </label>
          </div>
          <div className="relative mt-4">
            <input
              className="w-full px-3 py-2.5 text-gray-800 border border-gray-300 rounded-md peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 transition-all 
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
    peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-sm 
    peer-focus:text-purple-500"
            >
              Password*
            </label>
          </div>
          <div className="relative mt-4">
            <input
              className="w-full px-3 py-2.5 text-gray-800 border border-gray-300 rounded-md peer placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-purple-500 transition-all 
    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
    peer-placeholder-shown:top-2.5 peer-focus:-top-2.5 peer-focus:text-sm 
    peer-focus:text-purple-500"
            >
              Company name
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Are you an Agency?*
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="true"
                  checked={formData.isAgency === true}
                  onChange={() => setFormData({ ...formData, isAgency: true })}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="false"
                  checked={formData.isAgency === false}
                  onChange={() => setFormData({ ...formData, isAgency: false })}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={handleNavigation}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
