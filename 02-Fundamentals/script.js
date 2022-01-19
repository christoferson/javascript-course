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