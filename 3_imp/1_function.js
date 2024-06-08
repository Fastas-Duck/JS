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
