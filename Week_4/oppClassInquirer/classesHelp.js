class User { // this makes the class. 
    constructor(email, name) { // this constructs the template with the varibles work from or something.
        this.name = name; // this so you not hard coding it and can change it for multible versions.
        this.email = email;
    }
}

// varable to make a NEW instance of the User class. new to trigger the constructer and then the class name then pass it with what you changing.
const userOne = new User('Someone@gmail.com', 'Someone'); // so would change. name = someone and email = Someone@gmail.com
const userTwo = new User('Person@hotmail.com', 'Person'); // so would change. name = Person  and email = Person@hotmail.com

console.log(userOne); // This calls it
console.log(userTwo);
