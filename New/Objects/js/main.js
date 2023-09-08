//REVISION EXERCISE
//add a property names 'xp' with initial 0.
//this propeety should appeaer in chracter description
const Mikael = {
  name: "Mikael",
  health: 130,
  strength: 40,
  decribe() {
    return `${this.name} has ${this.health} health points, ${this.stregth}`;
  },
};

Mikael.xp = 0;
Mikael.health -= 20;
Mikael.strength += 10;
Mikael.xp += 15;

Mikael.describeWithXP = function () {
  return `${this.name} has ${this.health} health points, ${this.strength} strength with ${this.xp}XP remaining`;
};

console.log(Mikael.describeWithXP());

//MODELLING A DOG
//Create a dog with property values name, species, size

const dog = {
  name: "barbie",
  species: "chihuahua",
  size: "2kg",
  barkPlease() {
    return `grrrr`;
  },
};
console.log(`${dog.name}, is a ${dog.species} weighing ${dog.size}`);
console.log(`look ${dog.name}! a cat! ${dog.barkPlease()}`);

// throaway program
//function createDog(name, species, size, bark) {
//   dog = { name, species, size, bark };
//   return dog;
// }

// createDog("bingo", "chihuahua", "2kg", function barkPlease() {
//   return `grrrr`;
// });
// createDog("Tao", "poodle", "10kg", function barkPlease() {
//   return `gr..grr`;
// });

// console.log(`${dog.name}, is a ${dog.species} weighing ${dog.size}`);
// console.log(`lool ${dog.name}! a cat! ${dog.bark()}`);
// //the problem of the above if that, it will keep reassigning 'dog' everytime the function gets called

//MODELLING A CIRCLE
//Create a circle object with methods to calc area and circumfrence
// let r = Number(prompt("Enter the circle radius"));
// const circle = {
//   radius: r,
//   circumfrence() {
//     return 2 * Math.PI * this.radius;
//   },
//   area() {
//     return Math.PI * Math.pow(this.radius, 2);
//   },
// };
// console.log(circle.circumfrence());
// console.log(circle.area());

//MODELLING A BANK ACCOUNT
//write a program that creates an "account" object with name (Alex), balance (0),
// and credit method adding arguments passed in to update the balance
//add a describe method that print the account description

let theAccount = {
  name: "Alex Madu",
  balance: 0,
  credit(num) {
    return (this.balance += num);
  },
  describe() {
    return `Account holder: ${this.name}\nbalance is $${this.balance}`;
  },
};

console.log(theAccount.credit(250));
console.log(theAccount.describe());
console.log(theAccount.credit(-80));
console.log(theAccount.describe());
