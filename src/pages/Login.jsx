import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const userData = { username, password };
    dispatch(login(userData));

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-black/60 p-8 rounded-2xl shadow-lg w-96 flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg py-2 mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
