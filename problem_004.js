var isPalindrome = function(num){
    num = num.toString();

    var separateNum = [];
    var numLength = num.length;

    for(var i = 0; i < numLength; i++)
        separateNum[i] = num.substring(i, i + 1);

    for(var i=0; i < numLength / 2; i++){
        if(separateNum[i] != separateNum[numLength - 1 - i]){
            return false;
        }
    }
    return true;
}

var sum = 0;

for(var i = 0; i <= 999; i++){
    for(var j = 0; j <= 999; j++){
        if(isPalindrome(i * j))
            sum = sum < i * j ? i * j : sum
    }
}
console.log(sum);


// total time : 40min.
// Feedback : 20번째 줄 For문의 범위는 i < 999로 하였음.  999도 포함이므로 1 <= 999가 되야함
// 999부터 0까지 내려가는게 더 나았으려나..?