import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Nav({ cart, user }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-black flex justify-between items-center px-6 py-4 shadow-[0_4px_15px_rgba(255,191,0,0.15)] border-b border-yellow-500/20">
      <Link
        to="/"
        className="transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
      >
        <img className="w-40" src="/assets/TITAN.png.png" alt="logo" />
      </Link>

      <nav>
        <ul className="flex gap-8 uppercase tracking-wide text-lg font-bold text-amber-400 items-center">
          {["HOME", "BURN", "MASS", "PERFORM"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                className="transition-all duration-300 hover:text-yellow-400"
              >
                {item}
              </Link>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          <li className="relative group">
            <Link
              to="/cart"
              className="transition-all duration-300 hover:text-yellow-400 flex items-center gap-1"
            >
              CART <span className="text-yellow-500">({cart.length})</span>
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  to="/profile"
                  className="relative px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                >
                  <span className="relative z-10">
                    Hi, {user.username || "User"}
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="relative px-4 py-2 bg-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="relative px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
