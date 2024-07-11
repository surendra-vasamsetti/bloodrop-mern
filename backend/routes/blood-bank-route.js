import {
  bloodBankRegister,
  bloodBankLogin,
  getNearbyBloodBanks,
  getGovernmentBloodBanks,
  getPrivateBloodBanks,
  getRedCrossBloodBanks,
} from "../controllers/blood-bank-controller.js";

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import express from "express";

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

router.post("/register", upload.single("certificates"), bloodBankRegister);
router.post("/login", bloodBankLogin);
router.get("/nearby", getNearbyBloodBanks);
router.get("/government", getGovernmentBloodBanks);
router.get("/private", getPrivateBloodBanks);
router.get("/redcross", getRedCrossBloodBanks);

export default router;
