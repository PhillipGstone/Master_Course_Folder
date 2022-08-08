class Person1 {
    constructor(name, age, job) {
        // properties here
        this.name = name;
        this.age = age;
        this.job = job;
    }
    // methods here
    talks() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} and I work as a ${this.job}.`);
    } 
    work() {
        console.log(`I am going to bed because I have work tomorrow. I am a ${this.job}.`);
    }
}
const dave = new Person1("Dave", 41, "builder");

// dave.talks();
// dave.work();

class Dog1 {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    walks() {
        console.log(`Taking ${this.name} the ${this.breed} for a walk`);
        return this;
    }
    eats() {
        console.log(`${this.name} has had some food.`);
        return this;
    }
}
const stan = new Dog1("Stan","Bull Dog");

// stan.walks().eats();

class Animal {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
    }
    drinks() {
        this.health += 5;
        return this;
    }
    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name}'s health is ${this.health}.`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
        });
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super (name, happy);
        this.happy = happy;
    }
    playBall() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} is happy.`);
        return this;
    }
    walks() {
        console.log(`Taking ${this.name} for a walk, they are ${this.happy}.`);
        return this;
    }
}
class Cat extends Animal {
    constructor(name, content) {
        super (name, content);
        this.content = content;
    }
    playWool() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} is happy.`);
        return this;
    }
    naps() {
        console.log(`Taking ${this.name} is taking a lovely nap, they are ${this.content}.`);
        this.health += 10;
        return this;
    }
}

class Person {
    constructor(firstNme, lastName) {
        this.firstNme = firstNme;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstNme} ${this.lastName}`;
    }
    set fullName(value) {
        const names = value.split(" ");
        this.firstNme = names[0];
        this.lastName = names[1];
    }
}

Person = new Person("Dave", "Jones");
// set it
Person.fullName = "Will Smith";
// get it
//console.log(Person.fullName);


// class drinkDetails {   
//     constructor(drinkName, drinkPrice) {
//         this.drinkName = drinkName
//         this.drinkPrice = drinkPrice
//     }
// }
// class customerDetails {
//     constructor(customerName, budgetTotal) {
//         this.customerName = customerName
//         this.budgetTotal = budgetTotal
//     }
// }
// const drinkFanta = new drinkDetails("Fanta", 3.50)
// const drinkPepsi = new drinkDetails("Pepsi", 7.00)
// const drinkSprite = new drinkDetails("Sprite", 4.25)
// const customerBilly = new customerDetails("Billy", 5)
// const customerJohn = new customerDetails("John", 23)
// const customerJane = new customerDetails("Jane", 80)
// function priceCheck() {
//     const drinkPriceRange = [drinkFanta.drinkPrice, drinkPepsi.drinkPrice, drinkSprite.drinkPrice]
//     const drinkPriceTotal = calculateTotal(drinkPriceRange)
    
//     if (drinkPriceTotal > customerBilly.budgetTotal) {
//         console.log(`Your order is ${drinkFanta.drinkName}, ${drinkPepsi.drinkName}, ${drinkSprite.drinkName}, Billy can't afford ${drinkPriceTotal}`)
//     } else {
//         console.log(`Your order is ${drinkFanta.drinkName}, ${drinkPepsi.drinkName}, ${drinkSprite.drinkName}, Billy can afford ${drinkPriceTotal}`)
//     }
// }
// function calculateTotal(drinkPriceRange) {
//     let drinksTotal = 0
//     for (let index = 0; index < drinkPriceRange.length; index++) {
//         drinksTotal += drinkPriceRange[index]
//     }
//     return drinksTotal;
// }
// priceCheck()


class coffeeShopTill {
    // parameters 
    constructor(cusName, drink, price) {
    // properties
        this.cusName = cusName; 
        this.drink = drink; 
        this.price = price; 
    }
    // methods 
    getName() {
        console.log(`Customer ID: ${this.cusName}.`)
        return this;
    }
    getDrink() {
        console.log(`Order: ${this.drink}.`)
        return this;
    }
    getPrice() {
        console.log(`Total cost: ${this.price}.`)
        return this;
    }
}

const customerOne = new coffeeShopTill("John Smith", "Melon Ramu", 2.99);

// customerOne.getName();
// customerOne.getDrink(); 
// customerOne.getPrice(); 

class customerCash {
    constructor(name, accountBalance) {
        this.name = name;
        this.accountBalance = accountBalance;
    }
    getName() {
        console.log(`Customer ID: ${this.name}.`)
        return this;
    }
    getAccountBalance() {
        console.log(`Customer Account Balance: ${this.accountBalance}.`)
        return this;
    }
}

const johnDoe = new customerCash("John Doe", 2);
// johnDoe.getName();
// johnDoe.getAccountBalance(); 

let customerAccBalance = johnDoe.accountBalance;
let customerOrderTotal = customerOne.price;

function comparePriceAndBalance () {

    if(customerAccBalance >= customerOrderTotal){

        console.log ("Customer has enough money");
    } else if (customerAccBalance <= 2.98){
        console.log ("Customer balance is not enough");

    }

}

comparePriceAndBalance();