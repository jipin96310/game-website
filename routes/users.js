const express = require("express");
const router = express.Router();
const data = require("../data");
const usersData = data.users;
const gamesData = data.games;

const cookieParser = require("cookie-parser");

const bcrypt = require("bcrypt");
const saltRounds = 6;



router.post("/signin", async (req, res) => {
 
  let isValid = false;
 
  
  try {
  
    
    let username = req.body.name;
    let password = req.body.password;

    console.log(username,password);
    let user =  await usersData.getUserByName(username);
    
    

    isValid = await bcrypt.compare(password, user.hashedPassword);
  

      if(isValid){
        
        res.cookie("userName", username, {});
        res.redirect("/main")

      }else{
        res.render("layouts/index",{
        error: "inValid Name",
        isAdmin:false,
        noSigned:true,
     
        })
        console.log("invalid")
      }

  } catch (e) {
    res.render("layouts/index",{
      error: e,
      isAdmin:false,
      noSigned:true,
     
      })
  }


});
router.get("/signup", async (req, res) => {
 
 res.render("layouts/register",{
    noSigned:true,
    isAdmin: false

 });


});





router.get("/signout",async (req, res) => {
  

  
  res.clearCookie("userName");

  res.render("layouts/index",{
     noSigned:true,
     isAdmin: false,
    
 
  });
 
 
 })


router.get("/getAllUsers", async (req, res) => {
  try {
    const usersList = await usersData.getAllUsers();
    console.log(usersList)
    res.json(usersList);
  } catch (e) {
    res.status(500).send();
    console.log(e)
  }
});


router.get("/getUser/:id", async (req, res) => {
  try {
    const user = await usersData.getUserById(req.params.id);
    res.json(user);
  } catch (e) {
    res.status(404).json({ message: "User not found" });
  }
});


router.post("/addUser", async (req, res) => {
 
const postUser = req.body;
 console.log(postUser)
  try{
    var {name,password,preference} = postUser;
   
   // let preferenceArray = preference.split(',');
   if(preference.constructor!=Array){
      let temp = [];
      temp.push(preference);
      preference = temp;


   }

    const newUser = await usersData.addUser(password,"user",name,preference);
    
   
    if(newUser===true){


      
       res.cookie("userName", name, { });
       res.redirect("/main")

    }
    

  }catch(e){
    //res.status(500).json({ error: e });
    console.log(e);
        res.redirect("/main")
  }
});



router.post("/addNormalUser", async (req, res) => {
 
  const postUser = req.body;
   console.log(postUser)
    try{
      var {name,password,preference} = postUser;
     
     // let preferenceArray = preference.split(',');
     if(preference.constructor!=Array){
        let temp = [];
        temp.push(preference);
        preference = temp;
  
  
     }
  
      const newUser = await usersData.addUser(password,"user",name,preference);
      
     
      res.json(newUser)
      
  
    }catch(e){
      //res.status(500).json({ error: e });
      console.log(e);
          res.redirect("/main")
    }
  });
 
router.post("/updateUser/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    await usersData.getUserById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "User not found" });
    console.log(e);
  }
  
  try {
    const updatedUser = await usersData.updateUser(req.params.id, updatedData.password,"user",updatedData.name,updatedData.preference);
    res.json(updatedUser);
  } catch (e) {
    res.status(500).json({ error: e});
    console.log(e);
  }
});



router.delete("/deleteUser/:id", async (req, res) => {
  try {
    await usersData.getUserById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "User not found" });
  }
  try {
    await usersData.removeUser(req.params.id);
    res.json("success");
  } catch (e) {
    res.status(500).json({ error: e });
  
  }
});

router.get("/adminMode", async (req, res) => {
  if (req.cookies.userName) {
    let user = usersData.getUserByName(req.cookies.userName)
 
    user.then(function(userob){
      let isAdmin = (userob.role == "admin"?true:false);

      

      res.render("layouts/admin",{
  
          noSigned: false,
          isAdmin: isAdmin,
          userName: req.cookies.userName
  
      });

    })  

  } else {
    res.render("layouts/admin",{

      noSigned: true,
      isAdmin: false
    

  })};



});


module.exports = router;