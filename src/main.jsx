
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import RootWrapper from './components/Root'; 
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import Profile from './pages/Profile.jsx';
import EventDetails from './pages/EventDetails.jsx';
import ForgotPassword from './pages/ForgetPassword.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />, 
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
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword/>
      },
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

//WORKING CODE