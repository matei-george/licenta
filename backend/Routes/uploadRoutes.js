import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "uploads/");
   },
   filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      cb(null, `${file.fieldname}-${Date.now()}${extname}`);
   },
});

const fileFilter = (req, file, cb) => {
   const filetypes = /jpe?g|png|webp/;
   const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

   const extname = path.extname(file.originalname).toLowerCase();
   const mimetype = file.mimetype;

   if (filetypes.test(extname) && mimetypes.test(mimetype)) {
      cb(null, true);
   } else {
      cb(new Error("Doar fisiere tip imagine sunt permise."), false);
   }
};

const upload = multer({ storage, fileFilter });
const uploadSingleImage = upload.single("image");

router.post("/", (req, res) => {
   uploadSingleImage(req, res, (error) => {
      if (error) {
         res.status(400).send({ message: error.message });
      } else if (req.file) {
         res.status(200).send({
            message: "Imagine incarcata cu succes.",
            image: `/${req.file.path}`,
         });
      } else {
         res.status(400).send({ message: "Imaginea este obligatorie." });
      }
   });
});

export default router;
