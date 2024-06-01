/*      
    JavaScript variable is simply a name of storage location. 
    There are two types of variables in JavaScript : local variable and global variable.

    Identifiers - name given to varaibles/constant..
*/

const accountId = 12243
let accountEmail = "amann@gmail.com"
var accountPassword = "12345"
accountCity = "Kotdwara"          // This is not good practice
let accountState;        // if value not given, then it is undefined

/*  
    Prefer not to use var - issue in block scope and functional scope..
    Use only let & const..
*/

// accountId = 23     const variable cannot be changed
console.log(accountId);

accountEmail = "abc@gmail.com"
accountPassword = "abcde"
accountCity = "Dehradun"

console.log(accountEmail);
console.log(accountPassword);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
    let & const -   Block Scope..
                    must be Declared before use.. (const = assign value at declaration)
                    cannot be Redeclared in the same scope..

    var  -  doesn't have scope (global)..
            can be re-declared and re-assigned..
            bind to this..

*/

//------------------------------------------------------------------------------------------

// CONSTANT ARRAY 
// We can change the elements of a constant array
const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Toyota";              // You can change an element

cars.push("Audi");                // You can add an element

console.log(cars)
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR (No Re-assign)

//------------------------------------------------------------------------------------------


// CONSTANT OBJECT
// You can change the properties of a constant object..
const car = {type:"Fiat", model:"500", color:"white"};

car.color = "red";                          // You can change a property

car.owner = "Johnson";                      // You can add a property

console.log(car)
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR (No Re-assign)