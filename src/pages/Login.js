import React, { useState } from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { loginUser } from "../services/authService";

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="bg-black bg-opacity-25 font-sans text-gray-700 min-h-screen">
        <div className="container mx-auto p-8 flex">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-white text-4xl text-center mb-12 font-bold">
              Login
            </h1>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="p-8">
                <form
                  method="POST"
                  className=""
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      name="email"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      onChange={(e) => {
                        const value = e.target.value.toString();
                        setEmail(value);
                      }}
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      onChange={(e) => {
                        const value = e.target.value.toString();
                        setPassword(value);
                      }}
                    />
                  </div>

                  <button
                    className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </form>
              </div>

              <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <Link to="/Register">
                  <button href="#" className="font-medium text-indigo-500">
                    Create account
                  </button>
                </Link>
                <Link to="/ForgotPassword">
                  <a href="#" className="text-gray-600">
                    Forgot password?
                  </a>
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
