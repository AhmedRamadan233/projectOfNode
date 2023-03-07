

const mongoose=require("mongoose");

const employeeSchema = new mongoose.Schema({
    _id:{type: Number , required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: { type: Date },
    hireDate: { type: Date },
    image: { type: String },
    salary: { type: Number },
  });

mongoose.model("employees",employeeSchema);
