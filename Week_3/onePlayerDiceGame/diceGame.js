let scoreCount = 0;
const rollButton = document.getElementById('roll')
const restartButton = document.getElementById('restart')
const condition = document.getElementById('condition')
const update = document.getElementById('update')
const score = document.getElementById('score')
const diceSound = document.getElementById("diceSound")
const loseSound = document.getElementById("loseSound")
const winSound = document.getElementById("winSound")

// function game
restartButton.addEventListener('click', ()=> {
    scoreCount = 0;
    condition.innerHTML = `Click the Roll Dice button to Begin`;
    update.innerHTML = `Dice Game`;
    score.innerHTML = `0`;
    roll.style.visibility = 'visible';
});

rollButton.addEventListener("click", () => {
    let result = Math.floor(Math.random() * 6) + 1;
    if(result > 1 || scoreCount >= 20){
        diceSound.currentTime = 0;
        diceSound.play();
        scoreCount += result;
        condition.innerHTML = `YOU ROLLED A ${result}!`;
        score.innerHTML = `${scoreCount}`;
        if(scoreCount >= 20){
            winSound.currentTime = 0;
            winSound.play();
            update.innerHTML = `YOU WIN!!!`;
            rollButton.style.visibility = 'hidden';
            restartButton.style.visibility = 'visible';
        };
    } else {
        loseSound.currentTime = 0;
        loseSound.play();
        scoreCount = 0;
        condition.innerHTML = `YOU ROLLED A ${result}!`;
        score.innerHTML = `${scoreCount}`;
        update.innerHTML = `YOU LOSE!!!`;
        rollButton.style.visibility = 'hidden';
        restartButton.style.visibility = 'visible';
    };
});
