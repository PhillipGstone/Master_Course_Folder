// console.log("Hello world");

// console.log("hello".toUpperCase());

// console.log(Math.random());

// console.log(Math.random()*10);

// console.log(math.floor()(Math.random()*10));

// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('------------');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('------------');
// console.log('   |    |   ');
// console.log('   |    |   ');
// console.log('   |    |   ');


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
