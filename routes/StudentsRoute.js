import express from "express";
import {
  getAllUsers,
  createUser,
  getUserByStudentId,
  updateUser,
  deleteUser,
} from "../controllers/StudentController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:studentId", getUserByStudentId);
router.post("/", createUser);
router.patch("/:studentId", updateUser);
router.delete("/:studentId", deleteUser);

export default router;
