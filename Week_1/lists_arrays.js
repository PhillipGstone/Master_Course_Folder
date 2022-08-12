let coffee_order = [
    "Alex - Cortado",
    "Ben - Latte",
    "Charlie - Whatever's New"
];
//console.log(coffee_order[2])
console.log(coffee_order)

coffee_order[1] = "Ben - Tea"

console.log(coffee_order)
console.log(coffee_order.length) // how many items in the list
coffee_order.push("John - coffee") // to add an item to the list
coffee_order.pop() // to remove the last item from the list
coffee_order.shift() // adds an item to the start and .unshift() removes the first item.
coffee_order.splice(1,1) // To choose where to start deleating in the list and how many.


let favouriteDrinks = ["Tea", "water", "drink"];

for (let i = 0; i < favouriteDrinks.length; i++) {
    console.log(favouriteDrinks[i]);
}


let age = 15;

while(age < 18){
    console.log("You are a child!");
    age++;
}
console.log("You're an adult!");


let cards = ["Dimonds", "Hearts", "Spades", "Clubs"];
let currentCard = "Clubs";

while(currentCard != "Spades"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)]; // Math.floor so it rounds down and can chose 0 and max 3.
}

console.log(currentCard);


let favouriteFilms = [
    "Fav Film 1",
    "Fav Film 2",
    "Fav Film 3",
    "Fav Film 4",
    "Fav Film 5",
]
console.log(favouriteFilms);

favouriteFilms.push("Fav Film 6")
favouriteFilms.push("Fav Film 7") 

for (let i = 0; i < favouriteFilms.length; i++) {
    console.log(favouriteFilms[i]);
}


for (let i = 0; i < 7; i++) {
    console.log(Math.ceil(Math.random()*50));
};


// let count = 10 // where it starts from -1 so 9.

while(count != 0) { // while it not equal to 0 do this
    count-- // count one down. 9 to 8
    console.log(count) // Print what count is on this loop then start again.
}


let favFilms = [
    "The Goonies",
    "Hook",
    "Ghostbusters",
    "Muppets"
]

for(count = 0; count < favFilms.length; count++) { // count++ like count down the list or it'll just be the first list item.
    console.log(favFilms[count])

    if(favFilms[count] == "Ghostbusters") {
        console.log("Yay its Ghostbusters")
    } else {
        console.log("Boo! we want Ghostbusters!")
    }
}


for(let i = 0; i < 6; i++){ // i is 0. i < 6 do this 6 times then i++ counts upto 6 then i is more then 6. i++ -> 0 add 1 and updates i.  
    let number = Math.ceil(Math.random()*30) // .ceil rounds up like to the highest and Math.random() up to 30
    if(number % 7 == 0){ // if number is divisible by 7 with 0 remander then do this. next line.
        console.log(`${number} is divisible by 7`)
    }else{
        console.log(`${number} is not divisible by 7`)
    }
}


let bobsFollowers =[
    "Steve",
    "Ted",
    "Phillip",
    "Gemma",
    "Evie"
]

let hannahsFollowers=[
    "Jack",
    "Helen",
    "Steve",
    "Sky",
    "Phillip"
]
let mutualFollowers=[];

for (let x = 0; x <bobsFollowers.length; x++){
    for (let y = 0; y <hannahsFollowers.length; y++){
        if(bobsFollowers[x] === hannahsFollowers[y]){
            mutualFollowers.push(bobsFollowers[x]);
        }
    }
}
console.log(`Your mutual Followers are ${mutualFollowers}`);


// This is a for loop
const colours = ["Green", "Blue", "Yellow", "Red", "pink"];
for (let i = 0; i < colours.length; i++){ // setup counter, i for index. counting like for how many times. so for this keep going untill length of list is false. i++ is the counter. 
    console.log(colours[i]); // (colours) print the list 5 times. (colours[i]) print the items of the list 5 times not just the whole list 5 times.
}

// This is a while loop
let count1 = 10; // where it starts from.

while(count1 != 0) { // while it not equal to 0 do this
    count1-- // count one down. 9 to 8
    console.log(count1) // Print what count is on this loop then start again.
}

// this is a do...while loop
let count = 10;

do {
    count++ 
    console.log(count)
}
while(count != 20);
