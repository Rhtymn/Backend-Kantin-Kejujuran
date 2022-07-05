import express from "express";
import {
  getCanteenBalance,
  createCanteenBalance,
  updateBalance,
} from "../controllers/CanteenBalanceController.js";

const router = express.Router();

router.get("/", getCanteenBalance);
router.post("/", createCanteenBalance);
router.patch("/:id", updateBalance);

export default router;
