
// number

const score = 400   
console.log(score);               

const age = new Number(67)        // age defined as number
console.log(age);

console.log(age.toString().length);
console.log(age.toFixed(2));          // after decimal, kitne digit tak

const num1 = 24.876
console.log(num1.toPrecision(3));      // show only 3 didgit, other round off

const num2 = 124.876
console.log(num2.toPrecision(3));

const num3 = 1124.876
console.log(num3.toPrecision(3));

const abc = 10000000
console.log(abc.toLocaleString('en-IN'));   // make it readable in indain format


//-----------------------------------------------------------------------------------------------------------

//MATHS


console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.7))  // round off
console.log(Math.ceil(4.3))
console.log(Math.floor(4.8))

console.log(Math.sqrt(625))       // square root of the number
console.log(Math.min(5, 7, 1, 3))
console.log(Math.max(5, 7, 1, 3))

console.log(Math.random())            // value always between [0-1]
console.log(Math.random()*10)         // 0.12 , 2.34, 0.004(it will be leass than 1, after *10)
console.log((Math.random()*10) + 1);      // 1 is added to make sure , value >=1
console.log(Math.floor(Math.random()*10) + 1);    // give natural number..

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// (max - min + 1) = to make sure value lies in range and +1 to avoid 0..
// min is added to make sure that random value generated is greator than 10..