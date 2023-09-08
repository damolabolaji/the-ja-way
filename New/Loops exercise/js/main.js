//exercises for Loops manusript

//Carousel
//write a program that launches a carousel for 10 times,
//showing the turn number each time
//Refacor: turn number is given by the user
//Refacor: to check that number given by the user is within the specified limit

//create a variable to store the numbr of turns
//create a loop to print out the carousel turns

// let turn = prompt("please enter a number bwtween 1 and 20");
// while (turn <= 0 || turn > 20) {
//   turn = prompt("please enter a number between 1 and 20");
// }
// for (i = 1; i <= turn; i++) {
//   console.log(`carousel turns is ${i}`);
// }

//arrow function  that calculates the celcius from the farenheight value
// const celciusCalc = (temp) => (5 / 9) * (temp - 32);

// let journal = [];
// function addEntry(events, squirell) {
//   journal.push({ events, squirell });

//   return journal;
// }
// //this creates an object inside journal with the property name
// //of the parameters and the value of the arguements
// addEntry(["tree"], ["trunk"]);
// console.log(journal);

//Carousel
//write a program that launches a carousel for 10 times,
//showing the turn number each time
//Refacor: turn number is given by the user
//Refacor: to check that number given by the user is within the specified limit

//create a variable to store the numbr of turns
//create a loop to print out the carousel turns

// let turns = 10;
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let turns = prompt("write the number of turns you want");

// for (let i = 1; i <= turns; i++) {
//   console.log(i);
// }

// let turn = prompt("write the number of turns you want betwenn 10 and 20");

// while (turn < 10 || turn > 20) {
//   turn = Number(prompt("write the number of turns you want betwenn 10 and 20"));
// }

// for (let i = 1; i <= turn; i++) {
//   console.log(i);
// }

//Parity
//write a program that checks for odd and even nmbers from 0 to a user input number

// let number = prompt("pleaee pick a number from 1 - 20");
// while (isNaN(number)) {
//   number = prompt("pleaee pick a number from 1 - 20");
// }
// while (number < 1 || number > 20 || isNaN(number)) {
//   number = prompt("number should be from 1 - 20");
// }
// for (let i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is an even number`);
//   } else {
//     console.log(`${i} is an odd number`);
//   }
// }

//MULTIPLICATION TABLE
//write a program that aske the user for a number and shows the multiplicarion table forthis number
// let number = prompt("please pick a number from 2 - 9");
// while (isNaN(number) || number < 2 || number > 9) {
//   number = prompt("please make sure you are entering a number from 2 - 9");
// }

// for (let i = 0; i <= number; i++) {
//   console.log(`${i} x ${number} = ${i * number}`);
// }

//EITHER YES OR NO
//the program asks the user to enter a word until either yes or no is typed
// let theWord = prompt("type one word").toLowerCase();

// while (theWord === "" || theWord.length > 20 || !isNaN(theWord)) {
//   theWord = prompt("type one word");
// }

// if (theWord === "yes" || theWord === "no") {
//   console.log(theWord);
//   alert(`that is right`);
// } else {
//   alert(`thats not quite right`);
// }

//FIZZBUZZ
//fizz if divisible by 3
//buzz if divisible by 5 and not by 3
//fizzbuzz if divisible by both

function fizzBuzz() {
  num = 100;
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 3 !== 0 && i % 5 == 0) {
      console.log("buzz");
    } else console.log(i);
  }
}
fizzBuzz();
