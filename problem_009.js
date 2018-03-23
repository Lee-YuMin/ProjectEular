var m=2, n=1;
var x,y,z;

while(true){
    if(m <= n){
        m++;
        n = 1;
    }

    x = (m * m) - (n * n);
    y = 2 * m * n;
    z = (m * m) + (n * n);

    console.log(x,y,z)
    if(x+y+z == 1000)
        break;

    n++;
}

console.log(x * y * z);

// 20분
// Feedback : 피타고라스 정리표 참고할 때 공식 착각