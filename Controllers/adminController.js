

const mongoose=require("mongoose");
require("./../Modals/adminModel");
require("./../Modals/basicAdminModel");
require("./../Modals/bookModel");
require("./../Modals/employeeModel");
require("./../Modals/memberModel");



const AdminSchema=mongoose.model("admins");
const BasicAdminSchema=mongoose.model("basicAdmins");
const BookSchema=mongoose.model("books");
const EmployeeSchema=mongoose.model("employees");
const MemberSchema=mongoose.model("members");


exports.getAllAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get Admin");
}


exports.addAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in add Admin");
}


exports.updateAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in update Admin");
}


exports.deleteAdmin=(request,response,next)=>{
    console.log(request.query);
    response.send("now in delete Admin");
}
