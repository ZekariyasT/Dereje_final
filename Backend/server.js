// // mun8WtTAlO1w7mMv

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import blogRoutes from "./routes/blog.route.js";
import adminAuthRoutes from "./routes/adminAuth.route.js";
import BeforeAfterImageRoutes from "./routes/beforeAfterImage.route.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({
    origin: 'https://derejeturaengineering.com',
    credentials: true
}));

// Serve uploaded files statically from /uploads
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/blogs", blogRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin", adminAuthRoutes);
app.use("/api/beforeAfterImages", BeforeAfterImageRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connection established'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');

app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
