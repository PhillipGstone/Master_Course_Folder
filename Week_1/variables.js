console.log("All around the worls".charAt(8)); // This will display the 8th character of this sentence in upper case on the console.

console.log("All around the worls".charAt(8).toLocaleUpperCase()); // using 2 methods in one.

// Variables are like boxes. We store in boxes to retrieve later. Different items can be stored in the box at different times. In code we give variables names se we can access things inside them
// This is hard coded. withdraw 10_pounds from 7683518 - This is dynamic withdraw amount from accountnumber
// Allow us to store data inside them. Access them via a name. Place new data in them whenever we want
// let varName = "This name" you can change the later by varName = "Another name" or update it if it's a number like with a counter

let i = 10;
console.log(i)
i += 2;
console.log(i)


let userName = 'phillip'
let age = '26'
let favColour = 'Blue'

console.log(`${userName} is ${age} years old, his favourite colour is ${favColour}`)

favColour = 'Green' 
age = 27

console.log(`${userName} is ${age} years old, his favourite colour is ${favColour}`)

let userName1 = prompt("What's your name?");
let age1 = prompt("What's your age?");
let favColour1 = prompt("What's your favColour?");

console.log(`${userName1} is ${age1} years old, his favourite colour is ${favColour1}`)

let breakfast = 'Toast and a brew'
let lunch = 'Noodles'
let dinner  = 'Burger and chips'

console.log(`Today for breakfast I had ${breakfast} and for lunch I had ${lunch} and for dinner I had ${dinner}.`)

breakfast = 'Cereal'
lunch = 'Cheese and onion pasty'
dinner = 'Pizza'

console.log(`Tomorrow for breakfast I will have ${breakfast} and for lunch I will have ${lunch} and for dinner I will have ${dinner}.`)


let space1 = "X" ;
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log(`   |   |  `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log(`   |   |   `);
console.log(`------------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |   `);
console.log(`------------`);
console.log(`   |   |   `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |   `);


let date1 = new Date();
let birthDay = new Date("08/06/2022");
let Difference_In_Time = birthDay.getTime() - date1.getTime();
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
console.log(Math.ceil(Difference_In_Days) + ' days until birthday');


let todaysDate = new Date().getTime() // gets todays date and turns it into a milliseconds format
let birthday = new Date(`august 06 ${new Date().getFullYear()}`).getTime() // gets Birthday from current year and turns it into a milliseconds format

// finds the difference between todays date and birthday and converts it from milliseconds to days
let dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24))

// checks to see if birthday this year has passed
if(dateDifference < 0){
    // update birthday to next year and calculate difference again
    birthday = new Date(`august 06 ${new Date().getFullYear() + 1}`).getTime()
    dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24))  
}
// console.log how many days until next birthday
console.log(`My birthday is in ${dateDifference} days`)





// const readline = require("readline");

// const breck = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// const lun = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// const din = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// breck.question("What you having for breakfast tomorrow? ", function (breakfast2)  {
//     console.log(`For breakfast tomorrow I will have ${breakfast2}`);
//     rl.close();
// });
// lun.question("What you having for lunch tomorrow? ", function (lunch2) {
//     console.log(`For lunch tomorrow I will have ${lunch2}`);
//     rl.close();
// });
// din.question("What you having for dinner tomorrow? ", function (dinner2) {
//     console.log(`For dinner tomorrow I will have ${dinner2}`);
//     rl.close();
// });