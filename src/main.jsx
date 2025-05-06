
import { StrictMode } from 'react'
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
import EventDetails from './pages/EventDetails.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      {
        index: true,
        element: <Home /> 
      },
      {
        path: 'login',
        element: <Login /> 
      },
      {
        path: 'register',
        element: <Register /> 
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ), 
      },
      {
        path: 'event/:id', 
        element: (
          <ProtectedRoute>
            <EventDetails />
          </ProtectedRoute>
        ), 
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
