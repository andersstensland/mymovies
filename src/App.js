import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AccountSettings } from "./components/account/AccountSettings";
import { MovieDetails } from "./components/movelist/MovieDetails"; // Corrected import paths
import { AdminDashboard } from "./pages/AdminDashboard";
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
      setUser(user); // Set the user in state when the authentication changes
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
        console.log(user);
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
        <Route path="/" element={<Home user={user} />} />
        <Route path="/MovieList" element={<MovieList user={user} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register user={user} />} />
        <Route path="/movie/:movieId" element={<MovieDetails user={user} />} />
        <Route
          path="/ForgotPassword"
          element={<ForgotPassword user={user} />}
        />
        <Route
          path="/AccountSettings"
          element={<AccountSettings user={user} />}
        />
        <Route path="/Test" element={<Test />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
