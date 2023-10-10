import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { fetchMovieId } from "../../data/fetchMovieId";
import { posters } from "../../index";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const dataMovieId = await fetchMovieId(movieId);

        if (dataMovieId !== null) {
          setMovieDetails(dataMovieId); // Use the correct movie data
        } else {
          setError("Movie not found");
        }

        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, [movieId]);

  return (
    <div className="bg-black">
      <Navbar />
      <div className="px-14 py-4 bg-white">
        <div className="bg-white shadow-md p-4 rounded-md mb-4">
          <h2 className="text-2xl font-semibold mb-4">Movie Details</h2>

          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            movieDetails && (
              <div className="flex">
                <div className="w-1/4">
                  <img
                    src={posters[`${movieDetails.image}`]} // Use the actual movie details
                    alt={movieDetails.MovieName} // Use the actual movie details
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <div className="w-3/4 ml-4">
                  <h2 className="text-xl font-semibold">
                    {movieDetails.MovieName}
                  </h2>
                  <p className="text-gray-600">MovieId: {movieId}</p>
                  <p className="text-gray-600">
                    Director: {movieDetails.director}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
