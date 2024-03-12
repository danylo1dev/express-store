require("dotenv").config();
const mongodb = require("mongodb");
let _db;
const mongoConnect = (callback) => {
  const MongoClient = mongodb.MongoClient;

  MongoClient.connect(process.env.MONGO_URL)
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "Database dosen`t connected";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
