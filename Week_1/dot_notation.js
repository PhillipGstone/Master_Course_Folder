//  Object.property 

console.log("Hello world"); // console is the object and .log is the property. You access the console to log "Hello world"

console.log("hello".toUpperCase()); // you acsess the console to log hello world to the termnel and .toUpperCase() turns it all the uper case using a string method.

console.log(Math.random());

console.log(Math.random()*10);

console.log(math.floor()(Math.random()*10)); // Math.floor returns an integer less then or equal to the specified number.
// Math.ceil() will always round a number up to the next largest integer. Math.round() returns the value of a number rouded to the nearest integer. 

console.log('   |    |   ');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('------------');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('------------');
console.log('   |    |   ');
console.log('   |    |   ');
console.log('   |    |   ');


let down ="   |   |   \n   |   |   \n   |   |   " 
let across= "------------";  
array=[down, across, down, across, down]; 
console.log(array.join('\n'));  


let line = 5

while (line > 0) {
    if (line == 4 || line == 2) {
        line -= 1;
        console.log("-----------");
    } else {
        line -= 1
        console.log("   |   |   \n   |   |   \n   |   |   ");
    }
}
