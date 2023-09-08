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
