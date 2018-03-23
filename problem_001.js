var sum=0;

for(var i=2; i<1000; i++){
    if(i%3==0 || i%5==0)
        sum += i;
}
console.log(sum)

// 2분
// Feedback : 1000보다 작은수니까 i<=1000 이 아니라 i<1000 이지...