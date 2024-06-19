// forEach()

// Declaring Array
const coding = ["js", "ruby", "java", "python", "cpp"]

// 1st way
coding.forEach( function (val){
    console.log(val);
} )

// 2nd way
coding.forEach( (item) => {
    console.log(item);
} )

// 3rd way -- declare funt. seperate and pass function in parameter forEach..
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// 4th way 
/* The function takes 3 arguments:
                                    The item value
                                    The item index
                                    The array itself
*/
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

//----------------------------------------------------------------------------------------------------------------------

// Declaring Array of object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )


//----------------------------------------------------------------------------------------------------

const code = ["js", "ruby", "java", "python", "cpp"]

code.forEach((item) => {
    console.log(item);
})

// forEach() doesn't return any value..
const val = code.forEach((item) => {
    console.log(item);
    return item;
})
console.log(val);