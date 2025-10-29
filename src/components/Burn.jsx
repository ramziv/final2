import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function Burn() {
  const [openId, setOpenId] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items ?? []);

  const products = [
    {
      id: "lipo",
      name: "LIPO6 HARDCORE",
      price: "7 500 da",
      img: "/assets/lipo.png",
      desc: "The product typically contains a blend of ingredients like caffeine...",
    },
    {
      id: "viking",
      name: "VIKING",
      price: "8 500 da",
      img: "/assets/viking.webp",
      desc: "Cayenne Pepper Extract 300 mg Boosts metabolism...",
    },
    {
      id: "carnitine",
      name: "L-CARNITINE 1000 mg",
      price: "6 500 da",
      img: "/assets/l.png",
      desc: "L-Carnitine 1000 mg contains highly effective and pure L-carnitine L-tartrate...",
    },
    {
      id: "yoha",
      name: "THOROUGHBRED LABS YOHIMBINE",
      price: "13 000 da",
      img: "/assets/yoha.png",
      desc: "Your ultimate ally...",
    },
    {
      id: "arsynist",
      name: "CONDAMNED LABZ ARSYNIST",
      price: "9 000 da",
      img: "/assets/ars.png",
      desc: "Boost your fat burning...",
    },
    {
      id: "thermo",
      name: "THERMO SPEED HARDCORE",
      price: "5 500 da",
      img: "/assets/thermo.png",
      desc: "Olimp THERMO SPEED Hardcore...",
    },
  ];

  function ProductCard({ item }) {
    return (
      <div className="w-72 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={item.img}
          alt={item.name}
          className="max-w-full max-h-44 object-contain"
        />
        <h3 className="mt-3 text-white font-bold text-lg">{item.name}</h3>
        <div className="mt-2 text-2xl font-extrabold text-yellow-300">
          {item.price}
        </div>
        <button
          onClick={() => setOpenId(item.id)}
          className="mt-4 px-6 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition"
        >
          CHECK
        </button>
      </div>
    );
  }

  function FullscreenView({ product }) {
    if (!product) return null;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 animate-fadeIn"
        aria-modal="true"
      >
        <div className="relative w-full max-w-6xl bg-gradient-to-r from-black via-gray-900 to-red-800 rounded-3xl shadow-2xl overflow-hidden">
          <button
            onClick={() => setOpenId(null)}
            className="absolute top-6 right-6 z-50 bg-yellow-500 text-black rounded-full w-10 h-10 grid place-items-center shadow hover:scale-105 transition"
            aria-label="Close"
          >
            ✕
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
            <div className="flex-1 flex items-center justify-center p-2">
              <div className="bg-black/20 rounded-2xl p-6 md:p-10 shadow-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-[300px] md:w-[420px] object-contain drop-shadow-2xl transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex-1 text-yellow-400">
              <div className="mb-2 text-sm text-yellow-300 uppercase tracking-wide">
                FAT BURNER
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                {product.name}
              </h2>
              <div className="mt-3 text-2xl md:text-3xl font-black text-yellow-500">
                {product.price}
              </div>

              <p className="mt-6 text-base md:text-lg text-yellow-200 font-medium">
                {product.desc}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="px-6 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold shadow-lg transition transform hover:-translate-y-0.5"
                >
                  Add to Cart 🛒
                </button>

                <button
                  onClick={() => setOpenId(null)}
                  className="px-6 py-3 rounded-xl bg-black/90 hover:bg-black text-yellow-400 font-semibold shadow transition"
                >
                  Back
                </button>
              </div>

              <div className="mt-6 text-sm text-yellow-300">
                {cart.find((item) => item.id === product.id) ? (
                  <span className="inline-block bg-black/50 px-3 py-1 rounded-full">
                    Added to cart
                  </span>
                ) : (
                  <span className="inline-block bg-black/30 px-3 py-1 rounded-full">
                    Not in cart
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-yellow-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8">
          <div className="rounded-2xl bg-gradient-to-r from-black via-gray-900 to-red-800 p-6 shadow-xl transform transition hover:scale-[1.01]">
            <h1 className="text-center text-5xl font-extrabold tracking-tight drop-shadow-md">
              FAT BURNERS
            </h1>
            <p className="text-center mt-2 text-yellow-300/80">
              Supplements for fat burning — powerful thermogenics and metabolism
              boosters
            </p>
          </div>
        </header>

        <section>
          <div className="flex flex-wrap gap-8 justify-center">
            {products.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        </section>
      </div>

      <FullscreenView product={products.find((p) => p.id === openId)} />
    </div>
  );
}
