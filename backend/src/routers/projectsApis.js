const express = require("express");
const projectRouter = express.Router();
const { handleTempUploads } = require("../middlewares/handleTempUploads");
const authValidation = require("../middlewares/authValidation");
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectsController");

projectRouter.get("/projects", getAllProjects);

projectRouter.get("/projects/:projectId", getProjectById);

projectRouter.post(
  "/projects",
  authValidation,
  handleTempUploads,
  createProject
);

projectRouter.put(
  "/projects/:projectId",
  authValidation,
  handleTempUploads,
  updateProject
);

projectRouter.delete("/projects/:projectId", authValidation, deleteProject);

module.exports = projectRouter;
