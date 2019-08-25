const getFactorial = v => {
    if(v === 0)
        return 1;
    else
        return v * getFactorial(v - 1); 
}

let route = getFactorial(40) / (getFactorial(20) * getFactorial(20));

console.log(route);

// 20분