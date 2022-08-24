const Movie = require("./utils") // How to import a fun from a diffrent folder. index don't need to be the coz it index but anything else does.

console.log(process.argv)

const app = (argsArr) => {
    try {
        switch (argsArr[2]) {
            case 'add':
                // console.log("inside add")
                // const movie = argsArr[3]
                // console.log(movie + 'is stored')
                const movie = new Movie(argsArr[3], argsArr[4])
                movie.add()
                console.log(movie.list()) 
                break;
            case "addMulti":
                const movie1 = new Movie(argsArr[3], argsArr[4])
                const movie2 = new Movie(argsArr[5], argsArr[6])
                movie1.add();
                movie2.add();
                console.table(movie1.list());
                break;
            case 'default':
                console.log("incorrect command")
                break;
        }
    } catch (error) {
        console.log(error)
    }
}

app(process.argv)

// node app.js add spiderman dave smith. to make 2 name on 1 line "dave smith"