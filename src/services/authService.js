// services/authService.js
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
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

export const resetPassword = (email) => {
  // Business logic for resetting password
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

export const updateEmail = (email) => {
  // Business logic for updating email
  updateEmail(auth.currentUser, email)
    .then(() => {
      // Email updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};

export const updatePassword = (newPassword) => {
  // Business logic for updating password
  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
};

export const deleteUser = () => {
  // Business logic for deleting user
};

export const updateDisplayName = (displayName) => {
  updateProfile(auth.currentUser, {
    displayName: displayName,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
};

export const sendUserVerificationEmail = () => {
  // Business logic for sending user verification email
  sendEmailVerification(auth.currentUser).then(() => {
    // Email verification sent!
    // ...
  });
};
