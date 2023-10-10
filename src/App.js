import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetails } from "./components/movelist/MovieDetails"; // Corrected import paths
import { ForgotPassword } from "./pages/ForgotPassword"; // Corrected import paths
import { Home } from "./pages/Home"; // Corrected import paths
import { Login } from "./pages/Login"; // Corrected import paths
import { MovieList } from "./pages/MovieList"; // Corrected import paths
import { Register } from "./pages/Register"; // Corrected import paths
import { Test } from "./pages/Test"; // Corrected import paths
import { subscribeToAuthChanges } from "./services/authService";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });

    return () => {
      // Cleanup the subscription when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<MovieList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
