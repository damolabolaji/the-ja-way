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
    this.gold = 10;
    this.key = 1;
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
        this.gold += target.gold;
        this.key += target.key;
      }
    }
    //else they cant, tell the user
    else console.log(`${this.name} cant attack. They DEAD`);
  }

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points. Character Inventory: ${this.gold} gold coins & ${this.key} keys`;
  }
}

const ladida = new Character("Ladida", 150, 40);
const gustus = new Character("Gustus", 170, 50);

const monster = new Character("bobo", 50, 20);

monster.attack(ladida);
ladida.attack(monster);
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

//ACCOUNT BALANCE

class AccountName {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
  credit(num) {
    this.balance += num;
  }
  describe() {
    return `${this.name} has ${this.balance}`;
  }
}

const amara = new AccountName("Amara", 900);
const koko = new AccountName("Koko", 700);
console.log(amara.describe());

amara.credit(100);
console.log(amara.describe());

//account object from previous exercise
// let theAccount = {
//   name: "Alex Madu",
//   balance: 0,
//   credit(num) {
//     return (this.balance += num);
//   },
//   describe() {
//     return `Account holder: ${this.name}\nbalance is $${this.balance}`;
//   },
// };

//A program that creates three accounts brad, george and sean

function makeThisAccounts(name1, name2, name3) {
  const brad = new AccountName(name1);
  const george = new AccountName(name2);
  const sean = new AccountName(name3);
  //store the accounts in an array
  let arrayOfAccounts = [brad, george, sean];
  //add 1000 to each account
  arrayOfAccounts.forEach((item) => {
    item.credit(1000);
    console.log(item.describe());
  });
  return arrayOfAccounts;
}
console.log(makeThisAccounts("bard", "gerg", "son"));
