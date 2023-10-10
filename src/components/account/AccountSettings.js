import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";

export const AccountSettings = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-black">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col gap-2 max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
          <div className="mb-4">
            <strong>Email:</strong>{" "}
            <span>{user ? user.email : "loading..."}</span>
          </div>

          <h2 className="text-2xl font-bold text-center mb-4">
            Update Profile
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Display Name
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Leave blank to keep the same"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password-confirm"
                className="block text-sm font-medium text-gray-600"
              >
                Password Confirmation
              </label>
              <input
                type="password"
                id="password-confirm"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Leave blank to keep the same"
              />
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
              type="submit"
            >
              Update
            </button>
          </form>

          <div
            className="px-4 py-2 text-center bg-red-500 rounded-lg"
            onClick={handleLogout}
          >
            <button className="text-black">Log Out</button>
          </div>
          <div className="mt-4 text-center">
            <Link to="/" className="text-blue-500">
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
