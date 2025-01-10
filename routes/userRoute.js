import express from "express";
import {
  forgotPassword,
  getUser,
  getUserForPortfolio,
  login,
  logout,
  register,
  resetPassword,
  updateProfile,
  updatePssword,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/password/forgot", forgotPassword);
router.get("/me", isAuthenticated, getUser);
router.get("/logout", isAuthenticated, logout);
router.get("/portfolio/me", getUserForPortfolio);
router.put("/me/profile/update", isAuthenticated, updateProfile);
router.put("/password/update", isAuthenticated, updatePssword);
router.put("/password/reset/:token", resetPassword);

export default router;
