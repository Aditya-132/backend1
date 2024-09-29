import express from "express";
import {
  registerJob,
  updateJob,
  deleteJob,
} from "../controller/companyRegister.js"; // Adjust the path as necessary

const router = express.Router();

// Register a new job
router.post("/", registerJob);

// Update job details
router.put("/:id", updateJob);

// Delete a job
router.delete("/:id", deleteJob);

export default router;