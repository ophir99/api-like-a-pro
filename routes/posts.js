const router = require("express").Router();
const posts = require("./../controllers/posts");
router.get("/all", posts.getAllPosts);
router.post("/new", posts.createPost);
router.put("/update/:id", posts.updatePost);
router.delete("/:id", posts.deletePost);
module.exports = router;
