import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../data/fetchData";

export const SearchComponent = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  const [movies, setMovies] = useState([]);

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

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      setActiveSearch([]);
      return;
    }

    const matchingMovies = movies.filter((movie) =>
      movie.MovieName.toLowerCase().includes(searchTerm)
    );

    setActiveSearch(matchingMovies.slice(0, 1));
  };

  return (
    <form className="w-full relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full p-4 rounded-full bg-slate-800"
          onChange={(e) => handleSearch(e)}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full">
          <i className="fas fa-search"></i>
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((m) => (
            <Link to={`/movie/${m.Id}`} key={m.Id}>
              <span key={m.MovieName}>{m.MovieName}</span>
            </Link>
          ))}
        </div>
      )}
    </form>
  );
};
