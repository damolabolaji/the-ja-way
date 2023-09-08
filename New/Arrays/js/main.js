//MUSKETEERS

function createMusketeers() {
  Musketeers = ["athos", "portos", "aramis"];
  for (let i = 0; i <= Musketeers.length - 1; i++) {
    console.log(Musketeers[i]);
  }
  Musketeers.push("D'athagnan");
  Musketeers.forEach((element) => console.log(element));

  Musketeers.splice(2, 1);
  for (const musk of Musketeers) {
    console.log(musk);
  }
  return Musketeers;
}
// createMusketeers();

//SUM OF VALUES
const values = [3, 11, 7, 2, 9, 10];

let count = 0;

values.forEach((element) => {
  count += element;
  return count;
});
// console.log(count);

//ARRAY MAX
const valuesMax = [3, 11, 7, 2, 9, 10];
//create a number variable.
//if each elemnt is greater than the number variable,
//return the greater element of not, return the element

let max = 0;
function findMax() {
  //USING for loop
  //   for (let i = 0; i < valuesMax.length; i++) {
  //     if (valuesMax[i] > max) {
  //       max = valuesMax[i];
  //     }
  //   }

  //USING forEach
  //   valuesMax.forEach((element) => {
  //     if (element > max) {
  //       max = element;
  //     }
  //   });

  //USING for-of
  for (const item of valuesMax) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

console.log(findMax());

//LIST OF WORDS
//ask the user for a word until the user types 'stop'
//prompt the user and save the word in a variable
//use a while loop to keep prompting the user until they type 'stop'

function createArrayUntilStop() {
  newArray = [];
  let userWord = "";
  while (userWord !== "stop") {
    userWord = prompt("please type a word and press ok").toLowerCase();
    newArray.push(userWord);
  }
  newArray.pop();
  newArray.forEach((element) => console.log(element));
}

createArrayUntilStop();
