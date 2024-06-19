// falsy values :  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values : "0", 'false', " ", [], {}, function() {}..


const userEmail = "aman@singh"

if(userEmail)
{
    console.log("Got user Email..");
}
else
{
    console.log("Dont have user email..");
}

const user = []
if (user.length === 0) {
    console.log("Array is empty");
}
else
{
    console.log("Array is not empty");
}

//---------------------------------------------------------------------------------------------------------

// Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
let val3;
val1 = 5 ?? 10
val2 = null ?? 10           // dont take null - undefined values..
val3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);

let val4;
val4 = null ?? 10 ?? 20     // 1st value after null/undefined is taken in variable..

console.log(val4);

//------------------------------------------------------------------------------------------------------------
// Terniary Operator  --    condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

