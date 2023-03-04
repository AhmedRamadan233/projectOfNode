

const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    _id:{type: Number , required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String },
    phoneNumber: { type: String },
    birthDate: { type: Date },
    fullAddress: { type: String },
    createdAt: { type: Date, default: Date.now },
  });

mongoose.model("members",memberSchema);
