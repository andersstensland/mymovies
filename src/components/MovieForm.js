import React from "react";

export const MovieForm = () => {
  return (
    <div className="bg-gray-200 flex flex-col w-fit p-8">
      <form onSubmit={""} className="flex flex-col pt-4">
        <label className="flex flex-col">
          Title:
          <input
            className="p-2 mb-2"
            type="text"
            name="title"
            value={""}
            onChange={""}
          />
        </label>
        <label className="flex flex-col">
          Director:
          <input
            className="p-2 mb-2"
            type="text"
            name="director"
            value={""}
            onChange={"this.handleChange"}
          />
        </label>
        <label className="flex flex-col">
          Category:
          <select
            className="p-2 mb-2"
            name="category"
            value={"this.state.category"}
            onChange={"this.handleChange"}
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
          Stars:
          <div className="">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`fa-solid fa-star fa-2x "text-yellow-500"
                }`}
                onMouseOver={""} // Toggle rating on hover
                onClick={""} // Toggle rating on click
              ></i>
            ))}
          </div>
        </label>
        <label className="flex flex-col">
          Image:
          <input
            className="bg-gray-500 text-white rounded p-2 mb-2"
            type="file"
            accept="image/*"
            name="image"
            onChange={"handleImageChange"}
          />
        </label>
        <input
          className="p-2 bg-blue-500 text-white rounded"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
