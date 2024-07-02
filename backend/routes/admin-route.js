import { adminRegister, adminLogin } from "../controllers/admin-controller.js";

import express from "express";

const router = express.Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);

export default router;
