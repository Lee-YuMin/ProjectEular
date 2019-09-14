let mapOfOne = {
    '0': '',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
}

let mapOfTen = {
    '1': 'teen',
    '2': 'twenty',
    '3': 'thirth',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
}

let sumOfOne = 0;

for (let i = 1; i < 100; i++) {
    if(i <= 19) {
        sumOfOne += mapOfOne[String(i)].length;
    } else {
        sumOfOne += mapOfTen[String(i).substr(0,1)].length + mapOfOne[String(i).substr(1,1)].length;
    }
}
sumOfOne *= 10;

let sumOfTen = 0;
let hundred = 'hundred and';

for (let j = 1; j < 10; j++) {
    sumOfTen += (mapOfOne[String(j)].length + hundred.replace(' ', '').length);
}
sumOfTen *= 100;

let thousand = 'one thousand';
let answer = sumOfOne + sumOfTen - ('and'.length * 9) + thousand.replace(' ', '').length;

console.log(answer);

// 50분