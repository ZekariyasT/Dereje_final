import multer from "multer";
import path from "path";
import fs from "fs";

// Centralized uploads directory
// const uploadDir = path.join(process.cwd(), "backend", "uploads");
const uploadDir = path.join(process.cwd(), "uploads");

// Ensure uploads directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage generator — all files go to uploads/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Optional: add timestamp to avoid overwriting files with same name
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// Single file upload middleware generator
export const uploadSingle = (fieldName) =>
  multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  }).single(fieldName);

// Multiple files upload middleware generator
export const uploadMultiple = (fieldsArray) =>
  multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
  }).fields(fieldsArray);

// Export uploadDir path for use in delete operations
export { uploadDir };
