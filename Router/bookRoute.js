
const express=require("express");
//controllers
const controller=require("../Controllers/bookController");
//validate
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/Validations/validateMW");
const bookValidate = require("./../Core/Validations/bookValidate");
//route
const router=express.Router();

// Admin
router.route("/book")
.get(validateMW,controller.getAllBook)
.post(validateMW,controller.addBook)
.put(validateMW,controller.updateBook)
.delete(validateMW,controller.deleteBook);


module.exports=router;
