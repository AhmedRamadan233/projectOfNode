
const express=require("express");
//controllers
const controller=require("../Controllers/employeeController");
//validate
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/Validations/validateMW");
const employeeValidate = require("./../Core/Validations/employeeValidate");
//route
const router=express.Router();

// Admin
router.route("/employee")
.get(validateMW,controller.getEmployee)
.post(validateMW,controller.addEmployee)
.put(validateMW,controller.updateEmployee)
.delete(validateMW,controller.deleteEmployee);


module.exports=router;
