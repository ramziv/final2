import React from "react";
import { useParams } from "react-router";
import { productsData } from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = productsData.find((p) => p.id === id);
  if (!product) return <div className="p-6 text-white">Product not found.</div>;
  return (
    <div className="p-6 text-white">
      <div className="max-w-4xl mx-auto bg-white/5 p-6 rounded-2xl shadow-lg flex gap-6">
        <img
          src={product.img}
          alt={product.name}
          className="w-96 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold text-yellow-400">{product.name}</h1>
          <p className="mt-2 text-amber-200 font-semibold">{product.price}</p>
          <p className="mt-4 text-gray-300">{product.desc}</p>
          <h3 className="mt-4 font-bold text-yellow-300">Why use it?</h3>
          <p className="text-gray-300">
            Quality ingredients to support your goals, formulated for
            performance.
          </p>
          <h3 className="mt-4 font-bold text-yellow-300">Who needs it?</h3>
          <p className="text-gray-300">
            Athletes, gym-goers, and anyone who wants to improve recovery and
            performance.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="px-6 py-2 bg-green-500 rounded-lg"
            >
              Add to cart
            </button>
            <a
              href="/cart"
              className="px-6 py-2 bg-yellow-500 rounded-lg text-black"
            >
              Go to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
