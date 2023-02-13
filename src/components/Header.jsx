import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (location.pathname === route) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div>
          <ul className="flex items-center space-x-10">
            <li
              className={`py-4   text-gray-500 cursor-pointer ${
                pathMatchRoute("/") &&
                " border-b-red-400 border-b-[3px] font-semibold text-gray-900"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-4  text-gray-500 cursor-pointer ${
                pathMatchRoute("/offers") &&
                "border-b-red-400 border-b-[3px] text-gray-900 font-semibold"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offer
            </li>
            <li
              className={`py-4 text-gray-500 cursor-pointer ${
                pathMatchRoute("/sign-in") &&
                "border-b-red-400 border-b-[3px] text-gray-900 font-semibold"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
