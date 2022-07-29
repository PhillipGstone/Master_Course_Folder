let scoreCount1 = 0;
let scoreCount2 = 0;
const rollButton1 = document.getElementById('roll1')
const rollButton2 = document.getElementById('roll2')
const restartButton = document.getElementById('restart')
const condition1 = document.getElementById('condition1')
const update1 = document.getElementById('update1')
const score1 = document.getElementById('score1')
const condition2 = document.getElementById('condition2')
const update2 = document.getElementById('update2')
const score2 = document.getElementById('score2')
const diceSound = document.getElementById("diceSound")
const winSound = document.getElementById("winSound")

rollButton2.style.visibility = 'hidden';

restartButton.addEventListener('click', ()=> {
    scoreCount1 = 0;
    scoreCount2 = 0;
    condition1.innerHTML = `Click the Roll Dice Button`;
    condition2.innerHTML = `Click the Roll Dice button`;
    update1.innerHTML = `Dice Game`;
    update2.innerHTML = `Dice Game`;
    score1.innerHTML = `0`;
    score2.innerHTML = `0`;
    rollButton1.style.visibility = 'visible';
    rollButton2.style.visibility = 'hidden';
    counter = 0;
});

let counter = 0;
rollButton1.addEventListener("click", () => {
    rollButton2.style.visibility = 'visible';
    rollButton1.style.visibility = 'hidden';
    diceSound.currentTime = 0;
        diceSound.play();
    counter = 1;
});
rollButton2.addEventListener("click", () => {
    rollButton1.style.visibility = 'visible';
    rollButton2.style.visibility = 'hidden';
    diceSound.currentTime = 0;
        diceSound.play();
    counter = 0;
});

rollButton1.addEventListener("click", () => {
    let result = Math.floor(Math.random() * 6) + 1;
    if(result > 1 || scoreCount1 >= 20){
        scoreCount1 += result;
        condition1.innerHTML = `YOU ROLLED A ${result}!`;
        score1.innerHTML = `${scoreCount1}`;
        rollButton1.style.visibility = 'hidden';
        counter = 0;
        if(scoreCount1 >= 20){
            winSound.play();
            update1.innerHTML = `YOU WIN!!!`;
            update2.innerHTML = `YOU LOSE!!!`;
            rollButton1.style.visibility = 'hidden';
            rollButton2.style.visibility = 'hidden';
            restartButton.style.visibility = 'visible';
        };
    } else {
        winSound.play();
        scoreCount1 = 0;
        condition1.innerHTML = `YOU ROLLED A ${result}!`;
        score1.innerHTML = `${scoreCount1}`;
        update1.innerHTML = `YOU LOSE!!!`;
        update2.innerHTML = `YOU WIN!!!`;
        rollButton1.style.visibility = 'hidden';
        rollButton2.style.visibility = 'hidden';
        restartButton.style.visibility = 'visible';
    };
});
rollButton2.addEventListener("click", () => {
    let result = Math.floor(Math.random() * 6) + 1;
    if(result > 1 || scoreCount2 >= 20){
        scoreCount2 += result;
        condition2.innerHTML = `YOU ROLLED A ${result}!`;
        score2.innerHTML = `${scoreCount2}`;
        rollButton2.style.visibility = 'hidden';
        counter = 1;
        if(scoreCount2 >= 20){
            winSound.play();
            update2.innerHTML = `YOU WIN!!!`;
            update1.innerHTML = `YOU LOSE!!!`;
            rollButton2.style.visibility = 'hidden';
            rollButton2.style.visibility = 'hidden';
            restartButton.style.visibility = 'visible';
        };
    } else {
        winSound.play();
        scoreCount2 = 0;
        condition2.innerHTML = `YOU ROLLED A ${result}!`;
        score2.innerHTML = `${scoreCount2}`;
        update2.innerHTML = `YOU LOSE!!!`;
        update1.innerHTML = `YOU WIN!!!`;
        rollButton2.style.visibility = 'hidden';
        rollButton1.style.visibility = 'hidden';
        restartButton.style.visibility = 'visible';
    };
});


