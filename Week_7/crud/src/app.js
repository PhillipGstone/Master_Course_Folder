const yargs = require("yargs") 
const {client, connection} = require("./db/connection") 
const Movie = require("./utils")

const app = async (yargsObject) => {
    const collection = await connection()
    try {
        if(yargsObject.create) {
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            //calling our add method to perform to create CRUD operation
            await movie.add(collection)
            //logging our movies collection
            console.log(await movie.list(collection))
        } else {
            console.log("Incorrect command");
        }
        await client.close();
        //TODO: CREATE STATEMENTS TO HANDLE UPDATE AND DELETE. E.G
        //if (yargsObject.update) {

        //}
    } catch (error) {
        console.log(error)
        await client.close()
    }
} 

app(yargs.argv)