// let users = ["Dave", "Gary", "Steve"];

// const addUser = (username) => {   // async and await.
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             users.push(username);
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject("oops there has been an error");
//             }
//         }, 2000);
//     });
// };
// const getUsers = () => {
//     setTimeout(() => {
//         console.log(users);
//     }, 1000);
// };
// // addUser("Charlie") // one way.
// // .then(getUsers)
// // .catch((err) => {
// //     console.log(err);
// // });

// async function init() {  // annother way.
//     await addUser("charlie");
//     getUsers();
// }
// init();

// const myAsyncFunction = () => {   // without async and await.
//     return new Promise((resolve, reject) => {
//         let a = 1 + 1;
//         if (a == 2) {
//             resolve("My promise has been resolved");
//         } else {
//             reject("My promise has been rejected");
//         }
//     });
// };
// myAsyncFunction()
// .then((massage) => {
//     console.log(massage);
// })
// .catch((massage) => {
//     console.log(massage);
// });

fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.text())
    .then(data => console.log(data));


async function catFacts() {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    let data = await response.text();
    data = data.toUpperCase()
    console.log(data)
    }

catFacts()