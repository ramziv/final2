import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router";
import { useSelector } from "react-redux";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Burn from "./components/Burn";
import Mass from "./components/Mass";
import Perform from "./components/Perform";
import Cart from "./components/Cart";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    <QueryClientProvider client={QueryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          {user && <Nav cart={cart} user={user} />}
          <Routes>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/"
              element={
                <PrivateRoute user={user}>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/burn"
              element={
                <PrivateRoute user={user}>
                  <Burn cart={cart} setCart={setCart} />
                </PrivateRoute>
              }
            />
            <Route
              path="/mass"
              element={
                <PrivateRoute user={user}>
                  <Mass cart={cart} setCart={setCart} />
                </PrivateRoute>
              }
            />
            <Route
              path="/perform"
              element={
                <PrivateRoute user={user}>
                  <Perform cart={cart} setCart={setCart} />
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute user={user}>
                  <Cart cart={cart} setCart={setCart} />
                </PrivateRoute>
              }
            />
            <Route
              path="/product/:id"
              element={
                <PrivateRoute user={user}>
                  <ProductPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute user={user}>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>{" "}
    </QueryClientProvider>
  );
}
