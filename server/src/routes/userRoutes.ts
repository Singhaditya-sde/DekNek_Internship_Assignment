import express from "express";
import { protect, AuthRequest } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/me", protect, (req: AuthRequest, res) => {
  res.json({
    message: "Authorized user",
    user: req.user,
  });
});

export default router;