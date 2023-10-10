// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJFV0zhW99QiyBaBj6bTl-gnn5BK0ubW0",
  authDomain: "mymovies-b6f8b.firebaseapp.com",
  projectId: "mymovies-b6f8b",
  storageBucket: "mymovies-b6f8b.appspot.com",
  messagingSenderId: "912054780129",
  appId: "1:912054780129:web:3d0323ef47d9f59500b7a0",
  measurementId: "G-SH120LPZTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
