import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Profile");
  };
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      console.log(value)
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-md ">
        <h1 className="sm:text-3xl text-2xl font-semibold text-gray-800 mb-4 text-start">
          Signin to your PopX account
        </h1>
        <p className="text-start text-gray-500 mb-6 sm:text-lg text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative mt-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            type="submit"
            className="w-full bg-gray-200 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200"
            onClick={() => {
              signUpUser();
              handleNavigation();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
