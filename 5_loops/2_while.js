//  The while loop loops through a block of code as long as a specified condition is true.

let index = 0
while (index <= 10) 
{
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

//  The do while loop execute the code block once, then it will repeat the loop as long as the condition is true.

let score = 11
do 
{
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
