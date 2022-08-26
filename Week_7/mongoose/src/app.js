require("./db/connections");
const mongoose = require("mongoose")
const yargs = require("yargs")

const { createMovie, listMovies, updateMovie, deleteMovie, findMoviesTitle, findMoviesActors } = require("./movie/movieFunctions")
const { createtvshow, listTvShows, updateTvShows, deleteTvShow, findTvShowTitle, findTvShowActors } = require("./tvShows/tvShowsFunctions")

const app = async (yargsObject) => {
    /////////////////////  MOVIES  ///////////////////////
    try {
        // Creates new document requires you to say movies title and actor
        // requires --add --movies --title "movieName" --actor "actorName"
        if(yargsObject.add && yargsObject.movies) { // --add  This the Create in Crud.
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating}) // match the Schema in movieModel 
            console.log("succefully added a movie entry")
            console.log(await listMovies())
        /////////////////////  LIST  ///////////////////////
        } else if (yargsObject.list) { // --list  This the Read in cRud.
            console.log("Displaying all items in list")
            console.log(await listMovies())
        /////////////////////  UPDATE  ///////////////////////
        // Updates specified movie requires you to say movies title and actor
        // node app.js --update --movies --newTitle House --newActor "Jimmy" --title Spooderman --actor "Some Guy" Need to type out all even if only updating actor.
        } else if (yargsObject.update && yargsObject.movies) { // --update  This the Update in crUd.
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
            console.log("Here's the updated list:")
            console.log(await listMovies())
        /////////////////////  DELETE  ///////////////////////
        // Deletes specified movie requires you to say movies title and actor
        // node app.js --delete --movies --title House --actor "Jimmy"  This gets deleted from the database.
        } else if (yargsObject.delete && yargsObject.movies) { // --delete  This the Delete in cruD.
            await deleteMovie({
                title: yargsObject.title, 
                actor: yargsObject.actor
            })
            console.log("Deleting Specified Movie!")
            console.log("Remaining Movies are:")
            console.log(await listMovies())
        /////////////////////  FIND MOVIE TITLE  ///////////////////////
        // Finds movie you specify by using --findMovie --Movies
        // node app.js --findMovie --Movies --title "movieName"
        // node app.js --find --movies --title "movieName"
        } else if ((yargsObject.findMovie && yargsObject.movies) || (yargsObject.find && yargsObject.title)) { // --find
            let findMovie = await findMoviesTitle({title: yargsObject.title})
            console.log("Here are your search results.")
            console.log(await findMovie)
        /////////////////////  FIND MOVIE ACTOR  ///////////////////////
        // Lists all movies cotain actor requires you to do --findActor
        // If actor is in multiple movies it will show all movies containing --findActor
        // e.g If you have an actor in multiple movies for example "Joe" so you would type:
        // node app.js --findActor --actor "actorName"
        // node app.js --find --movies --actor "actorName"
        } else if ((yargsObject.findActor && yargsObject.movies) || (yargsObject.find && yargsObject.actor)) {
            let findActor = await findMoviesActors({actor: yargsObject.actor})
            console.log("Displying all movies specified actor is in.")
            console.log(await findActor)
        } 
        /////////////////////  TVSHOWS  ///////////////////////

        else if (yargsObject.add && yargsObject.tvShows) { // --add --tvshows
            await createtvshow({
                title: yargsObject.title, actor: yargsObject.actor, rating: yargsObject.rating })
                console.log(await listTvShows())
        /////////////////////  LIST  ///////////////////////
        // Lists all tvshows only requires you to do --list --tvshows
        } else if (yargsObject.list) {
            let listTV = await listTvShows()
            console.log("Displaying all items in list:")
            console.log(listTV)
        /////////////////////  UPDATE  ///////////////////////
        // Updates specified tv show. Update Title, Actor, rating.
        // node app.js --update --tvShows --newTitle "TvShow to update to" --newActor "actor to update to" --title "TvShow you updateing" --actor "actor you updateing"
        } else if (yargsObject.update && yargsObject.tvShows) {
            await updateTvShows ({
                title: yargsObject.title,
                actor: yargsObject.actor,
                rating: yargsObject.rating}, 
                {
                title: yargsObject.newTitle,
                actor: yargsObject.newActor,
                rating: yargsObject.newRating
            })
            console.log("Updated Specified tvshows")
            console.log("Here's the updated list:")
            console.log(await listTvShows())
        /////////////////////  DELETE  ///////////////////////
        // Deletes specified tvshows. Delete title, actor.
        // --delete --tvShows --tvshows --title "movieName" --actor "actorName"
        } else if (yargsObject.delete && yargsObject.tvShows) {
            await deleteTvShow({
                title: yargsObject.title,
                actor: yargsObject.actor
            })
            console.log("Deleting Specified tvshows!")
            console.log("Remaining tvshows are:")
            console.log(await listTvShows())
        /////////////////////  FIND TVSHOW TITLE  ///////////////////////
        // Finds TvShow you specify by using --findTvShow 
        // node app.js --findTvShow --tvShows --title "TvShow Name"
        // node app.js --find --movies --title "movieName"
        } else if ((yargsObject.findTvShow && yargsObject.tvShows) || (yargsObject.find && yargsObject.title)) {
            let findTvShow = await findTvShowTitle({title: yargsObject.title})
            console.log("Here are your search results.")
            console.log(await findTvShow)
        /////////////////////  FIND TVSHOW ACTOR  ///////////////////////
        // Lists all TvShows that cotain that actor. Will show all TvShows with that actor in it.  --findActor --tvShows
        // node app.js --findActor --tvShows --actor "actorName"
        // node app.js --find --tvShows --actor "actorName"
        } else if ((yargsObject.findActor && yargsObject.tvShows) || (yargsObject.find && yargsObject.actor)) {
            let findActor = await findTvShowActors({actor: yargsObject.actor})
            console.log("Displying all Tv shows specified actor is in.")
            console.log(await findActor)
        }
        else {
            console.log("incorect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
        await mongoose.disconnect();
    }
}

app(yargs.argv);  // DON'T FORGET TO CALL THE FUNCTION!!!!

// node app.js --add --movies --title "Need for speed" --actor "Tom Jones" --rating 5 
// node app.js --add --tvShows --title "Top Gear" --actor "ricky gervais" --rating 4.5 
