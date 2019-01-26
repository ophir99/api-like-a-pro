const express = require("express");

const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
const posts = require("./routes/posts");
const userRoutes = require("./routes/user");
mongoose
  .connect("mongodb://127.0.0.1:27017/prodb")
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
// http://localhost:8900/posts/all
app.use("/posts", posts);
app.use("/tweets", posts);
app.use("/user", userRoutes);
app.listen(8900, () => {
  console.log("API started...");
});
