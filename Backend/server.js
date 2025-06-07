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

// Debug middleware - log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// CORS configuration
const corsOptions = {
  origin: ['https://derejeturaengineering.com', 'https://www.derejeturaengineering.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
  maxAge: 86400 // 24 hours
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Add CORS headers to all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://derejeturaengineering.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Test routes
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint working' });
});

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

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(`${new Date().toISOString()} - Error:`, err);
    res.status(500).json({ 
      error: 'Something broke!',
      message: err.message 
    });
});

// Not found middleware
app.use((req, res) => {
    console.log(`${new Date().toISOString()} - 404 Not Found: ${req.method} ${req.url}`);
    res.status(404).json({ 
      error: 'Not Found',
      path: req.url,
      method: req.method
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
      status: 'OK', 
      message: 'Server is running',
      timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`${new Date().toISOString()} - Server started at https://api.derejeturaengineering.com`);
});
