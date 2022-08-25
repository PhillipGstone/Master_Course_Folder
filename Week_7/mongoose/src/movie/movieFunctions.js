const Movie = require("./movieModel")

// creates movie
exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}

// List all movies
exports.listMovies = async () => {
    try {
        return await Movie.find({}) 
    } catch (error) {
        console.log(error)
    }
}

// updates Specified Movie
exports.updateMovie = async (movieObject, updateMovieObject) => {
    try {
        return await Movie.updateOne(movieObject, updateMovieObject)
    } catch (error) {
        console.log("error in updateMovie function")
        console.log(error)
    }
}

// deletes specific movie
exports.deleteMovie = async (movieObject) => {
    try {
        return await Movie.deleteOne(movieObject)
    } catch (error) {
        console.log("error in deleteMovie function")
        console.log(error)
    }
}

// finds movie title
exports.findMoviesTitle = async (titleObject) => {
    try {
        return await Movie.findOne(titleObject)
    } catch (error) {
        console.log("error in findMovie function")
        console.log(error)
    }
}

// finds all movies containing actor e.g if actor is in multiple movies
exports.findMoviesActors = async (actorObject) => {
    try {
        return await Movie.find(actorObject)
    } catch (error) {
        console.log("error in findMoviesActors function")
        console.log(error)
    }
}