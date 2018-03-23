var primeNum =[2];
var sum = 0;

for(var i=3; i<=2000000; i=i+2){
    if(isPrimeNum(i, primeNum))
        primeNum.push(i);
}


for(var i=0; i < primeNum.length; i++){
    sum += primeNum[i];
}

console.log(sum)


// 해당 숫자보다 작은 소수들로 나누어 떨어지는 지만 확인
function isPrimeNum(num, primeNum) {
    for(var i=0; i<primeNum.length; i++){
        if(num % primeNum[i] == 0)
            return false;
    }
    return true;
}

// 25분
// Feedback : 알고리즘이 이게 맞을까… 너무 오래걸림…