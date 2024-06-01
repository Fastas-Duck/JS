"use strict";     // treat all JS Code as newer version

// alert(3+3)  -- using nodejs, not browser

console.log(3+3); 

/*
    ECMA Script -- original documentation(tc39)
    Mdn -- user friendly, easy to understand
*/

// JavaScript provides different data types to hold different types of values.

let name = "Aman"           // String
let age = 23                // Number : with or without decimals
let x = BigInt("123456789012345678901234567890");       // no decimal in bigint
let canVote = true          // Boolean : true or false
let state;                  // Undefined : not defined
let aadhar = null           // null : no value at all
// symbol ==> unique

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

console.log(person);
console.log(cars)
console.log(date)

//----------------------------------------------------------------------------------------

console.log(typeof "aman")
console.log(typeof name)
console.log(typeof age)
console.log(typeof null)            // object
console.log(typeof undefined)       // undefined

