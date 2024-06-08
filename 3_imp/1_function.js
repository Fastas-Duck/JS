/*
        A JavaScript function is a block of code designed to perform a particular task.
        A JavaScript function is executed when "something" invokes it (calls it).
*/

function callname ()
{
    console.log("H");
    console.log("O");
    console.log("L");
    console.log("E");
}

callname();

// function with parameter

function addTwoNum (num1, num2)         // num1 and num2 are parameters..
{
    console.log(num1 + num2);
}

addTwoNum(4,5)                  // 4 & 5 are arguments..
addTwoNum(3, "7")
addTwoNum(6, null)


// return the value from function..

function addNum (num1, num2)       
{
    let res = num1 + num2;
    return res;
    // return num1 + num2;
}
const res = addNum(8,9)
console.log(res);


//--------------------------------------------------------------------------------------------

function loginMessage (username) 
{
    return `${username}, just logged In.`
}
console.log(loginMessage("Aman"))
console.log(loginMessage())                 // undefined, just logged In

// If username is not passed, then ask user to enter username to avoid above mistake..
function loginUserMessage (username) 
{
    if(username === undefined)
        {
            console.log("Please enter the username !!!")
            return
        }
    return `${username}, just logged In.`
}
console.log(loginUserMessage()) 



// If you dont want send enter the username message and set default name..
function loginUser (username = "User") 
{
    return `${username}, just logged In.`
}
console.log(loginUser()) 




//--------------------------------------------------------------------------------------------------

/*  Suppose in shopping cart, you dont know how much user will add item, 
    How to write a function that can take multiple parameters..
*/

function calculatePrice(...cost)            // rest operator (...)
{
    return cost                 // This will return array of cost, in which we can perform operation..
}
console.log(calculatePrice(100, 450, 230,300));


function calculateCartPrice(val1, val2, ...cost)            
{
    return cost                 
}
console.log(calculateCartPrice(100, 450, 230,300));



/*
    The rest operator puts the rest of some specific user-supplied values into a array. 
    But the spread syntax expands iterables into individual elements.
*/


//------------------------------------------------------------------------------------------------------------------

// Passing Object to function..

const user = {
    user_name : "aman",
    price : 200
}

function handleObject(anyobject)
{
    console.log(`Username : ${anyobject.user_name} , Price : ${anyobject.price}`);
}

handleObject(user)                      // 1st way 

handleObject({                          // 2nd way - pass object inside function call
    user_name : "Sam",
    price : 233
})


//-------------------------------------------------------------------------------------------------------------------

// Passing Array to Function..

const arr1 = [120, 300, 450, 600]

function returnSecondValue(array)
{
    return array[1]
}

console.log(returnSecondValue(arr1));               // 1st way
console.log(returnSecondValue([20, 40, 60, 80]));   // 2nd way