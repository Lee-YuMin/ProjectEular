var squareOfSum = 0
var sumOfSquare = 0

for(var i=1; i<=100; i++){
    squareOfSum += i;
    sumOfSquare += i * i;
}

squareOfSum *= squareOfSum;

console.log(sumOfSquare-squareOfSum);

// 4분
// Feedback : 변수 오타... 