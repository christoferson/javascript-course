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