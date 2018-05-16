const mongoCollections = require("../config/mongoCollections");
const games = mongoCollections.games;
const uuid = require('node-uuid');

//below TODO
let exportedMethods = {


     getAllGames() {
        return games().then((gamesCollection) => {
            
            return gamesCollection.find({}).toArray();
        });
    },
    getHotGames() {
        return games().then((gamesCollection) => {
           var skipNumber =  parseInt(Math.random()*10);
            var limitNumber =  parseInt(Math.random()*12+8);
            var ignRate = parseInt(Math.random()*9);
            
            return gamesCollection.find({ignRate:{$gt:ignRate}}).limit(limitNumber).skip(skipNumber).toArray();
        });
    },
    feedGameByPage(pageNumber){
        return games().then((gamesCollection) => {
           // console.log(pageNumber);
            return gamesCollection.find({}).limit(10).skip((pageNumber-1)*10).toArray();
        });

    },
   
    getGameById(id) {
        return games().then((gamesCollection) => {
            return gamesCollection.findOne({ _id: id }).then((game) => {
                if (!game) throw "Game not found";
                return game;
            });
        });
    },
    getGameByName(gameName) {
        return games().then((gamesCollection) => {
         
            return gamesCollection.findOne({"name":gameName}).then((game) => {
                if (!game) throw "Game not found";
                return game;
            });
        });
    },
    getGameByCustomize(inputName,inputMonth,inputYear,inputDeveloper,inputPublisher,inputGeners){
           
            var filterName = inputName;
            if(filterName!="")
            {
                filterName = filterName;
                filterName.replace(/[ /d]/g, '');
                
            }

          
            if(inputMonth!=null&&inputYear!=null){
            //TODO
            }


     console.log("dataGet",inputGeners);
       
            //Not completed!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        


        return games().then(async(gamesCollection) => {
            
            var foundDocs = []; 
            
            if(inputGeners==null)foundDocs = await gamesCollection.find({name:{$regex:filterName,$options:'i'},developer:{$regex:inputDeveloper},publisher:{$regex:inputPublisher}}).toArray();
            else foundDocs = await gamesCollection.find({name:{$regex:filterName,$options:'i'},developer:{$regex:inputDeveloper},publisher:{$regex:inputPublisher},geners:{$in: inputGeners}}).toArray();
           
            var finalDocs = [];
           
                
                
                if(foundDocs!=null&&inputGeners!=null){
                    for(var curDoc in foundDocs){
                         
                            var curGeners = foundDocs[curDoc].geners;
                            for(var curGener in curGeners){
                               if( inputGeners.indexOf(curGeners[curGener])>-1){
                                   finalDocs.push(foundDocs[curDoc]);
                                   break;
                               }
        
        
                            }
        
                         }
                     }else if(foundDocs!=null&&inputGeners==null){

                            finalDocs = foundDocs;
                     }
                    // console.log("filterName","+"+filterName+finalDocs);


                        return finalDocs;

          
        });
            


    },
 
    addGame(name,description,ignRate,releaseDate,developer,publisher,geners) {

            if(!name) return "You must input a name!";
            if(!description) return "you must input a description!";

            if(!ignRate) return "you must add a ignRare!";
            if(ignRate.constructor != Number) "the type of releaseDate must be number";

            if(!releaseDate) return "you must give a releaseDate";
            if(releaseDate.constructor != Date) "the type of releaseDate must be date";

            if(!developer) return "you must name the developer";
            if(!publisher) return "you must name the publisher";
            
            if(!geners) return "you must input an geners";
            if(geners.constructor != Array) "the type of geners must be array";

            
            
            var _id = uuid.v4();


        return games().then((gamesCollection) => {
            let newGame = {
                _id: _id,
                name: name,
                description: description,
                ignRate: ignRate,
                releaseDate: releaseDate,
                developer: developer,
                publisher: publisher,
                geners: geners,
                comments:[]
                          
            };

            return gamesCollection.insertOne(newGame).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getGameById(newId);
            });
        });
    },
    removeGame(id) {
        return games().then((gamesCollection) => {
            return gamesCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete game with id of ${id}`)
                }
            });
        });
    },

   updateGameInformation(id,name,description,ignRate,releaseDate,developer,publisher,genres,comments) {
        

            if(!id) return "no game id!";
            if(!name) return "You must input a name!";
            if(!description) return "you must input a description!";

            if(!ignRate) return "you must add a ignRare!";
            if(ignRate.constructor != Number) return "the type of ignRate must be number";

            if(!releaseDate) return "you must give a releaseDate";
            if(releaseDate.constructor != Date) return"the type of releaseDate must be date";

            if(!developer) return "you must name the developer";
            if(!publisher) return "you must name the publisher";
            
            if(!genres) return "you must input an geners";
            if(genres.constructor != Array) return "the type of genres must be array";

            

console.log("updateGameInformation")

    return games().then((gamesCollection) => {
        return this.getGameById(id)
            .then((currentGame) => {
            

                var updates = {$set: {name: name, description: description,ignRate: ignRate,releaseDate: releaseDate, developer:developer,publisher: publisher,geners: genres}};

                return gamesCollection.updateOne({ _id: id }, updates).then((result) => {
                    return this.getGameById(id);
                });
            });
    });

},

addComment(gameId,poster,comment,rate){
    
    if(!gameId) return "no game id!";

    if(!poster) return "you must specify the poster";
  


    if(!comment) return "you must input a comment!";
    
    if(!rate) return "you must add a rate!";
    if(rate.constructor != Number) "the type of rate must be number";

    



    return games().then((gamesCollection) => {
        return this.getGameById(gameId)
            .then((currentGame) => {

                var _id = uuid.v4();
                var curDate = new Date();
                var newComment = {
                    _id: _id,
                    poster: poster.profile,
                    createAt: curDate,
                    comment: comment,
                    rate: rate

                }
        

                var updates = {$addToSet: {comments: newComment}};

                return gamesCollection.updateOne({ _id: gameId}, updates).then((result) => {
                    return newComment;
                });
            });
    });


}

}
 //below TODO
 //delete comment  
  
module.exports = exportedMethods;