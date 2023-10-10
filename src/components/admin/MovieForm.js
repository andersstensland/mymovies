import React from "react";

export const MovieForm = () => {
  return (
    <div className="bg-white flex flex-col w-fit rounded shadow p-4">
      <form onSubmit={""} className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-4">Add movie</h3>
        <label className="flex flex-col">
          Title:
          <input
            className="p-2 mb-2 border"
            type="text"
            name="title"
            value={""}
            onChange={""}
          />
        </label>
        <label className="flex flex-col">
          Director:
          <input
            className="p-2 mb-2 border"
            type="text"
            name="director"
            value={""}
            onChange={""}
          />
        </label>
        <label className="flex flex-col">
          Category:
          <select
            className="p-2 mb-2 border"
            name="category"
            value={"this.state.category"}
            onChange={""}
          >
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
          </select>
        </label>
        <label className="flex flex-col">
          Image:
          <input
            className="text-white rounded p-2 mb-2"
            type="file"
            accept="image/*"
            name="image"
            onChange={""}
          />
        </label>
        <input
          className="p-2 bg-blue-500 text-white rounded"
          type="submit"
          value="Add Movie"
        />
      </form>
    </div>
  );
};
