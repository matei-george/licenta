import { Timestamp } from "mongodb";
import mongoose from "mongoose";

// Schema unui user
const userSchema = mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },

      password: {
         type: String,
         required: true,
      },

      isAdmin: {
         type: Boolean,
         required: true,
         default: false,
      },
   },
   { timestamps: true }
);

export default mongoose.model("User", userSchema);
