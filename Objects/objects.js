// // TODO: create the character object here
// const aurora = {
//     health: 150,
//     strength: 25,
//     xp: 0,
//     describe() {
//         return `Aurora has ${this.health} points, ${this.strength}
//          as strength and ${aurora.xp} xp points`
//     }
// }

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

// //CREATE A  DOG

// // TODO: create the dog object here
// const dog = {
//     name: 'Fang',
//     species: 'barhound',
//     size: 75,
//     bark(){
//         return `Grrr! Grrr!!!`
//     }
// }

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// //CIRCLE OBJECT
// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here
// const circle = {
//     radius: r,
//     circumference(){
//         return 2 * Math.PI * r
//     },
//     area(){
//         return Math.PI * Math.pow(r, 2)
//     }
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// //MODELING BANK ACCOUNT
// // Write a program that creates an account object with the following characteristics:
// // A name property set to "Alex".
// // A balance property set to 0.
// // A credit method adding the (positive or negative) value passed as an argument to the account balance.
// // A describe method returning the account description.
// // Use this object to show its description, crediting 250, debiting 80, then show its description again.

// const accountHolder = {
//     name: 'Alex',
//     balance: 0,
//     describe(){
//         return `Owner: ${accountHolder.name}, balance: ${accountHolder.balance}`
//     },
//     credit(addCredit){
//         this.balance += addCredit
//         return this.balance
//     }
// }

// console.log( accountHolder.describe())
// console.log( accountHolder.credit(250))
// console.log( accountHolder.credit(-80))
// console.log( accountHolder.describe())
