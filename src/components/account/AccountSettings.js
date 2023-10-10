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
      <Navbar user={user} />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
            <div className="mb-4">
              <strong>Email:</strong>{" "}
              <span>{user ? user.email : "loading..."}</span>
            </div>
            <div className="mb-4">
              <strong>Display Name:</strong>{" "}
              <span>{user ? user.displayName : "loading..."}</span>
            </div>

            <button
              className="px-4 py-2 text-center bg-red-500 rounded-lg cursor-pointer"
              onClick={handleLogout}
            >
              <span className="text-black">Log Out</span>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center mb-4">
              Update Profile
            </h2>

            {/* Update Profile Form */}
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Column */}
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Display Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Leave blank to keep the same"
                  />
                </div>
              </div>

              {/* Second Column */}
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Change Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Confirm Change Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Location
                  </label>
                  <input
                    type=""
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Password Confirmation
                  </label>
                  <input
                    type="password"
                    className="mt-1 p-2 w-full border rounded-md"
                    placeholder="Leave blank to keep the same"
                  />
                </div>
              </div>
            </form>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
              type="submit"
            >
              Update
            </button>

            <div className="mt-4 text-center">
              <Link to="/" className="text-blue-500">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
