import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

import Register from './pages/Register.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import Profile from './pages/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root component
    children: [
      {
        index: true,
        element: <Home /> // Default route
      },
      {
        path: 'login',
        element: <Login /> // Login page
      },
      {
        path: 'register',
        element: <Register /> // Register page
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ), // Protected Profile route
      }
    ]
  },
]);

export default router;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
