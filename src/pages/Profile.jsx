import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        // optional: dispatch login again if needed
      } else {
        navigate("/login");
      }
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="bg-black/60 p-8 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Welcome, {user.username} 👋
        </h2>

        <p className="text-gray-300 mb-6">
          This is your profile. You can manage your account here.
        </p>

        <button
          onClick={handleLogout}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg py-2 px-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
