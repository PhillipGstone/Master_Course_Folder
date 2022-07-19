let age = 26

if (age < 17) {
    console.log("not old enough!")
}
else {
    console.log("old enough!")
}

let pizzaTopping = "chicken"

switch(pizzaTopping){
    case "ham":
    case "cheese":
    case "pepperoni":
console.log("These are important ingredients for my pizza.");
    break;
    case "chicken":
console.log(`"I don't mind having ${pizzaTopping} on my pizza."`)
    break;
    default:
console.log("This topping should not be on pizza");
    }


let password = "password"

if (password.length >= 8){
    console.log(password);
}  else {
    console.log('password to short');
}

let num0 = 10;

if (num0 % 3 == 0 || num0 % 5 == 0){
console.log("This number is divisible by 3 or 5")}
else {
console.log("This number is not divisible by both 3 and 5")};


let num1 = 15;

if (num1 % 3 == 0 && num1 % 5 == 0){
    console.log("fizz buzz")
}else if (num1 % 5 == 0) {
    console.log("buzz")
} else if (num1 % 3 == 0){
    console.log("fizz")
} else {
    console.log(num1)
}


num = "222212222"

numArray = num.split("")
numArrayReversed = numArray.reverse()
numReversed = numArrayReversed.join("")

if (num == numReversed) {
    console.log("Yes, that's a palindrome.")
} else {
    console.log("No, that's not a palindrome.")
}


let time = "6:00 am";
let placeOfWork = "Office";
let townOfHome = "Manchester";

if (time == "6:00 am" && townOfHome == "Manchester"){
    console.log("Still at home");
} else if (time == "7:00 am"){
    ("I'm commuting");
} else if (time == "8:00 am" && placeOfWork == "Office"){
    console.log("I'm at work");
} else {
    console.log("");
}


function endVowel(x){
    const match = x.match(/[aeiou](?!.*[aeiou])/i);
    return match ? match[0] : 'No match';
}

console.log(endVowel('jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'));


function firstLastLetters(word)
    {
        let i = word.length;
        if (i < 2)
            return -1;
        if (word[0] == word[i - 1])
            return 1;
        else
            return 0;
    }

    let word = "liverpool";
    let res = firstLastLetters(word);

    if (res == -1)
    console.log("Invalid Input");
    else if (res == 1)
    console.log("Equal");
    else
    console.log("Not Equal");


