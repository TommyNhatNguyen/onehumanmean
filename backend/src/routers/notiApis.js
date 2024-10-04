const express = require("express");
const {
  getAllNotifications,
  updateNotification,
  deleteNotification,
  getNotificationById,
  createNewNotification,
} = require("../controllers/notiController");
const authValidation = require("../middlewares/authValidation");
const notiRouter = express.Router();

notiRouter.get("/admin/notifications", authValidation, getAllNotifications);
notiRouter.get(
  "/admin/notifications/:questionId",
  authValidation,
  getNotificationById
);
notiRouter.post("/admin/notifications", createNewNotification);
notiRouter.put("/admin/notifications", authValidation, updateNotification);
notiRouter.delete(
  "/admin/notifications/:questionId",
  authValidation,
  deleteNotification
);

module.exports = notiRouter;
