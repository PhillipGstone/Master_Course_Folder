// console.log("Hello Codenation")

// let word1 = ("Hello");
// let word2 = ("Codenation");

function func1 () {
    let word1 = ("Hello");
    return word1, func2();
    function func2 () {
        let word2 = ("Codenation");
        let add = `${word1} ${word2}`;
        return word2, add;
    };
};

console.log(func1());

