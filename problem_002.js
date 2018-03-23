var sum = 0;
var oldValue = 1;
var value = 2;
var tmpValue;

while(value <= 4000000){
    console.log(value)
    if(value % 2 == 0)
        sum += value;

    tmpValue = value;
    value = value + oldValue;
    oldValue = tmpValue;
}

console.log(sum);

// 8분
// Feedback : While조건의 꺽쇠 방향...