require("dotenv").config();
const mongoose = require("mongoose")

const connection = async () => { // use async to connect to database
    try {
        await mongoose.connect(process.env.MONGO_URI) // connect to our env with our passward and stuff in it
        console.log("Mongo is connected")
    } catch (error) {
        console.log(error)
    }
}

connection()