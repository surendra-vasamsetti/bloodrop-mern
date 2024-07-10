// import {
//   bloodBankRegister,
//   bloodBankLogin,
//   getNearbyBloodBanks,
// } from "../controllers/blood-bank-controller.js";

// import express from "express";

// const router = express.Router();

// router.post("/register", bloodBankRegister);
// router.post("/login", bloodBankLogin);
// router.get("/nearby", getNearbyBloodBanks);

// export default router;

import {
  bloodBankRegister,
  bloodBankLogin,
  getNearbyBloodBanks,
  getGovernmentBloodBanks,
  getPrivateBloodBanks,
  getRedCrossBloodBanks,
} from "../controllers/blood-bank-controller.js";

import express from "express";

const router = express.Router();

router.post("/register", bloodBankRegister);
router.post("/login", bloodBankLogin);
router.get("/nearby", getNearbyBloodBanks);
router.get("/government", getGovernmentBloodBanks);
router.get("/private", getPrivateBloodBanks);
router.get("/redcross", getRedCrossBloodBanks);

export default router;
