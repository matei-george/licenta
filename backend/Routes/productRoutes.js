import express from "express";
import formidable from "express-formidable";
const router = express.Router();

import { authenticate, authorizeAdmin } from "../Middleware/authMiddleware.js";
import checkId from "../Middleware/checkid.js";
import { addProduct, updateProductDetails, deleteProduct, fetchProducts, fetchByProductId, fetchAllProducts, addProductReview } from "../Controllers/productController.js";

router.route("/").post(authenticate, authorizeAdmin, formidable(), addProduct);
router.route("/:id").put(authenticate, authorizeAdmin, formidable(), updateProductDetails);
router.route("/:id").delete(authenticate, authorizeAdmin, formidable(), deleteProduct);
router.route("/").get(fetchProducts);
router.route("/:id").get(fetchByProductId);
router.route("/allproducts").get(fetchAllProducts);
router.route("/:id/reviews").post(authenticate, authorizeAdmin, addProductReview);
export default router;
