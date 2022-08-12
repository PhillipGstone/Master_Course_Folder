import inquirer from 'inquirer'; // It can take an array of questions. need awnsers.
// Need to Install inquirer. npm init -y then npm install inquirer
// put "type": "module", in the pakage.json file above dependecies. Will call this file a module and let us inport our inquirer pakage.

let menu = {  // a list to store the items
    coffee: 3, // keys value pairs
    tea: 2.5,  // key is Tea: Value is 2.5,
    latte: 2,
    coke: 1.5, 
    water: 0.5,
    crisps: 1,
    scone: 2.5,
    brownie: 2.5,
    sandwhich: 3,
}

class CoffeeShop {
    constructor(name) {
        this.name = name
        this.order =[] // list for if people order multible items and store them here
        this.total = 0  // to calculate the total
    }

    calculateTotal() {
        this.total = 0 
        // to reset the total if u running it multiple times. Don't want to be stacking total on total on total everytime I run this func. Make sure it 0 then calculate total.
        for(let i = 0; i < this.order.length; i++) { // make a for loop to cuicale though all items in the order list
            this.total += menu[this.order[i]] // this to calculate the total cost of orders in the order list
        }
        return this.total 
    }

    set updateOrder(newItem) { // Setter needs a value for you're going to pass it witch will set a new value for a propity 
    this.order.push(newItem) // to push the order to the bottom of the list.
    }
}

const questions = [ // array the response uses coz it linked. Will go though the array ask the first question wait for response then ask the next one after.
    {  // inquirer can ask questions and store them in varibles but them need to be asked in a certain way.
        type: 'input', // inputing any kind of text, number or value.
        name: 'getName', // Key name for the value it will receave
        message: "What is your name?" // What u what this to ask so it not. "Get name" it'll be "What is your name?"
    }, {
        type: 'input',
        name: 'order',
        message: "Order?"
    }
]
// The responce to question will be stored in the respoponse var. Need to access inquirer first then propt to ask the questions in the questions var but it will continue to run though our code unless we put an await so will stay here untill the user has responded to the question.
const response = await inquirer.prompt(questions) 
let customer = new CoffeeShop(response.getName) // this should return whatever name is given.

// this should create an array of all the keys. Then .push to push and item to the array to get out the list and move one once the user has finished picking items.
//console.log([...Object.keys(menu), '- Go To Checkout -']) // use a spread array ... to spread them out so they all in 1 array not 2 and in 1 nice long list.

const askForOrder = async () => { // to make a list for the user to pick from. Because I'm using async and await I want to use this asyncsincrtly
    const order = await inquirer.prompt([ // to wait for user to pick something and prompt to prompt a list of items to pick from.
        { // here is where I plug in my array
            type: 'list', // list to display it as a list for user to scroll though and pick things.
            name: 'getOrder', // give it a name to refrence the result.
            message: "What you want?",
            choices: [...Object.keys(menu), '- Go To Checkout -'] // Because it's a list we need to give it a list of choices. Needs an array of values. Want to store all the keys in an array to give to the user.
        }
    ])
    // Will only run once to to make it keep asking need a if statment and if they select Go To Checkout exit out and go onto the next thing like give them the total.
    if(order,getOrder === '- Go To Checkout -') { // this to exit out the list.
        console.log('checkout')
        return;
    }  else { // want to run the setter to add it to the order array. Refrence the setter to add items to the order array so we called it updateOrder
        customer.updateOrder = order.getOrder // Using the setter save the result for the choice order.getOrder to the list.
        askForOrder()  // This runs the func again after then have picked an item so it askes the user again for if them want multible items.
    }
}

// still working on this.