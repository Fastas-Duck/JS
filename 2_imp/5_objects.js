// OBJECT DESTRUCTURING
/*
    Object destructuring is a feature in JavaScript that allows you to extract properties from objects and bind them to variables. 
*/
const course = {
    coursename : "JS",
    price : "5000",
    instructor : "Aman"
}

console.log(course.instructor);             // sometime it doesn,t look clean

const {coursename, price, instructor:ins} = course                 // const {property} = obj_name
console.log(ins);
console.log(price);
console.log(coursename);


//------------------------------------------------------------------------------------------------------------------------------------------------------------

/*

API : In JavaScript, APIs (Application Programming Interfaces) allow you to interact with external services, data, and functions. 
      Types -- 1. Web Api       2.Third-party api       3. Node.js Api

Data from API is in form of : JSON          [both key :values in " "]
Dat can be in form of Object(syntax1) & Array(syntax2)..

Syntax1 :           {
                        "key1" : "value1",
                        "name" : "Aman",
                        "age" : 18,
                        "loggedIn" : false
                    }

Syntax 2 :          [                               // Object in form of array
                        {},
                        {},
                        {}
                    ]

*/