import React from "react";

export const MovieDelete = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Delete Movie</h1>
      <div className="mb-4">
        <label className="block">
          Enter Movie ID:
          <input
            className="border p-2 w-full"
            type="text"
            value={""}
            onChange={"this.handleChange"}
          />
        </label>
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={"handleGetMovie"}
        >
          Get Movie
        </button>
      </div>
    </div>
  );
};
