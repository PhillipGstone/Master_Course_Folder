const movieArr = []

class Movie {  // has to start with capital. 
    constructor(title, actor="Not Specified"){
        this.title = title // this is what's happning now.
        this.actor = actor // this.actor = actor makes it so can just do actor and not have to do this.actor everytime.
    }
    add() {
        movieArr.push(this)
    }
    list() {
        return movieArr
    }
} 

module.exports = Movie

