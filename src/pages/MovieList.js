import React, { useState } from "react";
import { useFetchMovieData } from "../hooks/useFetchMovieData";
import { posters } from "../index";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const MovieList = () => {
  const { movies } = useFetchMovieData();
  const [genreFilter, setGenreFilter] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const genreMatch = genreFilter === "All" || movie.category === genreFilter;
    const titleMatch = movie.MovieName.toLowerCase().includes(
      searchText.toLowerCase()
    );

    return genreMatch && titleMatch;
  });

  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="bg-black">
      <Navbar />
      <div className="bg-gray-200 px-20 py-4">
        <h2 className="text-2xl font-semibold mb-4">Movie List</h2>
        <div className="flex mb-4">
          <div className="flex max-sm:flex-col max-md:flex-row gap-4">
            <select
              className="text-black max-sm:p-2"
              value={genreFilter}
              onChange={handleGenreChange}
            >
              <option value="All">All</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
            </select>

            <label className="flex flex-row justify-center align-center">
              <p className="p-2">Search:</p>

              <input
                className="border p-2 text-gray-700"
                type="text"
                label="Search"
                value={searchText}
                onChange={handleSearchChange}
              />
            </label>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setGenreFilter("All");
                setSearchText("");
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMovies.map((movie) => (
            <div key={movie.Id}>
              <div className="bg-white p-4 rounded-lg shadow-lg object-cover h-100 w-full">
                <Link to={`/movie/${movie.Id}`} key={movie.Id}>
                  <h3 className="text-md font-semibold mb-2">
                    {movie.MovieName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{movie.category}</p>
                  <p className="text-sm text-gray-600 mb-2">{movie.director}</p>
                  <img
                    className="object-cover h-[400px] w-full rounded"
                    src={posters[`${movie.image}`]}
                    alt={movie.MovieName}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
