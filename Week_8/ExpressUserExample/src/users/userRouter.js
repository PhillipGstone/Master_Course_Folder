const { Router } = require("express");
const { hashPassword, tokenCheck } = require("../middleware")
const { listUsers, listUserName, listUserEmail, addUser, login, deleteUser, editEmail, editName, editPassword, } = require("./userControllers")

const userRouter = Router();

/////////////////// CREATE //////////////////
userRouter.post("/user/signup", [hashPassword], addUser);
userRouter.post("/user/login", login);

/////////////////// READ //////////////////
userRouter.get("/user", listUsers);
userRouter.get("/user/name", listUserName);
userRouter.get("/user/email", listUserEmail);

/////////////////// UPDATE //////////////////
userRouter.put("/user/editname", [tokenCheck], editName)

userRouter.put("/user/editemail", [tokenCheck], editEmail)

userRouter.put("/user/editpassword", [hashPassword, tokenCheck], editPassword)

/////////////////// DELETE //////////////////
userRouter.delete("/user", [tokenCheck], deleteUser);


module.exports = userRouter;