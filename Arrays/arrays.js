

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

let musketeers = ["Athos","Porthos","Aramis"]
for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}
musketeers.push("D\'Artagnan")

musketeers.forEach(items => {
    console.log(items);
})

musketeers.splice(2,1)

for (const knights of musketeers){
    console.log(knights)
}

//SUM OF VALUES
//Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).//
const values = [3, 11, 7, 2, 9, 10];
sum = 0
values.forEach(value => {
    sum += value
})
console.log(sum)

//ARRAY MAXIMUM
//Write a program that creates the following array, then calculates and shows the array's maximum value.

const valuesMax = [3, 11, 7, 2, 9, 10];
max = 0
valuesMax.forEach(item => {
    if(item > max ){
        max = item;
    }
})
console.log(max)

//LIST OF WORDS
//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let wordsArray = []

let word = ''
while(word != 'stop'){
    word = prompt('type a word each time to create an array. type stop when you are done')
    wordsArray.push(word);
    
}
    console.log(wordsArray)



