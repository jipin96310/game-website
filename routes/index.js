const express = require("express");
const userRoutes = require("./users");
const gameRoutes = require("./games");
const router = express.Router();
const path = require("path");


const data = require("../data");
const usersData = data.users;
const gamesData = data.games;

const constructorMethod = app => {
  

  app.use("/main",async (req, res) => {
   
   
    
    


  if (req.cookies.userName) {
    let user = usersData.getUserByName(req.cookies.userName)
    user.then(function(userob){
      let isAdmin = (userob.role == "admin"?true:false);
      res.render("layouts/index",{
  
          noSigned: false,
          isAdmin: isAdmin,
          userName:req.cookies.userName,
         
          
  
      });

    })  

  } else {
    res.render("layouts/index",{

      noSigned: true,
      isAdmin: false,
      
    
    

  })};
    
  })

  app.use("/users", userRoutes);
  app.use("/games",gameRoutes);
  
  app.use("*", (req, res) => {
     // console.log(req);
      res.redirect("/main")
  
  });
};




module.exports = constructorMethod;