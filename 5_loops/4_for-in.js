// for-in :  for in statement loops through the properties of an Object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key)
}

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}



// Dont print anything in Map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) 
// {
//     console.log(key);
// }