// Dates

let myDate = new Date()
console.log(myDate);

console.log(typeof myDate);

console.log(myDate.toString());             // for improvised understanding 

console.log(myDate.toDateString());         // DAY - DATE

console.log(myDate.toLocaleString());       // DATE - TIME

console.log(myDate.toLocaleDateString());   // DATE

console.log(myDate.toTimeString());         // TIME


//--------------------------------------------------------------------------------------------

// DATE DECLARATION

// 1
let createDate = new Date(2023,3, 22)           // Month start from 0..
console.log(createDate);
console.log(createDate.toDateString());         // Sat - 22 April,2023

// 2
let newDate = new Date(2023,3, 22, 5, 3)           
console.log(newDate.toLocaleString());          // 22 April,2024 , 5:03:00 AM

// 3
let createDate1 = new Date("2023-01-15")           
console.log(createDate1.toLocaleString());   

// 4
let myTimeStamp = Date.now();
console.log(myTimeStamp);                   
console.log(createDate1.getTime());               // for comaprision of two dates in ms

//for converting date into second
console.log(Math.floor(Date.now()/1000));


//----------------------------------------------------------------------------------------------

let date1 = new Date()
console.log(date1);
console.log(date1.getMonth());
console.log(date1.getDay());
console.log(date1.getTime());



// for more refer to mdn