require("./db/connections");
const mongoose = require("mongoose")
const yargs = require("yargs")

const { createMovie, listMovies, updateMovie, deleteMovie, findMoviesTitle, findMoviesActors } = require("./movie/movieFunctions")

const app = async (yargsObject) => {
    try {
        // Creates new document requires you to say movies title and actor
        // requires --add --title <movieName> --actor <actorName>
        if(yargsObject.add) { // --add  This the Create in Crud.
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating}) // match the Schema in movieModel 
            console.log("succefully added a movie entry")
            console.log(await listMovies())
        } else if (yargsObject.list) { // --list  This the Read in cRud.
            console.log("Displaying all items in list")
            console.log(await listMovies())
        // Updates specified movie requires you to say movies title and actor
        // node app.js --update --newTitle House --newActor "Jimmy" --title Spooderman --actor "Some Guy" Need to type out all even if only updating actor.
        } else if (yargsObject.update) { // --update  This the Update in crUd.
            await updateMovie (
                {
                title: yargsObject.title, 
                actor: yargsObject.actor,
                rating: yargsObject.rating},
                {
                title: yargsObject.newTitle,
                actor: yargsObject.newActor,
                rating: yargsObject.newRating,
                })
            console.log("Updated Specified Movie.")
            console.log(await listMovies())
        // Deletes specified movie requires you to say movies title and actor
        // node app.js --delete --title House --actor "Jimmy"  This gets deleted from the database.
        } else if (yargsObject.delete) { // --delete  This the Delete in cruD.
            await deleteMovie({
                title: yargsObject.title, 
                actor: yargsObject.actor
            })
            console.log("Deleting Specified Movie!")
            console.log("Remaining Movies are:")
            console.log(await listMovies())
        // Finds movie you specify by using --findMovie 
        // node app.js --findMovie --title <movieName>
        // node app.js --find --title <movieName>
        } else if ((yargsObject.findMovie) || (yargsObject.find && yargsObject.title)) { // --find
            let findMovie = await findMoviesTitle({title: yargsObject.title})
            console.log("Here are your search results.")
            console.log(await findMovie)
        // Lists all movies cotain actor requires you to do --findActor
        // If actor is in multiple movies it will show all movies containing --findActor
        // e.g If you have an actor in multiple movies for example "Joe" so you would type:
        // node app.js --findActor --actor <actorName>
        // node app.js --find --actor <actorName>
        } else if ((yargsObject.findActor) || (yargsObject.find && yargsObject.actor)) {
            let findActor = await findMoviesActors({actor: yargsObject.actor})
            console.log("Displying all movies specified actor is in.")
            console.log(await findActor)
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

// node app.js --add --title "Need for speed" --actor "Tom Jones" --rating 5 