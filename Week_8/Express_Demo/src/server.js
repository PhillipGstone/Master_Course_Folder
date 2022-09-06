const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./users/userRouter");
// const public_directory = path.join(__dirname, "..public/");

// app.use(express.static(public_directory));

app.use(express.json());

app.use(userRouter);

// app.post("/", (req,res) => {
//   console.log(req.body);
//   if (req.body.username ==="Phillip") {
//     res.status(201).send({ message: "success" });
//   } else {
//     res.status(400).send({ message: "user does not exist" });
//   }
// });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


/*
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

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);

  res.send({ id: req.params.id });
});

app.post("/", (req, res) => {
  console.log(req.body)
  if (req.body.username === "Person1") {
    console.log(req.body);
    res.status(201).send({ message: "success" })
  } else { 
    res.status(400).send({ message: "not ok" })
  }
})

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("something");
});

http://localhost:5000
*/