const MongoClient = require("mongodb").MongoClient;
const settings = {
  mongoConfig: {
    serverUrl: "mongodb://localhost:27017/",
    database: "game-website"
  }
};
var options = { 
  server: { 
      socketOptions: { 
          keepAlive: 1, 
          connectTimeoutMS: 30000 
      } ,
      reconnectTries:30,
      reconnectInterval:3000
  }, 
  replset: { 
      socketOptions: { 
          keepAlive: 1, 
          connectTimeoutMS: 30000 
      } 
  } 
}; 


const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async  () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl,options);
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;

};

