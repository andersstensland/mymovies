import { useState, useEffect } from "react";
import { fetchData } from "../data/fetchData"; // Import the fetchData function from your data fetching module

export const useFetchMovieData = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await fetchData();
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }

    fetchMovieData();
  }, []);

  return { movies, isLoading, error };
};
