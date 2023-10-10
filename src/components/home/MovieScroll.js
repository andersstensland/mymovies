import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "../../data/fetchData"; // Replace with the correct path to fetchData
import { posters } from "../../index"; // Replace with the correct path to posters
import { Movie } from "./Movie";

export const MovieScroll = () => {
  const containerRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const data = await fetchData();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovieData();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        width: "100%",
        overflowX: "scroll",
        cursor: isDragging ? "grabbing" : "grab", // Change cursor style when dragging
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="flex space-x-4">
        {movies.map((movie) => (
          <Movie
            key={movie._id}
            title={movie.MovieName}
            posterUrl={posters[`${movie.image}`]} // Use the imported image dynamically
          />
        ))}
      </div>
    </div>
  );
};
