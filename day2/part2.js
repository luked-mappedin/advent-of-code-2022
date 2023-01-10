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

/* 
X = lose
Y = draw
Z = win 

A = Rock
B = Paper
C = Scissors
*/

const win = 6;
const draw = 3;
let totalScore = 0

let myPlay = "";

// for(x = 0; x < comboMap.length; x++){

//     if(comboMap[x].left === 'A'){

//         if(comboMap[x].right === 'X'){
//             //Tie
//             totalScore += rockScore + draw;
//         } else if(comboMap[x].right === 'Y'){
//             // Win
//             totalScore += win + paperScore;
//         } else {
//             //Lose
//             totalScore += scissorsScore;
//         }

//     } else if(comboMap[x].left === 'B'){
//         if(comboMap[x].right === 'X'){
//             //Lose
//             totalScore += rockScore;
//         } else if(comboMap[x].right === 'Y'){
//             //Tie
//             totalScore += draw + paperScore;
//         } else {
//             //Win
//             totalScore += win + scissorsScore;
//         }
//     } else {

//         if(comboMap[x].right === 'X'){
//             //Win
//             totalScore += win + rockScore;
//         } else if(comboMap[x].right === 'Y'){
//             //Lose
//             totalScore += paperScore;
//         } else {
//             totalScore += scissorsScore + draw;
//             //Tie
//         }
//     }
// }

for(x = 0; x < comboMap.length; x++){
    if(comboMap[x].right === 'X'){
        if(comboMap[x].left === 'A'){
            //Lose
            //myPlay = 'Scissors';
            totalScore += scissorsScore;
        } else if (comboMap[x].left === 'B'){
            totalScore += rockScore;
        } else  { //C
            totalScore += paperScore;
        }
    } else if (comboMap[x].right === 'Y'){
        totalScore += draw;
        if(comboMap[x].left === 'A'){
            totalScore += rockScore;
        } else if (comboMap[x].left === 'B'){
            totalScore += paperScore;
        } else  { //C
            totalScore += scissorsScore;
        }
    } else {
        totalScore += win;
        if(comboMap[x].left === 'A'){
            totalScore += paperScore;
        } else if (comboMap[x].left === 'B'){
            totalScore += scissorsScore;
        } else  { //C
            totalScore += rockScore;
        }
    }
}

console.log(totalScore);