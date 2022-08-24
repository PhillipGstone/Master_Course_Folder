console.log("Hello World")
console.log(prosses.argv)

const app = (names) => {
    switch(names[2]) {
        case 'Alex':
            const alex = names[2]
            console.log(alex + 'is stored in a const')
            break;
        case 'steave':
            const steave = names[2]
            console.log(steave + 'is stored in a const')
            break;
        default:
            console.log("No Name")
    }
}

app(prosses.argv)