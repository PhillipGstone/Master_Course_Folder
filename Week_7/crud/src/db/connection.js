require("dotenv").config();
const { MongoClient } = require('mongodb') 

const client = new MongoClient(process.env.MONGO_URI)

const connection = async () => {
    try {
        // the client method gives us access to the mongodb methods
        await client.connect()
        console.log("connected to mongo")
        // connect to our mongodb culster 
        const db = client.db("Movies")
        return db.collection("Movie")
        // creates the indivudal collections inside our databse
        // returns the collections so we can perform CRUD operations 
    } catch (error) {
        console.log(error)
    }
}

module.exports = { client, connection}