
// Primitive Types
let age = 23; console.log(typeof age); //Number
let name = "Peter"; console.log(typeof name);
let flag = false; console.log(typeof flag);
let count; console.log(typeof count); //Undefined
let nothing = null; console.log(typeof nothing); //Null. Note typeof null is object.
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
let sum = 87 + 12;
let power = 3 ** 3;
let quotient = 293 / 16;
let average = (81 + 27 + 93) / 3;
console.log(sum, power, quotient, average);

// Calculate BMI
let mass = 78;
let height = 1.69;
let bmi = mass / height ** 2;
console.log(bmi);

// Strings and Template Literals
const email = "kratos@lightmail.com"
const rendered = `Email: ${email}`; // String Interpolation - Substitute email variable placeholder 
console.log(rendered);
const multiline = `{
    "status" : "Sent",
    "message" : "Message from ${email}"
}`;
console.log(multiline);

// Conditionals - If/Else Statements
const number = 65;
if (number > 50) {
    console.log(`${number} is greater than 50`);
} else if (number > 25) {
    console.log(`${number} is greater than 25`);
} else {
    console.log(`${number} is less than 25`);
}

// Type Conversion
let ageString = "32";
let ageNumber = Number(ageString); // Convert ageString to Number
let ageNan = Number("ThirtyTwo"); // Cannot Convert to Number results to NaN. Note typeof NaN is number
console.log(typeof ageString, ageString+1, typeof ageNumber, ageNumber+1, ageNan, typeof ageNan);

let salaryNumber = 758.58;
let salaryString = String(salaryNumber);
console.log(typeof salaryNumber, salaryNumber+1, typeof salaryString, salaryString+1);

// Type Coercion
console.log("Following Number will be coerced to a String: " + 87 + ".");
console.log("23" - "10" - 3, "23" + "10" - 3, "8" * "2", "8" / "2", "8" - "2", "8" + "2");

// Truthy and Falsy Values
console.log(Boolean(0), Boolean(""), Boolean(undefined), Boolean(null), Boolean(NaN)); // Falsy: 0, "", undefined, null, NaN
console.log(Boolean("T"), Boolean("NotEmpty"), Boolean({}), Boolean(1));

const balance = 1;
if (balance) {
    console.log(`Your current balance is ${balance}. Enter amount to withdraw.`);
} else {
    console.log("You currently have 0 balance.");
}

// Equality Operators
const efoo = 18;

if (efoo === 18) { console.log("efoo === 18.", efoo === 18); } // Strict Equality. No Type Coercion.
if (efoo === "18") { console.log("efoo === '18'.", efoo === "18"); } // Strict Equality. No Type Coercion.
else { console.log("efoo === '18' is false"); }

if (efoo == 18) { console.log("efoo == 18.", efoo == 18); }
if (efoo == "18") { console.log("efoo == '18'.", efoo == "18"); } // Loose Equality. 18 string is converted to Number

if (efoo !== 18) { console.log("efoo !== 18.", efoo !== 18); } // Strict Inequality. No Type Coercion.
else { console.log("efoo !== 18 is false"); }
if (efoo !== "18") { console.log("efoo !== '18'.", efoo !== "18"); } // Strict Inequality. No Type Coercion.

if (efoo != 18) { console.log("efoo != 18.", efoo != 18); }
else { console.log("efoo != 18 is false."); }
if (efoo != "18") { console.log("efoo != '18'.", efoo != "18"); } // Loose Inequality. 18 string is converted to Number
else { console.log("efoo != '18' is false."); }


// Boolean Logic - And Or Not
console.log("(10 > 58) && (17 > 5): ", (10 > 58) && (17 > 5));
console.log("(10 > 58) || (17 > 5): ", (10 > 58) || (17 > 5));
console.log("!(10 > 58) && (17 > 5): ", !(10 > 58) && (17 > 5));

// Switch statement
const day = "Monday";

switch (day) {
    case "Monday" : console.log("MON"); break;
    case "Wednesday" : console.log("WED"); break;
    case "Saturday" : 
    case "Sunday" : console.log("WEEKEND"); break;
    default : console.log("UNKNOWN"); break;
};

// Expressions / Statements
console.log(`Expression (85 - 18 + 12) evaluates to: ${85 - 18 + 12}`); // Expression
if (12 < 15) { console.log("Statement"); } // Statement

// Conditional Ternary Operation
const ternaryFoo = 27;
let ternary = (ternaryFoo > 24)? "Foo > 24" : "Foo <= 24";
console.log(`Foo=${ternaryFoo}: ${ternary}`);

const tipBill = 275;
let tip = (tipBill >=30 && tipBill <= 300)? tipBill * 0.15 : tipBill * 0.2;
console.log(`Bill=${tipBill} / Tip=${tip} / Total=${tipBill + tip}`);


// Versions & Releases
// ES5 ES2015, ES20016 -> ES2021 Yearly Release
// Backward Compatible
// Transpile ES6+ to ES5 using Babel for Compatibility