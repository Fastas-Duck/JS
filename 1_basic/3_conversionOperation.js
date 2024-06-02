let score = 33
// console.log(typeof score);


/*
    "33" => 33
    "33abc" => NaN (Not A Number)
    true => 1, false=> 0
    null => 0
    undefined => NaN

let num = "33abc"
console.log(num);
let valueInNumber = Number(num)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let num1 = null
console.log(num1);
let valueInNumber1 = Number(num1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let num2 = undefined
console.log(num2);
let valueInNumber2 = Number(num2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let num3 = true
console.log(num3);
let valueInNumber3 = Number(num3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

*/


let loggedIn = "hitesh"
let boolLoggedIn = Boolean(loggedIn)
// console.log(boolLoggedIn);

/*
    0 => false , 1 => true
    "xyz" => true
    "" => false
*/

let someNum = 33
let stringNum = String(someNum)
// console.log(stringNum);
// console.log(typeof stringNum);

// *************************************************************
//Operations


let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(3**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " Aman"
let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);               // 12
console.log(1 + "2");               // 12
console.log("1" + 2 + 2);           // 122
console.log(1 + 2 + "2");           // 32

let gameCounter = 100
++gameCounter;
console.log(gameCounter)
console.log(gameCounter++)
console.log(++gameCounter)
