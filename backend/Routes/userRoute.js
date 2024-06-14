import express from "express";
import {
   createUser,
   loginUser,
   logoutCurrentUser,
   getAllUsers,
   getCurrentUserProfile,
   updateCurrentUserProfile,
   deleteUserById,
   getUserById,
   updateUserById,
} from "../Controllers/userController.js";

import { authenticate, authorizedAdmin } from "../Middleware/middleware.js";

const router = express.Router();

// Creare Utilizator
router.route("/").post(createUser).get(authenticate, authorizedAdmin, getAllUsers);

// Autentificare
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);
router.route("/profile").get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);

// Administrare admin rute
router.route("/:id").delete(authenticate, authorizedAdmin, deleteUserById).get(authenticate, authorizedAdmin, getUserById).put(authenticate, authorizedAdmin, updateUserById);
export default router;
