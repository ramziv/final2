import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function Perform() {
  const [openId, setOpenId] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items ?? []);

  const creatines = [
    {
      id: "on",
      name: "MICRONIZED CREATINE POWDER",
      price: "7 500 da",
      img: "/assets/on.png",
      desc: "Optimum Nutrition Micronized Creatine powder supports muscle strength, power, explosive movements, muscle recovery and helps support ATP recycling with 5g of creatine monohydrate per serving.",
    },
    {
      id: "bio",
      name: "100% CREATINE MONOHYDRATE",
      price: "8 500 da",
      img: "/assets/bio.png",
      desc: "Creatine helps supply energy to the muscles by rapidly replenishing ATP, enabling more intense workouts. 3g daily can increase strength by up to 20%.",
    },
    {
      id: "life",
      name: "LIFE PRO CREATINE",
      price: "10 000 da",
      img: "/assets/life.png",
      desc: "Life Pro Creatine 500g is based on pure creatine monohydrate CREAPURE, promoting strength and muscle power.",
    },
    {
      id: "nl",
      name: "NXT LEVEL CREATINE",
      price: "5 500 da",
      img: "/assets/nl.png",
      desc: "NXT Level CREATINE Monohydrate is a high-quality performance booster for strength and muscle gains.",
    },
    {
      id: "an",
      name: "CREATINE MONOHYDRATE UNFLAVOURED",
      price: "6 500 da",
      img: "/assets/an.png",
      desc: "Pure creatine for muscle strength, recovery, and power without added flavors or fillers.",
    },
    {
      id: "plat",
      name: "MUSCLETECH PLATINUM 100% CREATINE",
      price: "8 500 da",
      img: "/assets/plat.png",
      desc: "Ultra-pure micronized creatine that helps in lean muscle growth and replenishes creatine stores.",
    },
  ];

  const wheys = [
    {
      id: "onw",
      name: "OPTIMUM NUTRITION WHEY",
      price: "12 500 da",
      img: "/assets/onw.png",
      desc: "Fast-absorbing protein supporting muscle growth, recovery, and lean muscle maintenance.",
    },
    {
      id: "nitro",
      name: "MUSCLETECH NITROTECH",
      price: "13 000 da",
      img: "/assets/nitro.png",
      desc: "Premium blend of whey peptides and isolate for fast absorption and muscle recovery.",
    },
    {
      id: "isopure",
      name: "ISOPURE WHEY",
      price: "14 000 da",
      img: "/assets/isopure.png",
      desc: "High-quality isolate whey powder with zero carbs and low fat for lean muscle building.",
    },
    {
      id: "dymatize",
      name: "DYMATIZE WHEY",
      price: "13 500 da",
      img: "/assets/dymatize.png",
      desc: "Ultra-filtered whey blend that enhances recovery and supports lean mass growth.",
    },
    {
      id: "nutrabio",
      name: "NUTRABIO WHEY",
      price: "14 000 da",
      img: "/assets/nutrabio.png",
      desc: "Pure whey isolate with no fillers, providing fast-absorbing protein for recovery.",
    },
    {
      id: "bsn",
      name: "BSN WHEY",
      price: "12 800 da",
      img: "/assets/bsn.png",
      desc: "High-quality protein supplement designed for athletes to improve muscle recovery and strength.",
    },
  ];

  const multis = [
    {
      id: "uni",
      name: "UNIVERSAL MULTIVITAMIN",
      price: "5 000 da",
      img: "/assets/uni.png",
      desc: "Provides essential vitamins and minerals for energy, immune support, and overall health.",
    },
    {
      id: "opt",
      name: "OPTIMUM MULTIVITAMIN",
      price: "6 000 da",
      img: "/assets/opt.png",
      desc: "Supports energy metabolism, immunity, and overall wellness.",
    },
    {
      id: "lifevit",
      name: "LIFE PRO MULTIVITAMIN",
      price: "7 000 da",
      img: "/assets/lifevit.png",
      desc: "Comprehensive daily support with vitamins, minerals, and antioxidants.",
    },
    {
      id: "nature",
      name: "NATURE MULTIVITAMIN",
      price: "4 500 da",
      img: "/assets/nature.png",
      desc: "Balanced nutrients for overall wellness and daily immune support.",
    },
    {
      id: "mega",
      name: "MEGA MULTIVITAMIN",
      price: "6 500 da",
      img: "/assets/mega.png",
      desc: "Supports muscle recovery, energy metabolism, and immunity for active lifestyles.",
    },
    {
      id: "ultimate",
      name: "ULTIMATE MULTIVITAMIN",
      price: "8 000 da",
      img: "/assets/ultimate.png",
      desc: "Delivers essential vitamins and minerals for peak performance and health.",
    },
  ];

  const allProducts = [...creatines, ...wheys, ...multis];
  const openProduct = allProducts.find((p) => p.id === openId);

  const ProductCard = ({ item }) => (
    <div className="w-72 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={item.img}
        alt={item.name}
        className="max-w-full max-h-44 object-contain"
      />
      <h3 className="mt-3 text-white font-bold text-lg">{item.name}</h3>
      <div className="mt-2 text-2xl font-extrabold text-blue-300">
        {item.price}
      </div>
      <button
        onClick={() => setOpenId(item.id)}
        className="mt-4 px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition"
      >
        CHECK
      </button>
    </div>
  );

  const FullscreenView = ({ product }) => {
    if (!product) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 animate-fadeIn">
        <div className="relative w-full max-w-6xl bg-gradient-to-r from-indigo-700 via-violet-800 to-pink-700 rounded-3xl shadow-2xl overflow-hidden">
          <button
            onClick={() => setOpenId(null)}
            className="absolute top-6 right-6 z-50 bg-white/90 text-black rounded-full w-10 h-10 grid place-items-center shadow hover:scale-105 transition"
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

            <div className="flex-1 text-white">
              <div className="mb-2 text-sm uppercase tracking-wide text-blue-200">
                PERFORMANCE
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                {product.name}
              </h2>
              <div className="mt-3 text-2xl md:text-3xl font-black text-blue-300">
                {product.price}
              </div>

              <p className="mt-6 text-base md:text-lg text-white/90 font-medium">
                {product.desc}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold shadow-lg transition"
                >
                  Add to Cart 🛒
                </button>
                <button
                  onClick={() => setOpenId(null)}
                  className="px-6 py-3 rounded-xl bg-black/80 hover:bg-black text-blue-300 font-semibold shadow transition"
                >
                  Back
                </button>
              </div>

              <div className="mt-6 text-sm text-blue-200">
                {cart.find((item) => item.id === product.id) ? (
                  <span className="inline-block bg-black/40 px-3 py-1 rounded-full">
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-pink-600 p-6 shadow-xl">
            <h1 className="text-center text-5xl font-extrabold tracking-tight drop-shadow-md">
              PERFORMANCE
            </h1>
            <p className="text-center mt-2 text-blue-100/80">
              Supplements for peak performance — creatine, whey & multivitamins
            </p>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6">CREATINES</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {creatines.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6">WHEY PROTEINS</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {wheys.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-extrabold mb-6">MULTIVITAMINS</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {multis.map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>
        </section>
      </div>

      <FullscreenView product={openProduct} />
    </div>
  );
}
