/*
    Array : resizable
            contain different data types
            zero- based index
            Shallow copy is made : same reference point
                                   changes in copies, affect original one..
*/


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["SuperMan", "BatMan", "spiderMan"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);
console.log(myArr.length());

// Array methods

myArr.push(6)                           // add elemnt at last
myArr.push(7)
console.log(myArr);
myArr.pop()                             // delete last element
console.log(myArr);


// not suitable for large number of element(Ex. 1000000)
myArr.unshift(9)                        // add element to first after shifting
console.log(myArr);
myArr.shift()                           // delete 1st element
console.log(myArr);

console.log(myArr.includes(9));         // -1 => if not present
console.log(myArr.includes(4));         // 1 => if present
console.log(myArr.indexOf(3));
console.log(myArr.indexOf(6));

console.log(myArr);
const newArr = myArr.join()             // add all array element to string
console.log(newArr);
console.log(typeof newArr);             // type - string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)          // element of array from 1 to 3 [but not 3]
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)         // 1-3 portion of array element are removed
console.log("C ", myArr);
console.log(myn2);
