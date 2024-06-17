import asyncHandler from "../Middleware/asyncHandler.js";
import Product from "../Models/productModel.js";

const addProduct = asyncHandler(async (req, res) => {
   try {
      const { name, description, price, category, quantity, brand } = req.fields;

      //   Validare date
      switch (true) {
         case !name:
            return res.json({ error: "Numele este obligatoriu!" });
         case !description:
            return res.json({ error: "Descrierea este obligatorie!" });
         case !price:
            return res.json({ error: "Pretul este obligatoriu!" });
         case !category:
            return res.json({ error: "Categoria este obligatorie!" });
         case !quantity:
            return res.json({ error: "Cantitatea este obligatorie!" });
         case !brand:
            return res.json({ error: "Brandul este obligatoriu!" });
      }
      const product = new Product({ ...req.fields });
      await product.save();
      res.json(product);
   } catch (error) {
      console.error(error);
      res.status(400).json(error.message);
   }
});

const updateProductDetails = asyncHandler(async (req, res) => {
   try {
      const { name, description, price, category, quantity, brand } = req.fields;

      //   Validare date
      switch (true) {
         case !name:
            return res.json({ error: "Numele este obligatoriu!" });
         case !description:
            return res.json({ error: "Descrierea este obligatorie!" });
         case !price:
            return res.json({ error: "Pretul este obligatoriu!" });
         case !category:
            return res.json({ error: "Categoria este obligatorie!" });
         case !quantity:
            return res.json({ error: "Cantitatea este obligatorie!" });
         case !brand:
            return res.json({ error: "Brandul este obligatoriu!" });
      }

      const product = await Product.findByIdAndUpdate(req.params.id, { ...req.fields }, { new: true });
      await product.save();
      res.json(product);
   } catch (error) {
      console.error(error);
      res.status(400).json(error.message);
   }
});

const deleteProduct = asyncHandler(async (req, res) => {
   try {
      const product = await Product.findByIdAndDelete(req.params.id);

      res.json(product);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Eroare de server." });
   }
});

const fetchProducts = asyncHandler(async (req, res) => {
   try {
      const pageSize = 9;
      const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: "i" } } : {};

      const count = await Product.countDocuments({ ...keyword });
      const products = await Product.find({ ...keyword }).limit(pageSize);

      res.json({ products, page: 1, pages: Math.ceil(count / pageSize), hasMore: false });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Eroare de server." });
   }
});

const fetchByProductId = asyncHandler(async (req, res) => {
   try {
      const product = await Product.findById(req.params.id);
      if (product) {
         return res.json(product);
      } else {
         res.status(404);
         throw new Error("Produsul nu a fost gasit.");
      }
   } catch (error) {
      console.error(error);
      res.status(404).json({ error: "Produsul nu a fost gasit." });
   }
});
const fetchAllProducts = asyncHandler(async (req, res) => {
   try {
      const products = await Product.find({}).populate("category").limit(12).sort({ createdAt: -1 });

      res.json(products);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Eroare de server." });
   }
});

const addProductReview = asyncHandler(async (req, res) => {
   try {
      const { rating, comment } = req.body;
      const product = await Product.findById(req.params.id);

      if (!product) {
         res.status(404);
         throw new Error("Produsul nu a fost gasit.");
      }

      const alreadyReviewed = product.reviews.find((r) => r.user.toString() === req.user._id.toString());

      if (alreadyReviewed) {
         res.status(400);
         throw new Error("Produs cu recenzie deja pusa.");
      }

      const review = {
         name: req.user.username,
         rating: Number(rating),
         comment,
         user: req.user._id,
      };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Recenzie publicata." });
   } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
   }
});
export { addProduct, updateProductDetails, deleteProduct, fetchProducts, fetchByProductId, fetchAllProducts, addProductReview };
