import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { MovieGuide } from "../components/home/MovieGuide";
import { MovieScroll } from "../components/home/MovieScroll";
import { Navbar } from "../components/navbar/Navbar";
import { logout, subscribeToAuthChanges } from "../services/authService";
import { styles } from "../styles/styles.css";

export const Home = () => {
  const overlayStyles = {
    pointerEvents: "none",
    userSelect: "none",
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="relative bg-custom min-h-screen">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
          style={overlayStyles}
        ></div>

        <Navbar />

        <div className="flex flex-col md:flex-row justify-center px-14 py-4">
          {/* Left Section (Upper Left) */}
          <div className="flex flex-col flex-1 text-white justify-between">
            <h1 className="text-4xl md:text-5xl py-4 font-bold">
              Hundreds of <span className="underline">Movies,</span>
            </h1>
            <h3 className="text-4xl md:text-4xl font-bold">
              Thousands of <span className="underline">Reviews</span>...
            </h3>
            <h5 className="mt-3 text-lg md:text-2xl w-2/3 py-8">
              You can now save your favorite movies and write reviews about
              them.
            </h5>
            <Link to="/Movies">
              <button className="bg-transparent text-white px-4 py-2 rounded outline sm:w-1/3 md:w-2/4">
                All Movies
              </button>
            </Link>
          </div>

          {/* Right Section (Upper Right) */}
          <div className="flex-1 px-4 md:p-8 text-center text-white">
            {/* Content for the right section */}
          </div>
        </div>
        {/* Lower Section (Full Width) */}
        <div className="pl-14 py-4 text-white">
          {/* Content for the lower section */}
          <h1 className="font-bold text-white text-lg">Most popular movies</h1>
          <div className="flex flex-row py-8">
            <MovieScroll />
          </div>
        </div>
      </div>

      {/* How it works section */}
      <MovieGuide />

      {/* Footer */}
      <Footer />
    </div>
  );
};
