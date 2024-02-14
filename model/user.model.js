const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", usersSchema);
