import { useEffect, useState } from "react";
import { getProducts } from "../api/axios";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="p-4">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="border p-2 mb-2">
            <h2 className="font-bold">{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>{product.desc}</p>
          </div>
        ))
      )}
    </div>
  );
}
