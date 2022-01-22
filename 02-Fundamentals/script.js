// Enable Strict Mode (Write more secure robust code)
'use strict';

// Ex1: Undeclared Variable
// Uncaught ReferenceError: undeclaredVariable is not defined
//undeclaredVariable = "I am undeclared"; 
console.log("Strict Mode will not allow Undeclared Variable");

// Ex1: Reserved Word Variable Name
// Uncaught SyntaxError: Unexpected strict mode reserved word
//const interface = "Reserved Word";
//const private = "Private";
console.log("Strict Mode will not allow using Reserved Word as Variable");


// Functions

function logger() {
    console.log("Logging data...");
}

logger();
logger();

// Function with Arguments and Return Value

function functionWithArguments(x, y) {
    const result = `X=${x} Y=${y}`;
    return result;
}

console.log(functionWithArguments(5, 8));

// Function Anonymous

const anonymousFunction = function(x,  y) {
    return `Anonymous Function X=${x} Y=${y}`;
}

console.log(anonymousFunction(5, 8));

// Arrow Function

const arrowFunction = (x, y) => `Arrow Function X=${x} Y=${y}`;

console.log(arrowFunction(5, 8));

const arrowFunctionVerbose = (x, y) => {
    let z = x + y;
    return `Arrow Function Verbose: X=${x} Y=${y} Z=${z}`;
}

console.log(arrowFunctionVerbose(5, 8));


// Calling another function

function helperFunction(z) {
    return z * 2;
}

function entryFunction(x, y) {
    const x2 = helperFunction(x);
    const y2 = helperFunction(y);
    return `Entry Function X=${x2} Y=${y2}`;
}

console.log(entryFunction(5, 8));

// Arrays
const arrayYears = [2001, 2012, 2025];
console.log(arrayYears, arrayYears.length, arrayYears[0]);

const arrayNames = new Array("Mark", "Luke", "John");
console.log(arrayNames, arrayNames.length, arrayNames[arrayNames.length-1]);
arrayNames[0] = "Peter";
console.log(arrayNames, arrayNames.length, arrayNames[arrayNames.length-1]);

// Arrays - Bag
const arrayBag = ["50.1", 38.1, true, "85.7"];
console.log(arrayBag, arrayBag.length, arrayBag[arrayNames.length-1]);

// Array Functions (Push, Unshift, Pop, Shift, IndexOf, includes)

const mutableArray = ["Mark", "Luke", "John"];
mutableArray.push("Peter");
console.log(mutableArray);

mutableArray.unshift("Adam");
console.log(mutableArray);

const popedElement = mutableArray.pop();
console.log(mutableArray, popedElement);

const shiftedElement = mutableArray.shift();
console.log(mutableArray, shiftedElement);

console.log(mutableArray.indexOf("Luke"));
console.log(mutableArray.includes("Luke"));