var value = 600851475143
var previousPrimeNum = 0;
var primeNum = 2;
var primeList = [];

while(value!=1){
    if(value % primeNum == 0){
        value = value / primeNum
        if(previousPrimeNum != primeNum){
            primeList.push(primeNum)
            previousPrimeNum = primeNum
        }
    } else {
        primeNum = getNextPrimeNum(primeNum)
    }
}

console.log(primeList)


function getNextPrimeNum(startNum) {
    var i = startNum + 1;
    
    while(1){
        if(isPrimeNum(i))
            return i;
        else
            i++
    }
}

function isPrimeNum(num) {
    for(var i=num-1; i>=2; i--){
        if(num/i == 0)
            return false;
    }
    return true;
}

// total time : 45min.
// Feedback : 33번째 줄의 For문의 조건을 i<=2으로 방향 착각.
// 변수가 지정된 범위보다 더 작아야 하는지 커야하는지 좀더 생각. For문이 어느 조건일때 도는지 깊이 생각. 