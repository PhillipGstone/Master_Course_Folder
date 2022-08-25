const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({ // new for every time you make a new movie
    title: {
        type: String, // Define it as a string type
        required: true, // This so a title is required
        unique: true, // every entry has to be unique so no 2 spidermans
    },
    actor: {
        type: String,
        defalt: "Not Specified", // this for if not entered anything
    },
    rating: {
        type: Number,
        defalt: "Not Specified",
    }
});
// need ; at the end of func and need , for object syntax

const Movie = mongoose.model("Netflix", movieSchema); // "Netflix" is the name you call your database

module.exports = Movie

//Mongoose is an Object Document Mapping
//organization or structure for a database 
//Essentially, mongoose is a library that allows you to pass documents to a DBMS
//defining the structure of your documents and the types of data you're storing
//Everything in Mongoose starts with a Schema. 
//Each schema maps to a MongoDB collection and 
//defines the shape of the documents within that collection.
