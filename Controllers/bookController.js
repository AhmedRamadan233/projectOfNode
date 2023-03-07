

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


exports.getAllBook=(request,response,next)=>{
    console.log(request.query);
    response.send("now in get Book");

}

exports.addBook=(request,response,next)=>{

    console.log(request.body);
    response.status(201).json({message:"add Book"});
}

exports.updateBook=(request,response,next)=>{
    response.status(200).json({message:"update Book"});

}
exports.deleteBook=(request,response,next)=>{
    response.status(200).json({message:"delete Book"});

}
