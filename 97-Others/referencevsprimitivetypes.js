'use strict;'

// Reference vs Primitive Types

// Primitive Type

const number1 = 1;
const numberx = number1; // value of number1 is copied to numberx


// Reference Type

const character = {
    "name": "Mark"
};

const characterx = character; // characterx is pointing to the same object

const charactery = { // Pull the attributes into a new object using spread operation
    ...character
}

characterx.name = "Foo";

console.log(character);   // Foo
console.log(characterx);  // Foo
console.log(charactery);  // Mark
