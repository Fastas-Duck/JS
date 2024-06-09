let a = 10
const b =20
var c = 30

console.log(a);
console.log(b);
console.log(c);

//------------------------------------------------------------------------------------------------------

if(true)
{
    let a = 10
    const b =20
    var c = 30
    d = 25;
}

console.log(a);             // give error..
console.log(b);             // give error..
console.log(d);             // 30 -- which is wrong conceptually
console.log(c);             // 30 -- which is wrong as it defined inside if scope..
// That's why we dont use var keywrod...


//---------------------------------------------------------------------------------------------------------


let x = 550
if(true)
{
    let x = 10
    console.log(`Inside Function, Value of x : ${x}`);
}
    
console.log(x);             // return global value..


//----------------------------------------------------------------------------------------------------------

// two can access variable from one, but one cannot from two..

function one(){
    const username = "haman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   -- this give error [scope inside of two()]

     two()

}

one()


//-----------------------------------------------------------------------------------------------------------\

if (true) {
    const username = "aman"
    if (username === "aman") {
        const major = " CSE"
        console.log(username + major);
    }
    // console.log(major);   -- give error [scope inside inner if]
}

// console.log(username);      -- give error [scope inside if]


// ++++++++++++++++++++++++++++++++++++++++++ INTERSETING +++++++++++++++++++++++++++++++++++++++++++++++++

// Different way to create function

// 1
console.log(addone(5))

function addone(num){
    return num + 1
}


// 2
// addTwo(5)    --  give error -   cant access befor initializtion (considered as expression)
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))