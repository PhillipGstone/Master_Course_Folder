const TvShow = require("./tvShowsModel")

// creates a tvShow
exports.createtvshow = async (tvShowObject) => {
    try {
        await TvShow.create(tvShowObject) 
    } catch (error) {
        console.log("error in createtvShow function")
        console.log(error)
    }
}

// List all TvShows
exports.listTvShows = async () => {
    try {
        return await TvShow.find({}) 
    } catch (error) {
        console.log("error in listTvShows function")
        console.log(error)
    }
}

// updates Specified tvShow
exports.updateTvShows = async (tvShowObject, updateTvShowObject) => {
    try {
        return await TvShow.updateOne(tvShowObject, updateTvShowObject)
    } catch (error) {
        console.log("error in updateTvShow function")
        console.log(error)
    }
}

// deletes specific TvShow
exports.deleteTvShow = async (TvShowObject) => {
    try {
        return await TvShow.deleteOne(TvShowObject)
    } catch (error) {
        console.log("error in deleteTvShow function")
        console.log(error)
    }
}

// finds TvShow title
exports.findTvShowTitle = async (titleObject) => {
    try {
        return await TvShow.findOne(titleObject)
    } catch (error) {
        console.log("error in findTvShow function")
        console.log(error)
    }
}

// finds all TvShows containing actor e.g if actor is in multiple TvShows
exports.findTvShowActors = async (actorObject) => {
    try {
        return await TvShow.find(actorObject)
    } catch (error) {
        console.log("error in findTvShowActors function")
        console.log(error)
    }
}