import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase.init'; // Make sure to import your Firebase config

const ProtectedRoute = ({ children }) => {
  // Check if the user is logged in
  if (!auth.currentUser) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, return the children (protected route content)
  return children;
};

export default ProtectedRoute;
