
require('../db')
const mongoose = require('mongoose')


celebStuff = [

    {
        name: "Charlie Sheen",
        occupation: "janitor",
        catchPhrase: "hey hey hey"
    },
    {
        name: "Charlie Murphy",
        occupation: "pilot",
        catchPhrase: "let's go"
    },
    {
        name: "Charlie Put",
        occupation: "singer",
        catchPhrase: "alright alright alright"
    }
    


]



let CelebrityModel = require("../models/Celeb.model");

CelebrityModel.create(celebStuff)
.then(() => {
    console.log('Data added')
    mongoose.connection.close();
})
.catch(() => {
    console.log('Error while adding data')
})