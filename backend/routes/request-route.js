import { RequestUser } from "../controllers/requesr-controller.js";

import express from "express";

const router = express.Router();

router.post("/requestuser", RequestUser);

export default router;
