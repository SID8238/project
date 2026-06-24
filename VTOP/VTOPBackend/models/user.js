const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["student", "employee", "parent", "alumni"],
      required: true,
    },

    name: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    username: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
    },

    password: {
      type: String,
    },

    regNumber: {
      type: String,
      trim: true,
    },

    dob: {
      type: String,
      trim: true,
    },

    contact: {
      type: String,
      trim: true,
    },

    alumniEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema);