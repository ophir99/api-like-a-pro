const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: "string",
  desc: "string",
  hashtags: []
});

const posts = mongoose.model("Posts", schema);

module.exports = posts;
