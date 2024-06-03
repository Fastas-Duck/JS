const name = "aman"          // Declare 1
const age = 23

//    console.log(name + age);       -- old type 

console.log(`Hello, My name is ${name} & my age is ${age}`);

// DECLARE 
const game = new String('valo-rant')

console.log(game);
console.log(game[1]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());

console.log(game.charAt(2));
console.log(game.indexOf('t'));

const substr = game.substring(0,4)       // 4 is not included
console.log(substr);

const str = game.slice(5,9)         // -ve value included
console.log(str);

const newstr = "     aman   "
console.log(newstr);
console.log(newstr.trim());

const url = "https://aman.com/aman%50negi"
console.log(url);
console.log(url.replace('%50', '-'))


console.log(url.includes('aman'))            // check if aman in present in url/string
console.log(url.includes('singh')) 

console.log(game.split('-'))           // inside braces we give seperator