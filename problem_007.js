var index = 0;
var num = 2;

while(true){
    if(isPrimeNum(num))
        index++
    
    if(index==10001)
        break;
    
    num++;
}

console.log(num)

function isPrimeNum(num){
    for(var i=2; i<num; i++){
        if(num%i == 0)
           return false;
    }
    return true;
}

// 5분
// Feedback : num의 초기값이 1부터 시작해서 첫번째 소수가 2가 아니였음. 시작 값 착오.
// 콘솔에 index를 왜찍었을까... num을 찍어야지..
