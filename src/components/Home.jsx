import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center flex-col bg-[url('/assets/gym.jpg')] bg-center bg-no-repeat bg-cover h-screen relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl text-yellow-400 font-bold uppercase tracking-widest mb-2">
            SHOP LIKE NEVER BEFORE
          </h1>
          <h1 className="text-6xl md:text-8xl font-extrabold text-amber-100 mb-4 drop-shadow-lg">
            BEST QUALITY, BEST PRICE
          </h1>
          <p className="text-xl md:text-3xl font-semibold text-amber-200">
            GET YOUR GUNS NOW AND KILL THE OLD YOU
          </p>
        </div>
      </div>

      <h1 className="text-center mt-10 text-3xl md:text-4xl font-extrabold text-amber-300 cursor-pointer transition-transform duration-300 hover:scale-110">
        SHOP BY GOAL
      </h1>

      <div className="flex flex-col md:flex-row justify-around items-center mt-16 gap-10 px-6 md:px-0">
        <div className="flex flex-col justify-center items-center bg-black/70 p-4 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            className="h-60 w-60 md:h-72 md:w-72 rounded-2xl object-cover"
            src="/assets/burn.jpg"
            alt="BURN"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-400 mt-4 hover:text-yellow-300 transition-colors duration-300">
            BUILD YOUR BURN
          </h1>
          <button
            onClick={() => navigate("/burn")}
            className="mt-3 bg-amber-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-2xl transition-colors duration-300"
          >
            SHOP
          </button>
        </div>

        <div className="flex flex-col justify-center items-center bg-black/70 p-4 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            className="h-60 w-60 md:h-72 md:w-72 rounded-2xl object-cover"
            src="/assets/per.jpg"
            alt="PERFORMANCE"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-400 mt-4 hover:text-yellow-300 transition-colors duration-300">
            BUILD YOUR PERFORMANCE
          </h1>
          <button
            onClick={() => navigate("/perform")}
            className="mt-3 bg-amber-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-2xl transition-colors duration-300"
          >
            SHOP
          </button>
        </div>

        <div className="flex flex-col justify-center items-center bg-black/70 p-4 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            className="h-60 w-60 md:h-72 md:w-72 rounded-2xl object-cover"
            src="/assets/mass.jpg"
            alt="MASS"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-400 mt-4 hover:text-yellow-300 transition-colors duration-300">
            BUILD YOUR MASS
          </h1>
          <button
            onClick={() => navigate("/mass")}
            className="mt-3 bg-amber-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-2xl transition-colors duration-300"
          >
            SHOP
          </button>
        </div>
      </div>

      <footer className="bg-black text-amber-300 py-12 px-6 mt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              Titan Supps
            </h2>
            <p className="text-sm text-amber-200">
              Fuel your body with premium supplements for strength, endurance,
              and recovery. Train harder. Perform better. Be unstoppable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/burn")}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  BURN
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/mass")}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  MASS
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/perform")}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  PERFORMANCE
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-3">
              Subscribe for the latest deals and fitness tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg bg-black border border-amber-400 text-amber-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-amber-400 hover:bg-yellow-500 px-4 rounded-r-lg text-black font-bold transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-10 pt-6 text-center text-sm text-amber-300">
          © {new Date().getFullYear()} Titan Supps. All rights reserved.
        </div>
      </footer>
    </>
  );
}
