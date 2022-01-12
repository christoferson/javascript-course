
// Primitive Types
let age = 23; console.log(typeof age); //Number
let name = "Peter"; console.log(typeof name);
let flag = false; console.log(typeof flag);
let count; console.log(typeof count); //Undefined
let nothing = null; console.log(typeof nothing); //Null
let symbol = Symbol.for("Spade"); console.log(typeof symbol); //Symbol
let zillion = BigInt("9374320"); console.log(typeof zillion); //BigInt
//Note: Dynamic Type - Data Types are inferred. Value has the Type. Variable only points to a Value.

// Declare Variable ( var / let / const )
// var - legacy, avoid
var variable = "Var Variable";
// let - mutatable variable, block scope
let mutable = "Variable";
// const - constant, immutable variable
const PI = 3.1415;
// no declaration keyword
// boo = "Boo"; // Valid but not recommended

// Operators, Operator Precedence

// Calculate BMI
let mass = 78;
let height = 1.69;
let bmi = mass / height ** 2;
console.log(bmi);