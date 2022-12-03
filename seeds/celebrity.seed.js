// Iteration #1
const mongoose = require("mongoose");

//1. Connect to DB
require("../db");

// 2. Adding Data
const CelebrityModel = require("../models/Celebrity.model");

const celebrityData = [
  {
    name: "Ryan Reynolds",
    occupation: "Actor",
    catchPhrase: "Bad Deadpool... Good Deadpool!",
  },
  {
    name: "Ronaldo",
    occupation: "Footballer",
    catchPhrase: "If you think you're perfect already, then you never will be.",
  },
  {
    name: "Kelly Wakasa",
    occupation: "YouTuber",
    catchPhrase: "Do What Excites",
  },
];

CelebrityModel.create(celebrityData)
  .then(() => {
    console.log("Celelbrities added");
  })
  .catch(() => {
    console.log("Seeding failed");
  })
  //3. Closing
  .finally(() => {
    // 3. Closing the DB connection
    mongoose.connection.close();
    console.log("Connection closed");
  });
