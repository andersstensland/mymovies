import React, { Component } from "react";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const Test = () => {
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
    <div>
      <h1>HELLO WORLD</h1>
      <button className="p-4 bg-green-400" onClick={handleLogout}>
        Logout test
      </button>
    </div>
  );
};
