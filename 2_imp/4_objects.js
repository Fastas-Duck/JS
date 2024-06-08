
//Singleton object
// const user = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Raman"
tinderuser.isloggedIn = false

console.log(tinderuser);
console.log(Object.keys(tinderuser));           // type is array
console.log(Object.values(tinderuser));  
console.log(Object.entries(tinderuser));        // 2D Array : 1st=Key || 2nd=value
console.log(Object.hasOwnProperty("email") );   // check if object has this property or not


// OBJECTS INSIDE OBJECT
const regularuser ={
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Aman",
            middlename : "Singh",
            lastname : "Negi"
        }
    }
}

console.log(regularuser.fullname.userfullname.middlename);

// COMBINING OBJECT
// Object.assign(target, source) -- it copies from 1 or more sources object to target object..

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"c", 6:"d"}

const obj4 = Object.assign(obj1, obj2)          // all object merges in obj1 and obj4
console.log(obj4);
console.log(obj1);

const obj5 = Object.assign({}, obj2, obj3)      // {} is given to ensure all obj merger in target object i.e obj5 not obj2
console.log(obj5);
console.log(obj2);

// best to use spread operator(...) to combine object data
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6)

// when data come from database
const users = [
    {
        id : 12,
        email : "avc@gmail.com"
    },
    {
        id : 13,
        email : "adf@gmail.com"
    },
    {
        id : 14,
        email : "fgh@gmail.com"
    },
    {
        id : 15,
        email : "xzy@gmail.com"
    }
]

console.log(users[2].id);
console.log(users[2].email);
