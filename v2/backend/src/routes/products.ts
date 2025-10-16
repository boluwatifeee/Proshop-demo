import { Router, Request, Response } from "express";
import { z } from "zod";

const router = Router();

const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    price: 89.99,
    rating: 4.5,
    numReviews: 12,
    image: "/images/airpods.jpg",
    countInStock: 10,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    price: 599.99,
    rating: 4.0,
    numReviews: 8,
    image: "/images/phone.jpg",
    countInStock: 7,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    price: 929.99,
    rating: 3.5,
    numReviews: 12,
    image: "/images/camera.jpg",
    countInStock: 5,
  },
];

const querySchema = z.object({
  keyword: z.string().optional(),
  pageNumber: z.string().optional(),
  pageSize: z.string().optional(),
});

router.get("/", (req: Request, res: Response) => {
  const {
    keyword = "",
    pageNumber = "1",
    pageSize = "6",
  } = querySchema.parse(req.query);
  const page = Math.max(parseInt(pageNumber, 10) || 1, 1);
  const size = Math.max(parseInt(pageSize, 10) || 6, 1);

  const filtered = keyword
    ? products.filter((p) =>
        p.name.toLowerCase().includes(String(keyword).toLowerCase())
      )
    : products;

  const total = filtered.length;
  const pages = Math.ceil(total / size) || 1;
  const start = (page - 1) * size;
  const items = filtered.slice(start, start + size);

  res.json({ products: items, page, pages, total });
});

router.get("/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p._id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.json(product);
});

export default router;
