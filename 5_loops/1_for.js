
//  for(declaration + initialization; condition; increment/decrement)

for (let step = 0; step < 5; step++) 
{
    // Runs 5 times, with values of step 0 through 4.
    console.log(`Walking east one step : ${step}`);
}


for (let index = 0; index < 10; index++) 
{
    const element = index;
    console.log(element);
}

//--------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) 
{
    console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) 
    {
        console.log(i + '*' + j + ' = ' + i*j );
    }
    
}

//-----------------------------------------------------------------------------------------------------------

let myArray = ["flash", "superman", "batman"]
for (let i = 0; i <= myArray.length; i++) 
{
    // const element = myArray[i];
    console.log(myArray[i]);
}

//-----------------------------------------------------------------------------------------------------------
//  break and continue

//  The break statement "jumps out" of a loop.
for (let index = 1; index <= 20; index++) {
    if (index == 5) 
    {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

//  The continue statement "jumps over" one iteration in the loop.
for (let index = 1; index <= 8; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}