import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  numReviews: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`/api/v2/products`);
        const data = await res.json();
        setProducts(data.products ?? []);
      } catch (e) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p._id} {...p} />
      ))}
    </div>
  );
}
