const yargs = require("yargs")
const Movie = require("./utils") 

// console.log(yargs.argv.actor)  // this is an object so use dot notation.
// can add own key vales pairs by  --title spiderman --actor Dave  .actor to only show the vale of the key actor.
    // if (yargs.argv.add) {
    //     console.log("it's " + yargs.argv.title) // or `its ${yargs.argv.title}`
    //     console.log("it's " + yargs.argv.actor)
    // } else {
    //     console.log("Not True")
    // }
// --add --title Spiderman.  --add --title Spiderman --actor Dave

// node app.js --add --title Spiderman --actor "Dave Smith"

console.log(yargs.argv)

const app = (yargsObj) => {
    try {
        //check if something is true
        if (yargs.argv.add) {
            //call your movie class 
            //log your movie array
            console.log(`It's ${yargs.argv.title[0]} and the actor ${yargs.argv.actor[0]}. It has a rating of ${yargs.argv.rating[0]}.`)
            console.log(`It's ${yargs.argv.title[1]} and the actor ${yargs.argv.actor[1]}. It has a rating of ${yargs.argv.rating[1]}.`)
            console.log(`It's ${yargs.argv.title[2]} and the actor ${yargs.argv.actor[2]}. It has a rating of ${yargs.argv.rating[2]}.`)
        } else {
            console.log("incorrect command")
        }

    } catch (error) {
        console.log(error)
    }
} 

// node app.js --add --title Spiderman --actor Dave --rating 4 --title Batman --actor John --rating 5 --title Ghost --actor "Jim Bob" --rating 2.5

app(yargs.argv)
