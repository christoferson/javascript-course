'use strict;'

// Properties
// ES6 properties declared inside constructor using this keyword
// ES7 properties declared directly inside the class.

// Methods
// ES6 function declared using regular syntax
// ES7 function declared using arrow notation

class Character {
    
    vitality = 99;
    
    constructor(id) {
        this.id = id;
    };
    
    emote() {
      console.log(`Character ${this.id} emotes.`);
    };
    
    wave = () => {
      console.log(`Character ${this.id} waves.`);
    };
    
};

const character = new Character("Sabrina");
console.log(`Name: ${character.id} Vitality: ${character.vitality}`);
character.emote();
character.wave();

class Wizard extends Character {

    constructor(id, mana) {
        super(id);
        this.mana = mana;
    }

};

const wizard = new Wizard("Willow", 1028);
console.log(`Name: ${wizard.id} Vitality: ${wizard.vitality} Mana: ${wizard.mana}`);

