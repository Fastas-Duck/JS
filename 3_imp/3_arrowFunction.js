// this keyword..

const user = {
    username: "Aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);              // talk about cuurent values/context
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);           // gives empty object (global)

//-------------------------------------------------------------------------------------------------------
// this keyword in Function 

function chai(){
    let username = "hitesh"
    console.log(this);
    console.log(this.username);     // cannot use this inside functions..
}

chai()

//---------------------------------------------------------------------------------------------------------

const abc = function () {
    let username = "Ram"
    console.log(this.username);             // gives undefined - this not used inside function
}
abc();


//
const xyz =  () => {
    let username = "Radha"
    console.log(this);                  // empty object
    console.log(this.username);         // undefined
}
xyz()


//---------------------------------------------------------------------------------------------------------------

// Arrow Function

// 1st way -- Basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5, 6));

// 2nd way -- implicit return
const multiplyTwo = (num1, num2) =>  num1 * num2
console.log(multiplyTwo(5, 6));

// 3rd way -- use paranthesis
const addThree = (num1, num2, num3) => ( num1 + num2 + num3)
console.log(addThree(5, 6, 8));

// How to return object -- use curly braces inside paranthesis..
const returnObj = () => ({username: "ABCDE"})
console.log(returnObj());


/*
        Syntax :

        let myFunction = (a, b) => a * b;  
                       [parameter] => [definition]   

*/

