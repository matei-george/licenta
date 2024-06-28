import path from "path";
import express, { application } from "express";
import multer from "multer";
import fs from "fs";

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

const imageFileFilter = (req, file, cb) => {
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

const zipFileFilter = (req, file, cb) => {
   const filetypes = /zip/;
   const mimetypes = /zip/;

   const extname = path.extname(file.originalname).toLowerCase();
   const mimetype = file.mimetype;

   if (filetypes.test(extname) && mimetypes.test(mimetype)) {
      cb(null, true);
   } else {
      cb(new Error("Doar fisiere tip ZIP sunt permise."), false);
   }
};

const uploadImage = multer({ storage, fileFilter: imageFileFilter });
const uploadZip = multer({ storage, fileFilter: zipFileFilter });
const uploadSingleImage = uploadImage.single("image");
const uploadSingleZip = uploadZip.single("zipfile");

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

router.post("/zip", (req, res) => {
   uploadSingleZip(req, res, (error) => {
      if (error) {
         res.status(400).send({ message: error.message });
      } else if (req.file) {
         res.status(200).send({
            message: "Fisier ZIP incarcat cu succes.",
            file: `/${req.file.path}`,
         });
      } else {
         res.status(400).send({ message: "Fisierul ZIP este obligatoriu." });
      }
   });
});

router.get("/download/:filename", (req, res) => {
   const filename = req.params.filename;
   const filepath = path.join(process.cwd(), "uploads", filename);

   if (fs.existsSync(filepath)) {
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      res.setHeader("Content-Type", "application/octet-stream");
      return res.download(filepath, (err) => {
         if (err) {
            res.status(500).send({ message: "Eroare la descarcarea fisierului." });
         }
      });
   }
   res.status(404).send({ message: "Fisierul nu a fost gasit." });
});

export default router;
