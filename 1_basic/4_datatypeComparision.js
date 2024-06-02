console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)


console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)   // false
console.log(null == 0)  // false : different data type
console.log(null >= 0)  // true bcz null converted to number is 0


// strict check(===) : check data type and values also

console.log("2" === 2) // false