// Autentificare si autorizare Admin
import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
   let token;

   // Citeste JWT din Cookie
   token = req.cookies.jwt;

   if (token) {
      try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = await User.findById(decoded.userId).select("-password");
         next();
      } catch (error) {
         res.status(401);
         throw new Error("Acces interzis, token esuat");
      }
   } else {
      res.status(401);
      throw new Error("Acces interzis, persoana nu este admin");
   }
});

// Verificam daca este admin
const authorizedAdmin = (req, res, next) => {
   if (req.user && req.user.isAdmin) {
      next();
   } else {
      res.status(401).send("Acces interzis, persoana nu este administrator.");
   }
};

export { authenticate, authorizedAdmin };
