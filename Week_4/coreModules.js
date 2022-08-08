const os = require("os");
const fs = require("fs");

let userDetails = os.userInfo().username;

fs.appendFile("oh-hi.txt", `Hello ${userDetails} I made myself in your folder using the node Core Modules.`, (err) => {
    if (err) {
        console.log("oops");
    }
});

