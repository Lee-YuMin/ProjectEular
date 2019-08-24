let triangleNum = 1;
let nextNum = 2;
let divisors;
let limit = 500;
let primeNumList = [2]; // 소수 리스트
let startTime = new Date().getTime();
let endTime;

while(true) {
    // 삼각수 증가
    triangleNum += nextNum;
    
    // 약수의 개수 구하기
    divisors = getDivisorCount(triangleNum);

    // 약수의 개수가 limit를 넘으면 끝
    if(divisors >= limit)
        break;

    nextNum++;
}

// 정답
endTime = new Date().getTime();
console.log('다음 숫자 : ' + nextNum, '삼각수 : ' + triangleNum, '약수 개수 : ' + divisors);
console.log(endTime - startTime);

// 약수의 개수 구하는 함수
function getDivisorCount(num) {
    let count = 1;
    let old = 0;
    let obj = {};
    
    while(num > 1) {
        old = num;
        // 소인수들의 개수를 소수 리스트를 돌면서 계산
        primeNumList.some(v => {
            if(num % v === 0) {
                obj[v] = obj[v] ? obj[v] + 1 : 1;
                num = num / v;
            }
            return num % v === 0;
        });

        // 현재의 소수 리스트에서 소인수들의 개수를 못구했다면 현재 num의 소수들을 다시 리스트에 추가
        if(old === num) 
            primeNumList = getPrimeNumber(primeNumList, num);
    }
    
    // 소인수들의 개수로 약수의 개수 구하기
    for(let key in obj) {
        count = count * (obj[key] + 1)
    }

    return count;
}

// 현재 들어온 소수 리스트부터 num의 개수까지 소수 리스트 구하기
function getPrimeNumber(arr, num) {
    for(let i = arr[arr.length - 1]; i <= num; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i % arr[j] === 0)
                break;

            if(j + 1 === arr.length)
                arr.push(i);
        }
    }
    
    return arr;
}

// 120분
// Feedback : 빠르긴 한데... 소스가 기네.. 근데 생각보다 빠름...




// 이 로직은 어떻게도는겨...  (스피드는 내가 더 빠름)

// var count = 0;
// var i=1, sam = 0, yak=0;
// while (yak < 500)
// {
//     yak = 0;
//     sam += i;
//     for (var j = 1; j*j <= sam; j++)
//     {
//         count++
//         if (sam%j == 0)
//             yak += 2;
//         if (j*j == sam)
//             yak++;
//     }
//     i++;
//     console.log(i, sam, yak);
// }