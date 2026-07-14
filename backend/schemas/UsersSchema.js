const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },

  username: {
    type: String,
    required: [true, "Your username is required"],
  },

  mobile: {
    type: String,
    required: [true, "Your mobile number is required"],
    unique: true,
    match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
  },

  password: {
    type: String,
    required: [true, "Your password is required"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UsersSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = { UsersSchema };