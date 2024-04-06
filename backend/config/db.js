import mongoose from "mongoose";

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log(`Conectare cu succes ✅`);
   } catch (error) {
      console.log(`EROARE ${error.message}`);
      process.exit(1);
   }
};

export default connectDB;
