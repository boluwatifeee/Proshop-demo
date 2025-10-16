import { Link } from "react-router-dom";

type Props = {
  _id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  numReviews: number;
};

export default function ProductCard(p: Props) {
  return (
    <Link to={`/product/${p._id}`} className="block">
      <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-48 object-cover rounded"
        />
        <div className="mt-3 font-semibold">{p.name}</div>
        <div className="text-gray-600 text-sm">
          {p.rating} ⭐ ({p.numReviews})
        </div>
        <div className="mt-1 text-xl font-bold">${p.price.toFixed(2)}</div>
      </div>
    </Link>
  );
}
