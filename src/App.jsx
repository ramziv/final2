import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅ for auth state
import Nav from "./components/Nav";
import Home from "./components/Home";
import Burn from "./components/Burn";
import Mass from "./components/Mass";
import Perform from "./components/Perform";
import Cart from "./components/Cart";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const user = useSelector((state) => state.auth.user);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Nav cart={cart} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burn" element={<Burn cart={cart} setCart={setCart} />} />
        <Route path="/mass" element={<Mass cart={cart} setCart={setCart} />} />
        <Route
          path="/perform"
          element={<Perform cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
