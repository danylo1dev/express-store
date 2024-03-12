require("dotenv").config();
const mongodb = require("mongodb");

const mongoConnect = (callback) => {
  const MongoClient = mongodb.MongoClient;

  MongoClient.connect(process.env.MONGO_URL)
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
