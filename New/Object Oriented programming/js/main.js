// class Character {
//   constructor(name, health, strength) {
//     this.name = name;
//     this.health = health;
//     this.strength = strength;
//     this.xp = 0; // XP is always zero for new characters
//   }
//   // Attack a target
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength;
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       );
//       target.health -= damage;
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`);
//       } else {
//         target.health = 0;
//         const bonusXP = 10;
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
//         );
//         this.xp += bonusXP;
//       }
//     } else {
//       console.log(`${this.name} can’t attack (they've been eliminated)`);
//     }
//   }
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
//   }
// }

//create character class
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
  }

  //create 'attack' method to attack target and cause damage
  attack(target) {
    //if they are healthy(health is above 0) then they can attack
    if (this.health > 0) {
      const damage = this.strength;
      target.health -= damage;
      //console.log the player's stats
      console.log(
        `${this.name} attacks ${target.name} causing ${damage} points`
      );
      console.log(`${target.name} has ${target.health} health points left`);

      if (target.health < 0) {
        target.health = 0;
        const bonuxXP = 10;
        this.xp += bonuxXP;
        //console.log the attackers's stats
        console.log(
          `${target.name} has been eliminated and won ${bonuxXP} experience points`
        );
      }
    }
    //else they cant, tell the user
    else console.log(`${this.name} cant attack. They DEAD`);
  }

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  }
}

const ladida = new Character("Ladida", 150, 40);
const gustus = new Character("Gustus", 170, 50);

const monster = new Character("bobo", 50, 20);

monster.attack(ladida);
ladida.attack(monster);

console.log(ladida.describe());
console.log(monster.describe());

//ADD DOG CONSTRUCTOR
// TODO: define the Dog class here

class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }

  bark() {
    if (this.size > 60) {
      return `GRR Grr`;
    } else return `woof, woof`;
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
