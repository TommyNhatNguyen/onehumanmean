const express = require("express");
const {
  adminLogin,
  refreshToken,
  changePassword,
  getProfile,
} = require("../controllers/authController");
const authValidation = require("../middlewares/authValidation");
const authRouter = express.Router();

// Login
authRouter.post("/admin/login", adminLogin);
// Refresh token
authRouter.post("/admin/refresh-token", refreshToken);
// Change password
authRouter.post("/admin/change-password", changePassword);
// Get user
authRouter.get("/admin/profile", authValidation, getProfile);

module.exports = authRouter;
