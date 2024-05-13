import User from "../Models/userModel.js";
import asyncHandler from "../Middleware/asyncHandler.js";
import bcrypt from "bcryptjs";
import generateToken from "../Utils/createToken.js";

// Inregistrare
const createUser = asyncHandler(async (req, res) => {
   const { username, email, password } = req.body;

   if (!username || !email || !password) {
      throw new Error("Va rugam introduceti toate campurile.");
   }

   const userExists = await User.findOne({ email });
   if (userExists) res.status(400).send("Utilizatorul exista deja.");

   //    Criptare
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   const newUser = new User({ username, email, password: hashedPassword });

   try {
      await newUser.save();
      generateToken(res, newUser._id);
      res.status(201).json({
         _id: newUser._id,
         username: newUser.username,
         email: newUser.email,
         isAdmin: newUser.isAdmin,
      });
   } catch (error) {
      res.status(400);
      throw new Error("Datele utilizatorului sunt invalide.");
   }
});

// Logare
const loginUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   const existingUser = await User.findOne({ email });

   if (existingUser) {
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);

      if (isPasswordValid) {
         generateToken(res, existingUser._id);

         res.status(201).json({
            _id: existingUser._id,
            username: existingUser.username,
            email: existingUser.email,
            isAdmin: existingUser.isAdmin,
         });
         return;
      }
   }
});

// Logout
const logoutCurrentUser = asyncHandler(async (req, res) => {
   res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
   });
   res.status(200).json({ message: "Delogare cu succes." });
});

const getAllUsers = asyncHandler(async (req, res) => {
   const users = await User.find({});
   res.json(users);
});

export { createUser, loginUser, logoutCurrentUser, getAllUsers };
