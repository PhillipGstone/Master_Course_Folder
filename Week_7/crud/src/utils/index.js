class Movie {
    constructor(title, actor = "Not specified"){
        this.title = title
        this.actor = actor
    } 
    async add(collection) {
        //Create CRUD operation
        //insertOne is a mongoDB method we access once we have made the connection to our cluster
        await collection.insertOne(this)
    } 
    async list (collection) {
        //find returns all our documents inside our collectiion by passing the blank object
        return await collection.find({}).toArray();
    }
    // TODO: ADD UPDATE AND DELETE METHODS LIKE THE ONES ABOVE.  
    // FIND THE APPROPRIATE MONGO METHODS TO USE HERE IN THE DOCUMENTATION https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/ 
}

module.exports = Movie