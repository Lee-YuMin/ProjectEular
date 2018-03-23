var answer = 1;
var untilNum = 20;

while(true){
    for(var i=2; i<=untilNum; i++){
        if(answer % i != 0){
            break;
        }
    }

    if(i == untilNum + 1)
        break;

    answer++;
}

console.log(answer)


// total time : 30min.
// Feedback 시간이 너무 걸리는데... 더 효율적인 방법이 있을꺼 같은데...
// 1~10에 나누어 떨어지는 정수 2520을 모른다는 가정하에 1부터 돌림.