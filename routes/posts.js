const router = require("express").Router();
const posts = require("./../controllers/posts");
router.get("/all", posts.getAllPosts);
router.post("/new", posts.createPost);
module.exports = router;
