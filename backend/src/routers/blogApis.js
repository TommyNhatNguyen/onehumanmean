const express = require("express");
const blogRouter = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogsController");
const { handleTempUploads } = require("../middlewares/handleTempUploads");
const authValidation = require("../middlewares/authValidation");

blogRouter.get("/blogs", getAllBlogs);

blogRouter.get("/blogs/:blogId", getBlogById);

blogRouter.post("/blogs", authValidation, handleTempUploads, createBlog);

blogRouter.put("/blogs/:blogId", authValidation, handleTempUploads, updateBlog);

blogRouter.delete("/blogs/:blogId", authValidation, deleteBlog);

module.exports = blogRouter;
