const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const uuid = require('node-uuid');
var crypto = require('crypto');//use to create hashed password
const bcrypt = require("bcrypt");
const saltRounds = 6;

let exportedMethods = {
    getAllUsers() {
        return users().then((usersCollection) => {
            return usersCollection.find({}).toArray();
        });
    },
   
    getUserById(id) {
        if(!id) return "You must provide the id!";

        return users().then((usersCollection) => {
            return usersCollection.findOne({ _id: id }).then((user) => {
                if (!user) throw "User not found";
                return user;
            });
        });
    },
    getUserByName(username) {

        if(!username) throw "You must provide a user name";
           
        return users().then((usersCollection) => {
           
            return usersCollection.findOne({ "profile.name": username }).then((user) => {
               
                if (!user) throw "Invalid User Information";
                return user;
            });
        });

    },
    async addUser(password,role,name,preference) {
        if(!name) return "you must input a name!";
        if(name.constructor!=String) return "the name should be string";

        if(!role) return "you must specify the role";
        if(role.constructor!=String) return "the role should be string";
            
        
        if(!password) return "You must input a password!";      
        if(password.constructor!=String) return "the password should be string";
           


           
            
        if(!preference) return "you must add a preference!";
           
        if(preference.constructor!=Array) return "preference should be array";
            
            var _id = uuid.v4();


           
            var hashedPassword=  await bcrypt.hash(password, saltRounds);//create hashed password


        return users().then((usersCollection) => {
            let newUser = {
                _id: _id,
                
                hashedPassword: hashedPassword,
                role:role,
                profile:{
                    name: name,
                    preference: preference,
                    _id: _id
                }
                          
            };
                    
            return usersCollection.insertOne(newUser).then((newInsertInformation) => {
               return newInsertInformation;
            }).then((newId) => {
                //console.log("addedUser",this.getUserById(newId));
            
                return true;
            });
            
         
        });
    },
     removeUser(id) {

        if(!id) return "You must provide the id!";

        return users().then((usersCollection) => {
            return usersCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    throw (`Could not delete user with id of ${id}`)
                }
            });
        });
    },
    async updateUser(id,password,role,name,preference) {
        if(!id) return "You must provide the id!";
        
        if(!password) return "You must input a password!";
        if(password.constructor!=String) return "the password should be string";
       
        if(!role) return "you must specify the role";
        if(role.constructor!=String) return "the role should be string";


        if(!name) return "you must input a name!";
        if(name.constructor!=String) return "the name should be string";

        if(!preference) return "you must add a preference!";
        if(preference.constructor!=Array) return "preference should be array";
        
        var hashedPassword=  await bcrypt.hash(password, saltRounds);//create hashed password

        return users().then((usersCollection) => {
            return this.getUserById(id)
                .then((currentUser) => {

                 
                  

                    let updatedUser = {
                        $set: {
                    
                        hashedPassword: hashedPassword,
                        role:role,
                        profile:{
                            name: name,
                            preference: preference,
                            _id: id
                        }
                    }
                                  
                    };

                    return usersCollection.updateOne({ _id: id }, updatedUser).then((result) => {
                        return this.getUserById(id);
                    });
                });
        });
    },
}

module.exports = exportedMethods;

