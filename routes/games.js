

const express = require("express");
const router = express.Router();
const data = require("../data");
const gamesData = data.games;
const usersData = data.users;


router.get("/category", async (req, res) => {
  if (req.cookies.userName) {
    let user = usersData.getUserByName(req.cookies.userName)
 
    user.then(function(userob){
      let isAdmin = (userob.role == "admin"?true:false);

      

      res.render("layouts/categories",{
  
          noSigned: false,
          isAdmin: isAdmin,
          userName: req.cookies.userName
  
      });

    })  

  } else {
    res.render("layouts/categories",{

      noSigned: true,
      isAdmin: false
    

  })};

});










router.get("/advanceSearch", async (req, res) => {
  if (req.cookies.userName) {
    let user = usersData.getUserByName(req.cookies.userName)
 
    user.then(function(userob){
      let isAdmin = (userob.role == "admin"?true:false);

      

      res.render("layouts/search",{
  
          noSigned: false,
          isAdmin: isAdmin,
          userName: req.cookies.userName,
          curUser:userob.profile.name
  
      });

    })  

  } else {
    res.render("layouts/search",{

      noSigned: true,
      isAdmin: false
    

  })};



});




router.get("/explore", async (req, res) => {
  if (req.cookies.userName) {
    let user = usersData.getUserByName(req.cookies.userName)
 
    user.then(function(userob){
      let isAdmin = (userob.role == "admin"?true:false);

     // console.log("explore-router",userob.profile.name);

      res.render("layouts/explore",{
  
          noSigned: false,
          isAdmin: isAdmin,
          userName: req.cookies.userName,
          curUser:userob.profile.name
  
      });

    })  

  } else {
    res.render("layouts/explore",{

      noSigned: true,
      isAdmin: false,
    

  })};



});
router.get("/getHotGames", async (req, res) => {
 
  try {
    const gamesList =  gamesData.getHotGames();
    
    gamesList.then(function(games){
    // 
      res.json(games);
    })
 
 
  } catch (e) {
    res.status(500).send();
    console.log("getHotgames",e)
  }
});





router.get("/getAllGames", async (req, res) => {
  console.log("start to get game")
  try {
    const gamesList =  gamesData.getAllGames();
    
    gamesList.then(function(games){
    // 
      res.json(games);
    })
 
 
  } catch (e) {
    res.status(500).send();
    console.log("getAllgames",e)
  }
});
router.get("/feedGame/:pageNumber", async (req, res) => {

  var pageNumber = req.params.pageNumber;
  try {
    //TODO
    const gamesList =  gamesData.feedGameByPage(pageNumber);
    
    gamesList.then(function(games){
  
      res.json(games);
    })
    //const gamesList = await gamesData.getGameByName("Dragon Ball Z");
 
  } catch (e) {
    res.status(500).send();
    console.log("getAllgames",e)
  }
});


router.get("/getGame/:name", async (req, res) => {
  try {
   // console.log(req.params.name);
    const game = await gamesData.getGameByName(req.params.name);
    //console.log("game!!!",game);
    res.json(game);
  } catch (e) {
   // console.log(e);
    res.status(404).json({ message: "Game not found" });
  }
});
router.get("/getGameById/:id", async (req, res) => {
  try {
   // console.log(req.params.name);
    const game = await gamesData.getGameById(req.params.id);
    //console.log("game!!!",game);
    res.json(game);
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: "Game not found" });
  }
});






router.post("/addGame", async (req, res) => {
 
  const postGame = req.body;
 
  try{
    const {inputName,inputDescription,inputRate,inputDay,inputMonth,inputYear,inputDeveloper,inputPublisher,geners} = postGame;

    //console.log(inputName+","+inputRate+","+inputDay+","+inputMonth+","+inputYear+","+inputDeveloper+","+inputPublisher+","+geners+","+inputDescription);

    var mixDate = new Date(inputYear,inputMonth-1,inputDay);
   

    const newGame = await gamesData.addGame(inputName,inputDescription,inputRate,mixDate,inputDeveloper,inputPublisher,geners);
    res.json(newGame);

  }catch(e){
    res.status(500).json({ error: e });

   
  }
});


// find the specific game, then add the comment
router.post("/addComment", async (req, res) => {
 


    const postComment = req.body;
   //use name to get poster
   
    try{
      const {gameId,poster,commentContent,rateNumber} = postComment;
      var userObject = await usersData.getUserByName(poster);

      if(!rateNumber)throw "no rate provide";


     // console.log(commentContent);
      const newComment = await gamesData.addComment(gameId,userObject,commentContent,rateNumber);
      res.json(newComment);
    }catch(e){
      
      console.log(e);
      res.status(500).json({ error: e });

    }
  });





router.post("/updateGameInformation/:id", async (req, res) => {
  const updatedData = req.body;
  var gameComments = [];

  try {
    await gamesData.getGameById(req.params.id);
    gameComments = gamesData.comments;
    
  } catch (e) {
    console.log("game not found");
    res.status(404).json({ error: "Game not found" });
  }

  try {

    var releaseDate = new Date(updatedData.inputYear,updatedData.inputMonth,updatedData.inputDay);
    var ignRate = parseFloat(updatedData.inputRate)
    const updatedGame = await gamesData.updateGameInformation(req.params.id,updatedData.inputName,updatedData.inputDescription,ignRate,releaseDate,updatedData.inputDeveloper,updatedData.inputPublisher,updatedData.geners,gameComments);
    console.log(updatedGame);
    
    res.json(updatedGame);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e});
  }
});

    //TODO BELOW

router.delete("/deleteGame/:id", async (req, res) => {
  try {
    await gamesData.getGameById(req.params.id);
    
  } catch (e) {
    console.log(e,"not found")
    res.status(404).json({ error: "Game not found" });
  }
  try {
    await gamesData.removeGame(req.params.id);
    res.json("success");
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e });
  }
});

router.get("/renderView/:inputName", async (req, res) => {
 
  const gameName = req.params.inputName;
  console.log("start render");
 
  try{

    
    if (req.cookies.userName) {
      let user = usersData.getUserByName(req.cookies.userName)
   
      user.then(function(userob){
        let isAdmin = (userob.role == "admin"?true:false);
  
       // console.log("explore-router",userob.profile.name);
  
        res.render("layouts/gamesView",{
    
            noSigned: false,
            isAdmin: isAdmin,
            userName: req.cookies.userName,
            curUser:userob.profile.name,
            curGames:gameName
    
        });
  
      })  
  
    } else {
      res.render("layouts/gamesView",{
  
        noSigned: true,
        isAdmin: false,
        curGames:gameName
      
  
    })};
    
    
    // res.json(foundGames);
  

  }catch(e){
  console.log("error",e)
  }
});



router.post("/gamesView", async (req, res) => {
 
  const gameName = req.body.inputName;
  
 
  try{

    
    if (req.cookies.userName) {
      let user = usersData.getUserByName(req.cookies.userName)
   
      user.then(function(userob){
        let isAdmin = (userob.role == "admin"?true:false);
  
       // console.log("explore-router",userob.profile.name);
  
        res.render("layouts/gamesView",{
    
            noSigned: false,
            isAdmin: isAdmin,
            userName: req.cookies.userName,
            curUser:userob.profile.name,
            curGames:gameName
    
        });
  
      })  
  
    } else {
      res.render("layouts/gamesView",{
  
        noSigned: true,
        isAdmin: false,
        curGames:gameName
      
  
    })};
    
    
    // res.json(foundGames);
  

  }catch(e){
  console.log("error",e)
  }
});


router.post("/categorySearch", async (req, res) => {
 
  
  
 
  try{
    var inputCategory = req.body.curGameName;
    var inputPage = req.body.curPage;
    //console.log(inputCategory)
    var categoryArray = [];
    categoryArray.push(inputCategory)

    const foundGames = await gamesData.getGameByCustomize("","","","","",categoryArray);
    sliceGames = foundGames;

   
    if(inputPage!=-1){

      
     
     sliceGames=foundGames.slice(inputPage*10,inputPage*10+10);
    
    }
    
     res.json(sliceGames);
  

  }catch(e){
  console.log("error",e)
  }
});






router.post("/basicSearch", async (req, res) => {
 
  
  
 
  try{
    var inputName = req.body.curGameName;
    var inputPage = req.body.curPage;
    

    const foundGames = await gamesData.getGameByCustomize(inputName,"","","","",null);
    sliceGames = foundGames;

   
    if(inputPage!=-1){

      
     
     sliceGames=foundGames.slice(inputPage*10,inputPage*10+10);
    
    }
    
     res.json(sliceGames);
  

  }catch(e){
  console.log("error",e)
  }
});







router.post("/advanceSearch", async (req, res) => {
 
  const postGame = req.body;
  console.log("data",postGame);
 
  try{
    var inputName = req.body.inputName;
    var inputMonth = req.body.inputMonth;
    var inputYear = req.body.inputYear;
    var inputDeveloper = req.body.inputDeveloper;
    var inputPublisher = req.body.inputPublisher;
    var inputGeners = (!req.body.geners)?null:req.body.geners;

      console.log(inputName+inputMonth+inputYear+inputDeveloper+inputPublisher+inputGeners);

    const foundGames = await gamesData.getGameByCustomize(inputName,inputMonth,inputYear,inputDeveloper,inputPublisher,inputGeners);
    
  // console.log("founded",foundGames);

 
    
     res.json(foundGames);
  

  }catch(e){
  console.log("error",e)
  }
});




router.get("/categoryView/:category", async (req, res) => {
 
  const gameCategory = req.params.category;
  
 
  try{

    
    if (req.cookies.userName) {
      let user = usersData.getUserByName(req.cookies.userName)
   
      user.then(function(userob){
        let isAdmin = (userob.role == "admin"?true:false);
  
     
  
        res.render("layouts/gamesView-category",{
    
            noSigned: false,
            isAdmin: isAdmin,
            userName: req.cookies.userName,
            curUser:userob.profile.name,
            curCategory:gameCategory
    
        });
  
      })  
  
    } else {
      res.render("layouts/gamesView-category",{
  
        noSigned: true,
        isAdmin: false,
        curCategory:gameCategory
      
  
    })};
    
    
    // res.json(foundGames);
  

  }catch(e){
  console.log("error",e)
  }
});
module.exports = router;