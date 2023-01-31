'use strict;'

// Array Destructuring

const [a, b] = ["A", "B", "C"];
console.log(a);
console.log(b);

const [a2, ,c2] = ["A", "B", "C"]; // Skip B
console.log(a2, c2);

// Object Destructuring

const {name, age} = {
  "name": "Mark",
  "age": 24,
  "occupation": "Apostle"
};

console.log(name);
console.log(age);

// Class Destructuring

class Character {
    id = "Luke";
    vitality = 98;
    attack = 12;
};

const luke = new Character();
console.log(luke);
const {id, vitality} = luke;
console.log(id, vitality);