import express from "express";
import formidable from "express-formidable";
const router = express.Router();

import { authenticate, authorizeAdmin } from "../Middleware/authMiddleware.js";
import checkId from "../Middleware/checkid.js";
import {
   addProduct,
   updateProductDetails,
   deleteProduct,
   fetchProducts,
   fetchByProductId,
   fetchAllProducts,
   addProductReview,
   fetchTopProducts,
   fetchNewProducts,
} from "../Controllers/productController.js";

router.route("/").post(authenticate, authorizeAdmin, formidable(), addProduct);
router.route("/").get(fetchProducts);
router.route("/allproducts").get(fetchAllProducts);
router.route("/top-products").get(fetchTopProducts);
router.route("/new").get(fetchNewProducts);
router.route("/:id").put(authenticate, authorizeAdmin, formidable(), updateProductDetails);
router.route("/:id").delete(authenticate, authorizeAdmin, formidable(), deleteProduct);
router.route("/:id").get(fetchByProductId);
router.route("/:id/reviews").post(authenticate, authorizeAdmin, checkId, addProductReview);

export default router;
