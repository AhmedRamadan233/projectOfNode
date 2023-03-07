
const express=require("express");
//controllers
const controller=require("../Controllers/adminController");
//validate
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/Validations/validateMW");
const adminValidate = require("./../Core/Validations/adminValidate");
//route
const router=express.Router();

// Admin
router.route("/admin")
.get(validateMW,controller.getAllAdmin)
.post(validateMW,controller.addAdmin)
.put(validateMW,controller.updateAdmin)
.delete(validateMW,controller.deleteAdmin);


module.exports=router;




