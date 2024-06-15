import mongoose from "mongoose";

// Schema categoriei
const categorySchema = new mongoose.Schema({
   name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
      unique: true,
   },
});

export default mongoose.model("Category", categorySchema);
