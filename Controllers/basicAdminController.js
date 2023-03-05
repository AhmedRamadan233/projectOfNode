

const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");


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



//crud operation for basicAdmin

exports.getAllBasicAdmin= async (request,response,next)=>{
    try {
        const basicAdmin = await BasicAdminSchema.find();
        response.json(basicAdmin);

    } catch (error) {
        console.error(error.message);
        response.status(500).send("Server Error");
    }

}




exports.addBasicAdmin = (request, response, next) => {
    const basicAdmin = new BasicAdminSchema({
      _id: request.body._id,
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
      birthDate: request.body.birthDate,
      hireDate: request.body.hireDate,
      image: request.body.image,
      salary: request.body.salary
    });
    basicAdmin.save()
      .then((data) => {
        response.status(201).json({ data });
      })
      .catch((error) => next(error));
  }




exports.updateBasicAdmin=(request,response,next)=>{
    BasicAdminSchema.updateOne({
        _id:request.body._id},
        {
            $set:{
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                email: request.body.email,
                password: request.body.password,
                birthDate: request.body.birthDate,
                hireDate: request.body.hireDate,
                image: request.body.image,
                salary: request.body.salary
            }
        }).then(data =>{
            response.status(200).json(data)
        }).catch(error=>next(error));
}



exports.deleteBasicAdmin=(request,response,next)=>{
    BasicAdminSchema.deleteOne({
        _id:request.body._id
    }).then((data)=>{
        if(data.deletedCount === 0){
            response.status(404).json({msg: 'Not Found'});
        } else {
            response.status(200).json({msg: 'Deleted'});
        }
    })
}
