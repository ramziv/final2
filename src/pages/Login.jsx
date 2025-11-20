import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login as loginFetch } from "../api/endpoints/auth";
import useUser from "../hooks/useUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login: saveUser } = useUser();

  const { mutateAsync: loginUser } = useMutation({
    mutationFn: loginFetch,
    onSuccess: (data) => {
      if (!data.success) throw new Error(data.message || "Login failed");
      saveUser(data.data);
      console.log("Login successful! Welcome back!");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    await loginUser({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-gray-900 to-gray-800 text-white">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
