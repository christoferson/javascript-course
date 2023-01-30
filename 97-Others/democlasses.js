class Character {
    constructor(id) {
        this.id = id;
    }
};

const character = new Character("Sabrina");
console.log(`Name: ${character.id}`);

class Wizard extends Character {

    constructor(id, mana) {
        super(id);
        this.mana = mana;
    }

};

const wizard = new Wizard("Willow", 1028);
console.log(`Name: ${wizard.id} Mana: ${wizard.mana}`);

