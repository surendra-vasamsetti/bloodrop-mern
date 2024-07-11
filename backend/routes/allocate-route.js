import { AllocateUser } from "../controllers/allocate-controller.js";
import express from "express";

const router = express.Router();

router.post("/allocateuser", AllocateUser);

export default router;
