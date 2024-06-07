const marvelHero = ["thor","Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// aaray can take any values in it
marvelHero.push(dc)                 // array(dc) is stroed as element
console.log(marvelHero);
console.log(marvelHero[3]);
console.log(marvelHero[3][2]);

// after concat , all element need to be stored in new array
const hero = marvelHero.concat(dc)               // actually merge 2 array
console.log(hero);

// // spread two array -- most preferred way to merge two+ aaray
const all_hero = [...marvelHero, ...dc]
console.log(all_hero);

// // 3d array : array inside array inside array
const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const arr2 = arr1.flat(Infinity);        // depth inside flat
console.log(arr2);


console.log(Array.isArray("Aman"));             // check if aman is an array
console.log(Array.from("Aman"));                // convert to array

// make array from variable..
let s1 = 100, s2 = 200, s3 = 300;
console.log(Array.of(s1, s2, s3));

console.log(Array.from({name : "Aman"}));       // gives empty array until we specify