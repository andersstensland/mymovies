import React, { useEffect, useState } from "react";
import { fetchData } from "../../data/fetchData";

export const SearchComponent = () => {
  const [searchText, setSearchText] = React.useState("");
  const [movies, setMovies] = useState([]);

  // TODO: Add code to fetch movies
  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await fetchData();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);

    console.log(searchText);

    // TODO: Add code to filter movies by title
    const filteredMovies = movies.filter((movie) => {
      const titleMatch = movie.MovieName.toLowerCase().includes(
        searchText.toLowerCase()
      );

      return titleMatch;
    });
  };

  return (
    <div className="flex items-center">
      <div className="flex space-x-1">
        <input
          type="text"
          className="block w-full px-4 py-2 text-black bg-white border rounded-full focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          onInput={handleSearchChange}
        />
        <button className="px-4 text-white bg-grey-600 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
