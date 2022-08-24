require("./db/connections");
const mongoose = require("mongoose")
const yargs = require("yargs")

const { createMovie, listMovies } = require("./movie/movieFunctions")

const app = async (yargsObject) => {
    try {
        if(yargsObject.add) {
            //
            await createMovie({title: yargsObject.title, acrtor: yargsObject.actor}) // match the Schema in movieModel
            console.log("success!!")
            console.log(await listMovies())
        } else if (yargsObject.list) {
            //
            console.log(await listMovies())
        } else {
            console.log("incorect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
        await mongoose.disconnect();
    }
}