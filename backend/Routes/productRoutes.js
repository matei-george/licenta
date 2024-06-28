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
   filterProducts,
} from "../Controllers/productController.js";

router.route("/").post(authenticate, authorizeAdmin, formidable(), addProduct);
router.route("/").get(fetchProducts);
router.route("/allproducts").get(fetchAllProducts);
router.route("/top").get(fetchTopProducts);
router.route("/new").get(fetchNewProducts);
router.route("/:id").put(authenticate, authorizeAdmin, formidable(), updateProductDetails);
router.route("/:id").delete(authenticate, authorizeAdmin, formidable(), deleteProduct);
router.route("/:id").get(fetchByProductId);
router.route("/:id/reviews").post(authenticate, checkId, addProductReview);
router.route("/filtered-products").post(filterProducts);

router.get("/download/:filename", (req, res) => {
   const filename = req.params.filename;
   const filepath = path.join(process.cwd(), "uploads", filename);

   if (fs.existsSync(filepath)) {
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      res.setHeader("Content-Type", "application/zip");
      return res.download(filepath, (err) => {
         if (err) {
            res.status(500).send({ message: "Error downloading file." });
         }
      });
   }
   res.status(404).send({ message: "File not found." });
});

export default router;
