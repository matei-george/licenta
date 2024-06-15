import express from "express";
const router = express.Router();

import { createCategory, updateCategory } from "../Controllers/categoryController.js";
import { authenticate, authorizeAdmin } from "../Middleware/authMiddleware.js";

router.route("/").post(authenticate, authorizeAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory);

export default router;
