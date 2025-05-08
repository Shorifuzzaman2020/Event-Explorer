
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { auth } from "../firebase.init"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null); 
      navigate("/login");
    } catch (err) {
      console.log("Error signing out: ", err.message);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">
        <Link to="/">Event Explorer</Link>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="hidden lg:flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/profile" className="hover:underline">My Profile</Link>
        <Link to="/myevent" className="hover:underline">My Events</Link>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL || "https://www.gravatar.com/avatar/"}
              alt={user.displayName}
              className="w-10 h-10 rounded-full cursor-pointer"
              title={user.displayName}
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white text-black p-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-600 text-white p-4">
          <div className="space-y-4">
            <Link to="/" className="block hover:underline">Home</Link>
            <Link to="/profile" className="block hover:underline">My Profile</Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
