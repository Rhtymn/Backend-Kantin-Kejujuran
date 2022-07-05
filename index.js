import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/ProductsRoute.js";
import canteenBalanceRoutes from "./routes/CanteenBalanceRoute.js";
import studentRoutes from "./routes/StudentsRoute.js";
import cors from "cors";
import FileUpload from "express-fileupload";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.log("Connection error");
}

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));

app.use("/products", productRoutes);
app.use("/canteen-balance", canteenBalanceRoutes);
app.use("/users", studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
