//Write a program that accepts a month number (between 1 and 12),
//then shows the number of days of that month.
//Leap years are excluded.
//Incorrect inputs must be taken into account.

// let month = '';
// while (month == '' || (month < 1) || (month > 12)){
//     month = Number(prompt("please enter a number from 1 - 12"));

//     while(Number.isNaN(month)){
//         month = Number(prompt("need a number from 1 - 12"));

//         while((month < 1) || (month > 12)){
//             month = Number(prompt("should be a number from 1 - 12"))
//         }
//     }

// }

// if(month == 1){
//     console.log('january has 31 days');
// }else if (month == 2){
//     console.log('Febuary has 28 days');
// }else if (month == 3){
//     console.log('March has 31 days');
// }else if (month == 4){
//     console.log('April has 30 days');
// }else if (month == 5){
//     console.log('May has 31 days');
// }else if (month == 6){
//     console.log('June has 30 days');
// }else if (month == 7){
//     console.log('July has 31 days');
// }else if (month == 8){
//     console.log('August has 31 days');
// }else if (month == 9){
//     console.log('September has 30 days');
// }else if (month == 10){
//     console.log('October has 31 days');
// }else if (month == 11){
//     console.log('November has 30 days');
// }else if (month == 12){
//     console.log('December has 31 days');
// }

// //JAVA2.COM TUTORIAL

// var correct = "AA";
// var guess = "";
// while (guess != correct){
//   guess = prompt ("Question?", "");
//   if (guess == correct){
//     alert ("Correct");
//   } else {
//     alert ("that's not it...");
//   }
// }

// //MULTIPLICATION TABLE
// let number = prompt("enter a number from 1 - 10")

// if (number < 1 || number > 10){
//     number = prompt("enter a number from 1 - 10")
//     }
//     else if(Number.isNaN(number)){
//         number = prompt("enter a valid number from 1 - 10")
//     }
// else{
//     for(let i = 1; i < number; i++){
//         value = i * number;
//         console.log(`${number} x ${i} = ${value}`)
//     }
// }

// //YESS OR NO GAME

// let answer1 = "yes"
// let answer2 = "no"
// let userInput = ''

// while (userInput != answer1 && userInput != answer2){//while userInput is not the answer, run the code in the block
//     userInput = prompt('make a guess');
//     if (userInput == answer1 || userInput == answer2) {
//         alert("correct")
//     }else{
//         alert("thats not it")
//     }
// }

//FIZZ BUZZ

for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0 && num % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}
