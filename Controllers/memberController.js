

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

exports.getMember=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get Member");
}


exports.addMember=(request,response,next)=>{
    console.log(request.query);
    response.send("now in add Member");
}


exports.updateMember=(request,response,next)=>{
    console.log(request.query);
    response.send("now in update Member");
}


exports.deleteMember=(request,response,next)=>{
    console.log(request.query);
    response.send("now in delete Member");
}
