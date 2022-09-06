const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userRouter = require("./users/userRouter");
const movieRouter = require("./movies/movieRouter")
const { tokenCheck } = require("./middleware");
require("./db/connections");

// MAKE SURE EVERYTHING IS SPELT CORRECTLY AND IF YOU REQUIRE IT MAKE SURE IT THE SAME AS THE FOLDER/FILE!!!!!

app.use(express.json()); // Middleware to let express turn the Json into JS. To be able to receive Json and return JS.
app.use(userRouter);
app.use(movieRouter); 

app.get("/", tokenCheck, (req, res) => {
    res.status(200).send({ message: "You should only see this if you are logged in" });
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

/*
app.post("/", (req,res) => {
	console.log(req.body);
    if (req.body.username ==="phillip") {
        res.status(201).send({ message: "success" });
    } else {
        res.status(400).send({ message: "user does not exist" });
    }
	res.status(200).send({ message: "This the main page" });
});

app.post("/hello", (req, res) => { // /hello is just so express can see what you want then will run what is in /hello  this case a message.
	console.log(req.body);
    console.log("Hello world"); // this only gets logged when the /hello is run.
    res.status(200).send({ message: "Hello this is ok" }); // this is to respond with a status message and to display a message.
})


http://localhost:4000/user/signup 
under the url and the crud button there should be a dropdown that says MAIN next to auth change that to JSON. 
{
	"name": "phillip",
	"email": "phillip@mail.com",
	"password": "thisapassword123"
}
This is for the signup bit of the stuff. to get in, it's. /user/login
*/