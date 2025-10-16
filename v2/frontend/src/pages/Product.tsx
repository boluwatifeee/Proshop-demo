import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../stores/cart";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  numReviews: number;
  countInStock: number;
};

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const addToCart = useCart((s) => s.add);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`/api/v2/products/${id}`);
        if (!res.ok) throw new Error("not found");
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error || !product)
    return <div className="p-6 text-red-600">{error ?? "Not found"}</div>;

  return (
    <div className="container mx-auto px-4 py-8 grid gap-6 lg:grid-cols-2">
      <img src={product.image} alt={product.name} className="w-full rounded" />
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="text-gray-600 mb-4">
          {product.rating} ⭐ ({product.numReviews})
        </div>
        <div className="text-2xl font-bold mb-6">
          ${product.price.toFixed(2)}
        </div>
        <button
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
          disabled={product.countInStock === 0}
          onClick={() =>
            addToCart({
              productId: product._id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
        >
          {product.countInStock === 0 ? "Out of stock" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
