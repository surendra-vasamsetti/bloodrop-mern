// import { userRegister, userLogin } from "../controllers/user-controller.js";

// import express from "express";
// import multer from "multer";
// import path from "path";

// const router = express.Router();

// router.use(express.json());

// //using multer and path to store images in api

// // const path = require("path");

// // const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../public/images"));
//   },
//   filename: function (req, file, cb) {
//     const name = Date.now() + "-" + file.originalname;
//     cb(null, name);
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/register", upload.single("image"), userRegister);
// router.post("/login", userLogin);

// export default router;

//es6 module imports and __dirusage

import { userRegister, userLogin } from "../controllers/user-controller.js";
import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

router.use(express.json());

// Define __dirname in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using multer and path to store images in the API
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

router.post("/register", upload.single("image"), userRegister);
router.post("/login", userLogin);

export default router;
