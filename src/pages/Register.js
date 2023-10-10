// components/Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { Navbar } from "../components/navbar/Navbar";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || password !== confirmPassword) {
      alert("Missing required fields or passwords do not match");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    try {
      await registerUser(email, password);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="bg-black bg-opacity-25 font-sans text gray-700 min-h-screen">
        <div className="container mx-auto p-8 flex">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-white text-4xl text-center mb-12 font-bold">
              Register
            </h1>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="p-8">
                <form>
                  <div className="mb-5">
                    <label
                      htmlFor="email-address"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2  text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2  text-sm font-medium text-gray-600"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="confirm-password"
                      label="Confirm Create password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                  >
                    Register
                  </button>
                </form>
              </div>
              <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <Link to="/Login">
                  <button className="font-medium text-indigo-500">
                    Already have an account?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
