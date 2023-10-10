import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Import all image files in the folder
import avatarImage from "../src/assets/images/posters/avatar.jpg";
import avengersImage from "../src/assets/images/posters/avengers.jpg";
import blackSwanImage from "../src/assets/images/posters/black_swan.jpg";
import darkKnightImage from "../src/assets/images/posters/dark_knight.jpeg";
import eternalSunshineImage from "../src/assets/images/posters/eternal_sunshine.jpg";
import fightclubImage from "../src/assets/images/posters/fightclub.jpg";
import forrestGumpImage from "../src/assets/images/posters/forrest_gump.jpg";
import gladiatorImage from "../src/assets/images/posters/gladiator.jpg";
import godFatherImage from "../src/assets/images/posters/godfather.jpg";
import grandBudapestHotelImage from "../src/assets/images/posters/grand_budapest_hotel.jpg";
import inceptionImage from "../src/assets/images/posters/inception.jpg";
import ingloriousBasterdsImage from "../src/assets/images/posters/inglorious_basterds.jpg";
import interstellarImage from "../src/assets/images/posters/interstellar.jpg";
import jurrasicParkImage from "../src/assets/images/posters/jurrasic_park.jpg";
import lotrFellowshipImage from "../src/assets/images/posters/lotr_fellowship.jpg";
import madMaxFuryRoadImage from "../src/assets/images/posters/mad_max_fury_road.jpg";
import pulpFictionImage from "../src/assets/images/posters/pulp_fiction.jpg";
import revenantImage from "../src/assets/images/posters/revenant.jpg";
import shawshankRedemptionImage from "../src/assets/images/posters/shawshank_redemption.jpg";
import silenceOfTheLambsImage from "../src/assets/images/posters/silence_of_the_lambs.jpg";
import socialNetworkImage from "../src/assets/images/posters/social_network.jpg";
import theDarkKnightRisesImage from "../src/assets/images/posters/the_dark_knight_rises.jpg";
import theMatrixImage from "../src/assets/images/posters/the_matrix.jpg";
import titanicImage from "../src/assets/images/posters/titanic.jpg";
import whiplashImage from "../src/assets/images/posters/whiplash.jpg";

// Export all images as an object
export const posters = {
  "avatar.jpg": avatarImage,
  "inception.jpg": inceptionImage,
  "avengers.jpg": avengersImage,
  "godfather.jpg": godFatherImage,
  "black_swan.jpg": blackSwanImage,
  "interstellar.jpg": interstellarImage,
  "dark_knight.jpg": darkKnightImage,
  "jurrasic_park.jpg": jurrasicParkImage,
  "eternal_sunshine.jpg": eternalSunshineImage,
  "lotr_fellowship.jpg": lotrFellowshipImage,
  "fightclub.jpg": fightclubImage,
  "mad_max_fury_road.jpg": madMaxFuryRoadImage,
  "forrest_gump.jpg": forrestGumpImage,
  "pulp_fiction.jpg": pulpFictionImage,
  "gladiator.jpg": gladiatorImage,
  "revenant.jpg": revenantImage,
  "grand_budapest_hotel.jpg": grandBudapestHotelImage,
  "shawshank_redemption.jpg": shawshankRedemptionImage,
  "inglorious_basterds.jpg": ingloriousBasterdsImage,
  "silence_of_the_lambs.jpg": silenceOfTheLambsImage,
  "inception.jpg": inceptionImage,
  "social_network.jpg": socialNetworkImage,
  "the_dark_knight_rises.jpg": theDarkKnightRisesImage,
  "matrix.jpg": theMatrixImage,
  "titanic.jpg": titanicImage,
  "whiplash.jpg": whiplashImage,
  // Add more images here as needed
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
