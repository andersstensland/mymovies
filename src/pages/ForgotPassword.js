import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { useState } from "react";
import { Footer } from "../components/footer/Footer";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-black">
      <Navbar />
      <div className="bg-black bg-opacity-25 font-sans text gray-700 min-h-screen">
        <div className="container mx-auto p-8 flex">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-white text-4xl text-center mb-12 font-bold">
              Forgot Password
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

                  <button
                    type="submit"
                    onClick={""}
                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                  >
                    Send Email
                  </button>
                </form>
              </div>
              <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <Link to="/Login">
                  <button className="font-medium text-indigo-500">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
