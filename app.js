
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');


const app=express();
const port = process.env.PORT||8080;

//
const basicAdminRoute = require("./Router/basicAdminRoute");
const adminRoute = require("./Router/adminRoute");
const bookRoute = require("./Router/bookRoute");
const memberRoute = require("./Router/memberRoute");
const employeeRoute = require("./Router/employeeRoute");


//connected database
mongoose.set("strictQuery" , true);
mongoose.connect("mongodb://127.0.0.1:27017/Books")
        .then(()=>{
            console.log("DB connected");
            app.listen(port,()=>{
              console.log("I am Listening " + port);
            });//listen
        })
        .catch(error=>{
            console.log("Db Problem "+error);
        })


// Set up Morgan middleware to log HTTP requests
app.use(morgan("tiny"));

//to get data from postman
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// all of router uses in project
app.use(basicAdminRoute);
app.use(adminRoute);
app.use(bookRoute);
app.use(memberRoute);
app.use(employeeRoute);


//Not FOUND
app.use((request,response)=>{
  response.status(404).json({msg : "Middleware not found"});
});

//Error MiddleWare
app.use((error,request,response,next)=>{   //Function.length
  response.status(error.status || 500).json({error:error.toString() || "Error"});
})
