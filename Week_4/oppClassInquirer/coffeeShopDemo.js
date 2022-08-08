import inquirer from 'inquirer';

let menu = {
    coffee: 3,
    tea: 2.5,
    latte: 2,
    coke: 1.5, 
    water: 0.5,
    crisps: 1,
    scone: 2.5,
    brownie: 2.5,
    sandwhich: 3,
}

class CoffeeShop {
    constructor(name){
        this.name = name
        this.order = []
        this.total = 0
    }

    calculateTotal() {
        this.total = 0
        for(let i = 0; i < this.order.length; i++){
            this.total += menu[this.order[i]]
        }
        return this.total
    }

    set updateOrder(newItem){
        this.order.push(newItem)
    }
}

const questions = [
    {
        type: 'input',
        name: 'getName',
        message: "What's your name?"
    }
]

const response = await inquirer.prompt(questions)
let customer = new CoffeeShop(response.getName)

const checkOut = async () => {
    console.log(`
        You ordered:
        ${customer.order.join(', ')}
        Total:
        £${customer.calculateTotal().toFixed(2)}
    `)

    const pay = await inquirer.prompt([{
        type: 'input',
        name: 'totalMoney',
        message: 'Please pay here',
        validate(value){
            if(isNaN(value)){
                return 'Please enter a number'
            } else if(customer.total > parseInt(value)) {
                return "You don't have enough money"
            } else {
                return true
            }
        }
    }])
    console.log(`
        Thank you ${customer.name}
        Order:     ${customer.order.join(', ')}
        Total:     £${customer.calculateTotal().toFixed(2)}
        You Paid:  £${parseInt(pay.totalMoney).toFixed(2)}
        Change:    £${pay.totalMoney - customer.calculateTotal().toFixed(2)}
    `)
}


const askForOrder = async () => {
    const order = await inquirer.prompt([
        {
            type: 'list',
            name: 'getOrder',
            message: 'What would you like to order?',
            choices: [...Object.keys(menu), '- Go To Checkout -']
        }
    ])

    if(order.getOrder === '- Go To Checkout -'){
        checkOut()
        return;
    } else {
        customer.updateOrder = order.getOrder
    }
    askForOrder()
}
askForOrder()
