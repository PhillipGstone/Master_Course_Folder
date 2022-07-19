// const person = {   // const is good for this
//     name: "phillip",  // key value pairs
//     age: 26,
//     movies: ["movie1", "movie2"],
// }; // line ending. one exicutible chunk.

// person.name
// person.movies[1]
// person.food = ["pizza", "Burger", "food"]
// console.log(person);

// let arry = [
//     ["water", 1], ["pepsi", 1.50], ["coke", 1.75]
// ];

// console.log(arry[0][1]) 

// person.name. not dynamic is hard codded. person["name"]; dynamic can be changed.
// you could use hard coded vales at first for testing then change them later.

// let wakieWakie = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "Get up at 7am"
// };
// let day = {};
// let alarm = {};

// let day = '';
// let alarm = '';

// const obj = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am",
//     days: [
//         'monday',
//         'tuesday',
//         'wednesday',
//         'thursday',
//         'friday',
//         'saturday',
//         'sunday'
//     ]
// };

// function randomDay () {
//     day = (obj.days[Math.floor(Math.random() * obj.days.length)]);
// };
// randomDay();

// if (day == obj.days[5] || obj.days[6]) {
//     alarm = obj.weekendAlarm;
// } else  {//(day == obj.days[0] || obj.days[1] || obj.days[2] || obj.days[3] || obj.days[4]) {
//     alarm = obj.weekdayAlarm;
// };

// console.log(day, alarm);

// let offer = 'none';
// let time = 1200;

// const cafe = {
//     name: 'Whitesheep',
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry, no offer"
// };

// let example = () => {
//     let thisVar = "0";
//     return thisVar; // the make the varible global and useable outside the function.
// }

const person = {   
    name: "phillip",  
    age: 26,
    movies: ["movie1", "movie2"],
    SayHi() { 
        return `Hello my name is ${this.name}`
    }
}; 

console.log(person.SayHi());