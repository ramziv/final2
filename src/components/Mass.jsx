import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function MassGainer() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [openId, setOpenId] = useState(null);

  const products = [
    {
      id: "hyper",
      name: "HYPER MASS",
      price: "40 000 da",
      img: "/assets/mass.png",
      desc: "With 3 protein and 3 carbohydrate sources, enriched with micronized creatine. Hyper Mass is a complex, complete mass gainer drink powder for those who take progress seriously: extra calorie intake, high protein content, fast and predictable recovery. Three types of protein ensure your muscles get what they need at every stage of the day.",
    },
    {
      id: "mutant",
      name: "MUTANT MASS",
      price: "35 000 da",
      img: "/assets/mut.png",
      desc: "Mutant Mass is specifically for the hardcore, the most committed, and those who want to dominate their mass-building goals. It does not contain unnecessary fillers or chemicals and is packed with the highest quality protein, calories, carbs, and fats derived from real food and other quality sources.",
    },
    {
      id: "titan",
      name: "LIFE PRO TITAN",
      price: "30 000 da",
      img: "/assets/tit.png",
      desc: "Gluten Free advanced sports supplement designed to increase lean muscle mass, composed of a blend of protein, carbohydrates, and L-glutamine. Ideal for mass-gaining diets, this gluten-free product enhances performance, facilitates recovery, and provides sustained energy.",
    },
    {
      id: "meta",
      name: "METABOLIC MASS",
      price: "25 000 da",
      img: "/assets/meta.png",
      desc: "Metabolic Mass™ is our most anabolic mass builder yet, giving you 2,130 calories, 60g of anabolic protein, 12g of BCAAs, 12.8g of glutamine, and 465g of hardgainer-approved carbohydrates to help overpower your fast metabolism and pack on slabs of new muscle.",
    },
    {
      id: "warrior",
      name: "WARRIOR MASS GAINER",
      price: "20 000 da",
      img: "/assets/war.png",
      desc: "Warrior Mass Gainer is engineered for athletes and hard gainers seeking serious muscle mass. Each serving delivers over 1,000 calories and up to 61g of high-quality protein, combining fast and slow-digesting proteins with a blend of complex and simple carbohydrates to support muscle growth and recovery.",
    },
    {
      id: "fuel",
      name: "MUSCLE FUEL ANABOLIC",
      price: "50 000 da",
      img: "/assets/fuel.png",
      desc: "USN Muscle Fuel Anabolic protein powder is an all-in-one hardcore lean mass gainer for accelerated muscle growth and optimal recovery. Builds lean muscle mass, enhances physical performance, speeds recovery, and contains Tolerase™ for smoother digestion.",
    },
  ];

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      dispatch(addToCart(product));
    }
  };

  function ProductCard({ item }) {
    return (
      <div className="w-72 bg-black/80 border border-yellow-500 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="w-full h-44 flex items-center justify-center">
          <img
            src={item.img}
            alt={item.name}
            className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h3 className="mt-3 text-yellow-400 font-bold text-lg">{item.name}</h3>
        <div className="mt-2 text-2xl font-extrabold text-yellow-500">
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
        <div className="relative w-full max-w-6xl bg-gradient-to-r from-black via-gray-900 to-yellow-700 rounded-3xl shadow-2xl overflow-hidden">
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
                MASS GAINER
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
                  onClick={() => handleAddToCart(product)}
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
                {cart.some((item) => item.id === product.id) ? (
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
    <div className="min-h-screen bg-black text-yellow-400 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8">
          <div className="rounded-2xl bg-gradient-to-r from-black via-gray-900 to-yellow-700 p-6 shadow-xl transform transition hover:scale-[1.01]">
            <h1 className="text-center text-5xl font-extrabold tracking-tight drop-shadow-md">
              MASS GAINER
            </h1>
            <p className="text-center mt-2 text-yellow-300/80">
              Supplements for mass gain — high-calorie, protein-packed powders
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <img
              className="md:w-1/2 rounded-lg object-cover shadow-lg"
              src="/assets/ult.jpeg"
              alt="ult1"
            />
            <img
              className="md:w-1/2 rounded-lg object-cover shadow-lg"
              src="/assets/ult2.jpeg"
              alt="ult2"
            />
          </div>
        </header>

        <section>
          <div className="flex flex-wrap gap-8">
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
