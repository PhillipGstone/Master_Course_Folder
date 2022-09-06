const { Router } = require("express");
const express = require("express");
const app = express();
const userRouter = Router();
const { listUsers, addUser } = require("./userControllers");

userRouter.get("/user", (req, res) => {
    //
})

userRouter.post("/user", (req, res) => {
    //
})

const myFunc = (req, res, next) => { // MiddleWare. It is just JS func that runs before sending a responce. great for authanticasion and error handerling.
    console.log("logged first")
    req.body.first = "First"
    next()
} 

const myBetterFunc = (req, res, next) => { // MiddleWare
    console.log("logged second")
    req.body.second = "second"
    next()
}

app.get("/", [myFunc, myBetterFunc], (req, res) => { // controller
    console.log(req, body)
    res.send("Hey my name is Phillip");
});

app.get("/hello", (req, res) => {
    console.log(req.query);

    if (req.query.age) {
        res.status(200).send({ age: req.query.age });
    } else {
        res.send({ error: "No age found" });
    }
    });

userRouter.get("/user", listUsers);
userRouter.post("/user", addUser);

module.exports = userRouter;