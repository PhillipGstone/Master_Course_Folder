require("./db/connections");
const mongoose = require("mongoose")
const yargs = require("yargs")

const { createMovie, listMovies } = require("./movie/movieFunctions")
// , updateMovie

const app = async (yargsObject) => {
    try {
        if(yargsObject.add) {
            //
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating}) // match the Schema in movieModel
            console.log("success!!")
            console.log(await listMovies())
        } else if (yargsObject.list) {
            //
            console.log(await listMovies())
        // } else if (yargsObject.update) {
        //     //
        //     await updateMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating})
        //     console.log(await listMovies())
        } else {
            console.log("incorect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
        await mongoose.disconnect();
    }
}

app(yargs.argv);  // DON'T FORGET TO CALL THE FUNCTION!!!!