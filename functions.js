 // const speak = function(time = "Morning", name = "Phillip"){
//     console.log(`Good ${time} ${name}`);
// }

// speak();
// speak("night", "john");


// const pressGrindNeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindNeans();

// let accnumber = 54638900  // Global varible.

// const cashWithdrawal = (amount, accnum) => {
//     let functionnum = 205  // function varible. only works in here.
//     console.log(`Withdrawing ${amount} from accound ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(240, accnumber);

// const addUp = (num1, num2) => {
//     console.log(num1 + num2);
// }

// addUp(7,3); // Add up two numbers and return the answer.
// addUp(2,5);
// addUp(3,7);

// // Arrow function syntax
// const square = (number) => {
//     return number * number;
// };
// square(5); // output: 25

// // Declaration
// function square(number) {
//     return number * number;
// }
// square(5); // output: 25

// //Expression
// const square = function(number) {
//     return number * number;
// };
// square(5); // output: 25


// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// let orderCount = 0;
// const toppings = function(topping1 = "Tomato", topping2 = "Sweetcorn", topping3 = "Cheese"){
//     console.log(`You ordered a pizza with ${topping1}, ${topping2} and ${topping3} toppings`)
//     orderCount++;
// }

// toppings();
// toppings("peppers", "ham", "pepperoni");
// toppings("Mushrooms", "pineapple", "sweetcorn");
// console.log (`There are ${orderCount} orders`);

pinNo = 1234
funds = 1000

let wantMoney = (pin, amount) => {
    if (pin == pinNo && funds >= amount) {
        funds -= amount
        console.log(`Thank you, Now dispensing £${amount}. Your new balance is £${funds}. Enjoy your day`)
    } else if (pin != pinNo) {
    console.log("Your PIN is incorrect")
    } else {
        console.log("You don't have that much")
    }
}

wantMoney(1234, 200); 
wantMoney(1243, 200); 
wantMoney(1234, 300);
wantMoney(1234, 400);
wantMoney(1234, 200);   



// let accBalance = 1000;
// let userPin = 1234

// let atMachine = (enteredPin, amount) => {
//     if (enteredPin === userPin && amount <= accBalance) {
//         accBalance -= amount;
//         console.log(`Withdrew ${amount}. New balance: ${accBalance}.`)
//     } else if (amount > accBalance) {
//     console.log(`You are trying to withdraw ${amount}. Your available balance is ${accBalance}.`)
//     } else {
//     console.log("Incorrect pin")
//     }
// }

// atMachine(1234, 500);
// atMachine(1234, 600);
// atMachine(1235, 100);