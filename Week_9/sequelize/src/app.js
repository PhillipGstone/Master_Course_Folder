const yargs = require("yargs")
const { sequelize } = require("./db/connection")
const { addMovie, listMovies, updateMovies, deleteMovies } = require("./movie/functions")

const app = async (yargsobject) => {
    try {
        await sequelize.sync()
        if (yargsobject.create) { /////// CREATE ///////
            await addMovie ({title: yargsobject.title, actor: yargsobject.actor})
            let output = {}
            let table = await listMovies()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        } else if  (yargsobject.read) { /////// READ ///////
            console.log(await listMovies())
            
        } else if (yargsobject.update) { /////// UPDATE ///////
            await updateMovies (
                {
                    title: yargsObject.title, 
                    actor: yargsObject.actor },
                    {
                    title: yargsObject.newTitle,
                    actor: yargsObject.newActor,
                }
            )
            console.log(await listMovies())
        } else if (yargsobject.delete) { /////// DELETE ///////
            await deleteMovies (
                { title: yargsobject.title }
            )
        } else {
            console.log("incorrect command")
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv)