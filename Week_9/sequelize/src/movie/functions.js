const Movie = require("./table")

exports.addMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        return await Movie.findAll()
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovies = async (movieObject, updateMovieObject) => {
    try {
        await Movie.upsert(movieObject, updateMovieObject);
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovies = async (yargsObject) => {
    try {
        await Movie.destroy({
            where: { title: yargsObject.title }
        })
    } catch (error) {
        console.log(error)
    }
}
