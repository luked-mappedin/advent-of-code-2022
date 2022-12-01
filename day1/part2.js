const fs = require('fs');

let inputArray = fs.readFileSync('./input', 'utf-8').split('\n').map(str => {
    return(Number(str))
});

let finalCounts = [];
let tempBuffer = 0

for(x = 0; x < inputArray.length; x++){
    if (inputArray[x] != 0){
        tempBuffer += inputArray[x];
    } else {
        finalCounts.push(tempBuffer);
        tempBuffer = 0;
    }
}

let sortedArray = finalCounts.sort(function(a, b){return b - a})

console.log(sortedArray[0] + sortedArray[1] + sortedArray[2]);