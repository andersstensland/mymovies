import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
        {error && (
          <alert variant="danger" className="mb-4">
            {error}
          </alert>
        )}
        <div className="mb-4">
          <strong>Email:</strong> {currentUser.email}
        </div>
        <Link
          to="/update-profile"
          className="bg-blue-500 text-white px-4 py-2 rounded-md block w-full text-center"
        >
          Update Profile
        </Link>
      </div>
      <div className="mt-4 text-center">
        <button variant="link" onClick={handleLogout} className="text-blue-500">
          Log Out
        </button>
      </div>
    </div>
  );
}
