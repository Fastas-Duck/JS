// object created from constructor = singleton object is created..
// object created from literals = singleton object is not created..

// OBJECT LITERALS

const mySymbol = Symbol("key1")
const mySym = Symbol("key2")

const user = {                           // key : values
    name : "Aman",
    "full name" : "Aman Singh Negi",
    age : 23,
    mySym : "mykey2",
    [mySymbol] : "mykey1",                 
    // if we dont use square bracket, then type remain string and "mykey1" is treated as string..
    location : "Kotdwara",
    email : "xyz@gmail.com",
    isLoggedIn : false,
    lastLogin : ["Mon", "Fri"]
}

//----------------------------------------access object--------------------------------------
/*
        Use Dot Notation : If it is a static key..
                           Valid Identifier.. 
        Use Bracket Notation : If it is a dynamic key.. 
                               [Dynamic keys : evaluated from an expression during runtime]
                               Not a valid identifier(contain space or special character)
*/

console.log(user.email);
// console.log(user.full name);     -- cannot acces this type with .
// console.log(user.mySymbol);      -- it is wrong, output will be undefined
console.log(user.mySym);
console.log(typeof user.mySym);             // type is string


console.log(user["age"]);
console.log(user["full name"]);
console.log(user[mySymbol]);
console.log(typeof mySymbol);               // type is symbol

//------------------------------------------------------------------------------------

user.email = "abc@gmail.com"        // changing values..
console.log(user.email);

/*
Object.freeze(user);            // freeze object user -- further no changes can be done..

user.email = "mnop@microsoft.com"
console.log(user.email);            // no changes in email..
*/

//function can be treated as variable

user.greeting = function(){
    console.log("Hello user!! ");
}
console.log(user.greeting());

user.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);    // this used for current object instance..
}
console.log(user.greeting2());
