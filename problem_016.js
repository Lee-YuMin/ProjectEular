let num = [1];

for(let i = 0; i < 1000; i++) {
    let isUp = 0;
    for(let j = num.length - 1; j >= 0; j--) {
        if(j === 0 && num[j] * 2 >= 10) {
            num[j] = num[j] * 2 - 10 + isUp;
            num.unshift(1);
        } else if(j === 0 && num[j] * 2 < 10) {
            num[j] = num[j] * 2 + isUp;
        } else if(num[j] * 2 >= 10) {
            num[j] = num[j] * 2 - 10 + isUp;
            isUp = 1;
        }else {
            num[j] = num[j] * 2 + isUp;
            isUp = 0;
        }
    }
}

let answer = num.reduce((s, v) => s + v);

console.log(answer);


// 60분
// Feedback : 지수 표현식을 어떻게 해야 할지 몰라서 배열로 만든 다음 계산해야 하는 방식은 답을 참고함...