import {
  bloodBankRegister,
  bloodBankLogin,
} from "../controllers/blood-bank-controller.js";

import express from "express";

const router = express.Router();

router.post("/register", bloodBankRegister);
router.post("/login", bloodBankLogin);

export default router;
