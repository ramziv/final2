import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      dispatch(login(name));
      setName("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-yellow-700 text-white">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 text-center">
        {!user ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-yellow-400">Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 mb-4 rounded-lg text-black outline-none"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-lg transition"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4 text-yellow-400">
              Welcome, {user} 👋
            </h1>
            <button
              onClick={() => dispatch(logout())}
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
