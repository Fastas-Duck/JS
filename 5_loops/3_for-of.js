// for-of loop  :  iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

// Array 
const arr = [1, 2, 3, 4, 5]

for (const i of arr) 
{
    console.log(i);    
}

const greetings = "Hello world!"
for (const greet of greetings) 
{
    console.log(`Each char is ${greet}`)
}


// Map
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

const M = new Map()
M.set('IN', "India")
M.set('USA', "United States of America")
M.set('Fr', "France")
M.set('IN', "India")

console.log(M);

// print each key value in form of array
for (const key of M) 
{
    console.log(key);
}

// print only key and value
for (const [key, value] of M) 
{
    console.log(key, ':-', value);
}

// for String
let language = "JavaScript";

let text = "";
for (let x of language) 
{
    text += x;
}
console.log(text);


// cannot iterate object with help of for-of loops

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject)                --   gives error..
// {
//     console.log(key, ':-', value);                  
// }