import mongoose from "mongoose";

const BeforeAfterImageSchema = new mongoose.Schema(
  {
    beforeImage: {
      data: String,
      contentType: String,
    },
    afterImage: {
      data: String,
      contentType: String,
    },
  },
  { timestamps: true }
);

const BeforeAfterImage = mongoose.model(
  "BeforeAfterImage",
  BeforeAfterImageSchema
);

export default BeforeAfterImage;
