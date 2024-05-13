import express from "express";
import { createUser, loginUser, logoutCurrentUser, getAllUsers } from "../Controllers/userController.js";

import { authenticate, authorizedAdmin } from "../Middleware/middleware.js";

const router = express.Router();

// Creare Utilizator
router.route("/").post(createUser).get(authenticate, authorizedAdmin, getAllUsers);

// Autentificare
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

export default router;
