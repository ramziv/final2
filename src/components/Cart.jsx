import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items ?? []);
  const dispatch = useDispatch();

  if (!Array.isArray(cart) || cart.length === 0) {
    return <div className="p-6 text-white">Your cart is empty.</div>;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Your Cart</h2>
      <div className="flex flex-wrap gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="w-72 bg-white/5 p-4 rounded-2xl flex flex-col items-center text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-44 object-contain mb-2"
            />
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-yellow-300 text-xl">{item.price}</p>
            <p className="text-gray-300 text-sm">{item.desc}</p>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="mt-2 px-4 py-2 rounded bg-red-600 text-white font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
