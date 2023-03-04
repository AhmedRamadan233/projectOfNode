
const express=require("express");
//controllers
const controller=require("../Controllers/memberController");
//validate
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/Validations/validateMW");
const memberValidate = require("./../Core/Validations/memberValidate");
//route
const router=express.Router();

// Admin
router.route("/member")
.get(validateMW,controller.getMember)
.post(validateMW,controller.addMember)
.put(validateMW,controller.updateMember)
.delete(validateMW,controller.deleteMember);


module.exports=router;
