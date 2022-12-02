const fs = require('fs');
const { toASCII } = require('punycode');

let inputArray = fs.readFileSync('./input', 'utf-8').split('\n');

const comboMap = [];
inputArray.forEach((v) => {
    let temp = v.split(' ');
     comboMap.push({
        left: temp[0],
        right: temp[1]
     });
});

const rockScore = 1;
const paperScore = 2;
const scissorsScore = 3;
// const rock = 'X';
// const paper = 'Y';
// const scissors = 'Z';
const win = 6;
const draw = 3;
let totalScore = 0

for(x = 0; x < comboMap.length; x++){
    if(comboMap[x].left === 'A'){

        if(comboMap[x].right === 'X'){
            //Tie
            totalScore += rockScore + draw;
        } else if(comboMap[x].right === 'Y'){
            // Win
            totalScore += win + paperScore;
        } else {
            //Lose
            totalScore += scissorsScore;
        }

    } else if(comboMap[x].left === 'B'){
        if(comboMap[x].right === 'X'){
            //Lose
            totalScore += rockScore;
        } else if(comboMap[x].right === 'Y'){
            //Tie
            totalScore += draw + paperScore;
        } else {
            //Win
            totalScore += win + scissorsScore;
        }
    } else {

        if(comboMap[x].right === 'X'){
            //Win
            totalScore += win + rockScore;
        } else if(comboMap[x].right === 'Y'){
            //Lose
            totalScore += paperScore;
        } else {
            totalScore += scissorsScore + draw;
            //Tie
        }
    }
}

console.log(totalScore);