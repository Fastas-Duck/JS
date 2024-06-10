//  Conditional statements are used to perform different actions based on different conditions.

/*
        Use 'if' to specify a block of code to be executed, if a specified condition is true..
        Use 'else' to specify a block of code to be executed, if the same condition is false..
        Use 'else if' to specify a new condition to test, if the first condition is false..
        Use 'switch' to specify many alternative blocks of code to be executed..
*/

//      <, >, <=, >=, ==, =, !=, ===, !==

let temp = 41;
if(temp == 41)
{
    console.log("Temperature less than 50");
}
else
{
    console.log("Temperature more than 50");
}

//------------------------------------------------------------------------------------------------

let balance = 1000
if(balance < 500)
{
    console.log("Less than 500");
}
else if(balance < 750)
{
    console.log("less than 750, greator than 500");
}
else
{
    console.log("Greator than 750");
}

//-------------------------------------------------------------------------------------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("User Logged In");
}