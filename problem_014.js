let count = 0;
let num = 0;

for(let i = 1; i < 1000000; i++) {
    let roopCount = 0;
    let roopNum = i;

    while(roopNum > 1) {
        if(roopNum % 2 === 0)
            roopNum = roopNum / 2;
        else
            roopNum = roopNum * 3 + 1;

        roopCount++;
    }
    if(count < roopCount) {
        num = i;
        count = roopCount;
    }
}

console.log(num);

// 14분
// Feedback : 너무 단순한거같은데... 좀더 루프 덜 돌수있는 방법이..
