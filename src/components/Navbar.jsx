import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import visaLogo from "../assets/visa-logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Get theme from localStorage (default: light)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    if (!isHomePage) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 dark:text-white"
            >
              <div className="flex justify-center items-center">
                <div>
                  <img
                    className="w-16 h-16 rounded-full
                  "
                    src={visaLogo}
                    alt="visa-logo"
                  />
                </div>
                <div>VisaPortal</div>
              </div>
            </Link>
          </div>
          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <RxHamburgerMenu />
            </button>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`text-gray-800 ${
                location.pathname === "/"
                  ? "font-bold btn btn-primary text-white"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/all-visas"
              className={`text-gray-800 ${
                location.pathname === "/all-visas"
                  ? "font-bold btn btn-primary text-white"
                  : ""
              }`}
            >
              All Visas
            </Link>
            {user && (
              <>
                <Link
                  to="/add-visa"
                  className={`text-gray-800 ${
                    location.pathname === "/add-visa"
                      ? "font-bold btn btn-primary text-white"
                      : ""
                  }`}
                >
                  Add Visa
                </Link>
                <Link
                  to="/my-added-visas"
                  className={`text-gray-800 ${
                    location.pathname === "/my-added-visas"
                      ? "font-bold btn btn-primary text-white"
                      : ""
                  }`}
                >
                  My Added Visas
                </Link>
                <Link
                  to="/my-visa-application"
                  className={`text-gray-800 ${
                    location.pathname === "/my-visa-application"
                      ? "font-bold btn btn-primary text-white"
                      : ""
                  }`}
                >
                  My Visa Applications
                </Link>
              </>
            )}
          </div>
          {/* Dark Mode Button (Only for Home Page) */}
          {isHomePage && (
            <button
              onClick={toggleTheme}
              className="text-gray-800 cursor-pointer dark:text-white text-2xl focus:outline-none"
            >
              {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
            </button>
          )}
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="relative group">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                  <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm px-4 py-2 whitespace-nowrap rounded mt-2">
                    {user?.displayName}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col justify-center items-center py-2 space-y-4 mt-4">
              <Link
                to="/"
                className={`text-gray-800 ${
                  location.pathname === "/"
                    ? "font-bold btn btn-primary text-white"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/all-visas"
                className={`text-gray-800 ${
                  location.pathname === "/all-visas"
                    ? "font-bold btn btn-primary text-white"
                    : ""
                }`}
              >
                All Visas
              </Link>
              {user && (
                <>
                  <Link
                    to="/add-visa"
                    className={`text-gray-800 ${
                      location.pathname === "/add-visa"
                        ? "font-bold btn btn-primary text-white"
                        : ""
                    }`}
                  >
                    Add Visa
                  </Link>
                  <Link
                    to="/my-added-visas"
                    className={`text-gray-800 ${
                      location.pathname === "/my-added-visas"
                        ? "font-bold btn btn-primary text-white"
                        : ""
                    }`}
                  >
                    My Added Visas
                  </Link>
                  <Link
                    to="/my-visa-application"
                    className={`text-gray-800 ${
                      location.pathname === "/my-visa-application"
                        ? "font-bold btn btn-primary text-white"
                        : ""
                    }`}
                  >
                    My Visa Applications
                  </Link>
                </>
              )}
              {user ? (
                <>
                  <div className="flex items-center space-x-2">
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    />
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
