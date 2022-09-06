const User = require("./userModel");

////////////////////// SIGNUP/CREATE /////////////////
// This is the signup to make a new user    
exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const token = newUser.generateAuthToken();
    await newUser.save();
    res.status(201).send({ user: newUser.name, token });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({ error: "Email already used" });
    } else {
      res.status(500).send({ error: error.message });
    }
  }
};

//////////////////////// LOGIN //////////////////
// login with name, email and password.   
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = user.generateAuthToken();
    res.status(200).send({ user: user.name, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//////////////////////// LIST //////////////////
exports.listUsers = async (req, res) => {
  try {
      let UserList = await User.find({});
      if (UserList.length > 0){
          console.log("inside listUsers");
          res.status(200).send(UserList);
      }
      else {
          console.log("Nothing to display");
          res.status(400).send({error: "request failed"});
      }
  } catch (e) {
      console.log("error in listUsers");
      res.status(500).send({error:"internal server error"});
      console.log(e);
  }
}
exports.listUserName = async (req, res) => {
  try {
      let userList = await User.find({});
      if (userList.length > 0){
          console.log("inside listUsername");
          let username = [];
          for(let i = 0; i < userList.length; i++){
              username.push(i+1, userList[i].name);
          };
          res.status(200).send(username);
      }
      else {
          console.log("Nothing to display");
          res.status(400).send({error: "request failed"});
      }
  } catch (e) {
      console.log("error in listUsername");
      res.status(500).send({error:"internal server error"});
      console.log(e);
  }
}
exports.listUserEmail = async (req, res) => {
  try {
    let userList = await User.find({});
    if (userList.length > 0){
      console.log("inside listUseremail");
      let user = [];
      for(let i = 0; i < userList.length; i++){
        user.push(i+1, userList[i].email);
      };
      res.status(200).send(user);
    }
    else {
      console.log("Nothing to display");
      res.status(400).send({error: "request failed"});
    }
  } catch (e) {
    console.log("error in listUsername");
    res.status(500).send({error:"internal server error"});
    console.log(e);
  }
}

//////////////////////// UPDATE //////////////////
exports.editName = async (req, res) => {
  try{
      if(req.user && req.body.name) {
          await User.findByIdAndUpdate(req.user._id ,{ $set : {name: req.body.name} });
          res.status(200).send(await User.find({name: req.body.name}));
      } else if (!req.body.name) {
          res.status(400).send({error: `use the "name" key`});
      }
  } catch (error) {
          res.status(500).send(console.log("Failed to update users name"));
          console.log(error);
  }
};

exports.editEmail = async (req, res) => {
  try{
      if(req.user && req.body.email) {
          await User.findByIdAndUpdate(req.user._id ,{ $set : {email: req.body.email} });
          res.status(200).send(await User.find({email: req.body.email}));
      } else if (!req.body.email){
          res.status(400).send({error: `use the "email" key`});
      }
  } catch (error) {
          res.status(500).send(console.log("Failed to update users email"));
          console.log(error);
      }
};

exports.editPassword = async (req, res) => {
  try{
      if(req.user && req.body.password) {
          await User.findByIdAndUpdate(req.user._id ,{ $set : {password: req.body.password} });
          res.status(200).send(await User.find({password: req.body.password}));
      } else if (!req.body.password){
          res.status(400).send({error: `use the "password" key`});
      }
  } catch (error) {
      res.status(500).send(console.log("Failed to update password"));
      console.log(error);
  }
};

//////////////////////// DELETE //////////////////
exports.deleteUser = async (req, res) => {
  try {
      if (req.user){
          console.log(`${req.user} Account was deleted` );
          await User.findByIdAndDelete(req.user._id);
          res.status(200).send(await User.find({}));
      }
      else {
          console.log("Nothing to delete");
          res.status(400).send({error: "request failed"});
      }
  } catch (e) {
      console.log("error in deleteUser");
      res.status(500).send({error:"internal server error"});
      console.log(e);
  }
}
