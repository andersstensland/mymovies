// services/authService.js
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../data/firebase";

export const registerUser = async (email, password) => {
  // Business logic for user registration
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = async (email, password) => {
  // Business logic for user login
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async (email) => {
  // Business logic for user logout
};

export const subscribeToAuthChanges = (callback) => {
  // Business logic for subscribing to auth changes
  return onAuthStateChanged(auth, callback);
};

export const logout = () => {
  // Business logic for user logout
  return signOut(auth);
};
