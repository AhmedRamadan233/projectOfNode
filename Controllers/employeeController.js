

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


exports.getEmployee=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get Employee");
}


exports.addEmployee=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get Employee");
}


exports.updateEmployee=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get Employee");
}


exports.deleteEmployee=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get Employee");
}
