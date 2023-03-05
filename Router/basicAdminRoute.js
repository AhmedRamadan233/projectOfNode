
const express=require("express");
//controllers
const controller=require("../Controllers/basicAdminController");
//validate
const {body,param,query}=require("express-validator");
const validateMW=require("./../Core/Validations/validateMW");
const basicAdminValidate = require("./../Core/Validations/basicAdminValidate");
//route
const router=express.Router();

// Admin
router.route("/basicAdmin")
.get(validateMW,controller.getAllBasicAdmin)
.post(validateMW,controller.addBasicAdmin)
//.post(validateMW,controller.addAdmin)
.put(validateMW,controller.updateBasicAdmin)
.delete(validateMW,controller.deleteBasicAdmin);


module.exports=router;




