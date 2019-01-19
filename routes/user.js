const router = require("express").Router();

const user = require("../controllers/user");

router.post("/create", user.createUser);
router.post("/login", user.loginUser);
module.exports = router;
