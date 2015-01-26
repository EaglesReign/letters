// Phil Hofer
// 1/19/15
// letters.js
// This program creates an object that stores individual letters 
// in an array and has a function for displaying the letters as a single word.

//This array is what will be used to store the individual characters 
var letterArray = ["H", "E", "L", "L", "O"];

//This function joins all of the individual characters together and prints
//them to the console.
function singleWord() {
  console.log(letterArray.join(""));
}

//This calls the function singleWord().
singleWord();
