// IIFE -- Immediately Invoked Function Expression..
// An IIFE is a JavaScript function that runs as soon as it is defined. 
// Why Used -- Avoid polluting the global namespace

function abc()
{
    console.log(`DB CONNECTED`);
}
abc()

//---------------------------------------------------------------------------------------------

(function chai(){
    // named IIFE
    console.log(`Hello, my name is Aman`);
})();
//  Syntax ==>        (function definition)(execution call)


((name) => {
    // unknown IIFE 
    console.log(`Hi, myself ${name}`);
} )('Aman')
// Synatx  ==>      ((parameter) => {})(argument)

// when we use two or  more IIFE, the we add semi-colon (;) after every IIFE


/*
    ALL SYNATX :

        (function () {
        // …
        })();

        (() => {
        // …
        })();

        (async () => {
        // …
        })();
*/