import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import productsRouter from "./routes/products";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v2/products", productsRouter);

app.get("/api/v2/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "proshop-v2-backend" });
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`v2 backend listening on port ${PORT}`);
});
