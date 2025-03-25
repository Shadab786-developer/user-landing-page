import React from "react";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Login");
  };
  const handleSignNavigation = () => {
    navigate("/SignUp");
  };
  return (
    <div className="bg-gray-100 w-full p-8 rounded-lg shadow-md h-screen flex flex-col justify-end items-center ">
      <h1 className="sm:text-3xl text-[12px] font-semibold text-center text-gray-800 mb-4">
        Welcome to PopX
      </h1>
      <p className="text-center text-gray-500 mb-6 sm:text-2xl text-[12px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="space-y-4">
        <button
          className="font-bold w-full bg-indigo-600 text-white py-2 rounded-sm hover:bg-purple-700 transition duration-200 sm:text-[20px] text-[12px] cursor-pointer"
          onClick={handleSignNavigation}
        >
          Create Account
        </button>
        <button
          className="w-full text-black font-bold bg-gray-300 py-2 rounded-sm hover:bg-purple-600 hover:text-white transition duration-200 cursor-pointer sm:text-[20px] text-[12px]"
          onClick={handleNavigation}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;
