import React, { Component } from "react";
import { MovieForm } from "../components/admin/MovieForm";
import { MovieDelete } from "../components/admin/MovieDelete";

export const AdminDashboard = () => {
  return (
    <>
      <div className="bg-gray-200 p-4 min-h-screen">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div className="flex flex-row pt-4 gap-4">
          <MovieForm />
          <MovieDelete />
        </div>
      </div>
    </>
  );
};
