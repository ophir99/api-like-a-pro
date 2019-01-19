const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: { type: "string", unique: true },
  password: "string"
});

const user = mongoose.model("User", schema);

module.exports = user;
