// 12시 23분 시작
var array = ['319','680','180','690','129','620','762','689','762','318','368','710','720','710','629','168','160','689','716','731','736','729','316','729','729','710','769','290','719','680','318','389','162','289','162','718','729','319','790','680','890','362','319','760','316','729','380','319','728','716'];
var password = 10000;
var strPassword = password.toString();
var regex = new RegExp("[0-9*]" + "\\" + array[0].charAt(0) + "[0-9*]"+ "\\" +  array[0].charAt(1) + "[0-9*]"+ "\\" + array[0].charAt(2) + "[0-9*]", "g");
var index;
var cnt = 1;

while(true){
    //패턴으로 보았을때 비밀번호는 무조건 7로 시작하므로 7이 아닐경우엔 자리수를 올림
    if(strPassword.indexOf('7') != 0)
        password = password + Math.pow(10, strPassword.length - 1);

    for(var i=0; i<array.length; i++){  
        let firstIdx = strPassword.indexOf(array[i].charAt(0))
        let secondIdx = strPassword.indexOf(array[i].charAt(1))
        let thirdIdx = strPassword.indexOf(array[i].charAt(2))

        if(firstIdx != -1 && firstIdx < secondIdx && secondIdx < thirdIdx)
            cnt++;
        else 
            break;
    }

    // 모든 배열이 전부 일치했을 경우
    if(cnt == 50)
        break;

    console.log(password, cnt)
    password++;
    strPassword = password.toString();
    cnt = 0;
}

console.log(password);


// 180분 이상...
// Feedback 처음부터 로직을 잘못 세움... 정규표현식 쓰겠다고 뻘짓하고... 결국 1씩 올려가며 해결..
// 앞자리가 7이란걸 가정해서 그나마 몇분에 걸려 정답 도출...