// iterate through array and choose smallest number

function smallestNumber(array) {
  var number = array[0];
  for(var i = 0;i< array.length; i++) {
    number < array[i] ? number : number = array[i]
  }
  return number;
}

// smallestNumber([10, 9, 2, 8, 6, 4])
// -------------------------------------------------------
// take sentence, split into array, iterate through and choose smallest word

function smallestWord(sentence) {
  var splitString = sentence.split(" ")
  var string = splitString[0];
  for(var i = 0;i< splitString.length; i++) {
    string.length < splitString[i].length ? string : string = splitString[i]
  }
  return string;
}

// smallestWord("this is a sentence")
// -------------------------------------------------------
// take array of words, return the third greatest number in the array
// (two versions: one with sort, one without)

// version 1 -- not sorting the array first
function maxt(array1) {
    return Math.max(...array1);
  }

function unsortedThirdGreatest(array) {
  var numbers = array.slice();
  for(var i = 0; i < 2; i ++) {
    numbers.splice(numbers.indexOf(maxt(numbers)),1)
  }
  return maxt(numbers);
}

// unsortedThirdGreatest([5, 11, 10, 8, 2, 6])

//version 2 -- sorting the array first

function sortedThirdGreatest(array) {
  return array.sort(function(a, b) {return a - b})[array.length-3]
}

// sortedThirdGreatest([5, 11, 10, 8, 2, 6])
// -------------------------------------------------------
// method that returns the most common letter in a string

function mostCommonLetter(string) {
  var splitString = string.split("");
  var count = {};
  for(var i = 0; i < string.length; i++){
    count[splitString[i]] = count[splitString[i]] ?  count[splitString[i]] += 1 : count[splitString[i]] = 1
  }
  return Object.keys(count)[Object.values(count).indexOf(Math.max(...Object.values(count)))]
}

// mostCommonLetter("ttttrggr")
// ------------------------------------------------------
// add commas into a number to look like a standard number

function injectCommas(number) {
  return number.toString().split("").reverse().join("").match(/.{1,3}/g).join(",").split("").reverse().join("")
}

// injectCommas(23451);
// injectCommas(8468247468450);
// -------------------------------------------------------
// write a method that returns the factorial of a given number

function recursiveFactorial(num){
  if (num <= 1) {
    return 1
  }
  return num * recursiveFactorial(num-1)
}

// var result = recursiveFactorial(3);
// console.log(result);
// -------------------------------------------------------
// write a method that takes an array of numbers and returns true if any
// number in the array, added up to its index, equals 10.


function addToTen(array) {
  for(var i = 0; i < array.length; i++) {
    if ((array[i] + i) == 10) {
      return true;
    }
  }
  return false;
}

// console.log(addToTen([2, 9, 3, 4]));
// -------------------------------------------------------
// write method that prints out factors for each number from 1 to a given max.

function getFactors(num) {
}

// getFactors(8);
// -------------------------------------------------------
// method that takes an array of numbers, and returns a new array with all the
// numbers doubled

function doubler(array) {

}

// doubler([1, 2, 3, 4, 5]);
// -------------------------------------------------------
// Write a function oddball_sum(numbers), which takes in an array of
// integers and returns the sum of all the odd elements.

function oddballSum(array) {

}

// oddballSum([1, 4, 5, 3, 1])
// -------------------------------------------------------
// method that takes two numbers and returns the greatest common factor
function euclidGreatestCommonFactor(numOne, numTwo){

}

// euclidGreatestCommonFactor(30, 12);
// euclidGreatestCommonFactor(45, 330);
// euclidGreatestCommonFactor(345, 230);
// -------------------------------------------------------
// Write a function disemvowel(string), which takes in a string,
// and returns that string will all the vowels removed.

function disemvowel(string) {

}

// disemvowel("this sentence might still be readable");
// -------------------------------------------------------
// method that takes a number and returns true/false depending on if it
// is prime

function primeTester(num) {

}

// console.log(primeTester(37));
// console.log(primeTester(22));
// -------------------------------------------------------
// adding up items in an array

function sumUpArray(array) {

}

// sumUpArray([1, 2, 3, 4, 5, 6]);
// -------------------------------------------------------
// sum of integers from 1 to given num

function sumToMax(max) {

}

// sumToMax(6);
// -------------------------------------------------------
// reverse a string || reverse an array

function reverseString(string) {

}

// reverseString("string");

function reverseArray(array) {

}

// reverseArray([1, 2, 3, 4, 5]);
// -------------------------------------------------------
// find the mode in a given array

function findMode(array) {

}

findMode([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]); // [3, 4]
findMode([1, 1, 1, 1, 2, 3, 4]) // [1]
// -------------------------------------------------------
// count vowels in a string

function countVowels(string) {

}

// countVowels("talekijohu");
// -------------------------------------------------------
// recursive palindrome

function recursivePalindrome(word) {

}

// console.log(recursivePalindrome("radar"));
// console.log(recursivePalindrome("tart"));
// -------------------------------------------------------
// method that takes a book title and capitalizes appropriately

function capitalizeBookTitles(titleString) {

}

// capitalizeBookTitles("the life changing magic of tidying up");
// -------------------------------------------------------
// 'nearby az': Write a method that takes a string in and returns true if the
// letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.

function nearbyAZ(string) {

}

// console.log(nearbyAZ("azmmnl")) // true
// console.log(nearbyAZ("ammnz")) // false
// console.log(nearbyAZ("ammnzammz")) // true
// -------------------------------------------------------
// Write a method that takes an array of numbers. If a pair of numbers
// in the array sums to zero, return true. If no pair of numbers sums to zero,
// return false.

function twoSum(array) {

}

// twoSum([1, 2, 3, 3, -2, 4, 5]);
// ------------------------------------------------------
// method that takes an array of words ["grasping", "turning", "running",
// "fighting"]
// and selects a word that contains "turn"

function wordInArray(array, wordToFind) {

}

// wordInArray(["turning", "running", "hanging", "instruct"], "tru")
// wordInArray(["turning", "running", "hanging", "instructing"], "run")
// -------------------------------------------------------
// fahrenheit to celsius conversion & celsius to fahrenheit

function temperatureConversion(temp, toNewType) {

}

// temperatureConversion(36, "Fahrenheit") // 98.8
// temperatureConversion(98, "Celsius") // 36.66...7
// -------------------------------------------------------
// method that returns true if num passed to it is a power of 2, otherwise
// return false
// my method: It repeatedly divides x, the 32-bit unsigned integer being
// tested, by 2. It divides until either the quotient becomes 1, in which case
// x is a power of two, or the quotient becomes odd before reaching 1, in which
// case x is not a power of two.
function checkIfPowerOfTwo(num) {

}

// checkIfPowerOfTwo(2 * 2 * 2 * 2);
// checkIfPowerOfTwo(2 * 2 * 3);
// -------------------------------------------------------
// method that finds perfect squares in a given array

function findPerfectSquares(array) {

}

// findPerfectSquares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 4, 9
// -------------------------------------------------------
// Write a method that takes in a string and an array of indices in the
// string. Produce a new string, which contains letters from the input
// string in the order specified by the indices of the array of indices.

function rearrangeString(string, indices) {

}

// rearrangeString("sing", [3, 1, 2, 0]) // gins
// -------------------------------------------------------
// Write a method that takes in a string and returns the number of
// letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of
// letters that repeat, not the number of times they repeat in the string.

function repeatingLetters(string) {

}

// repeatingLetters("aaaddt") // 2
// -------------------------------------------------------
// Write a function lucky_sevens?(numbers), which takes in an array of integers
// and returns true if any three consecutive elements sum to 7.

function luckySevens(array) {
  for (var i=0; i < array.length - 2; i++) {
    var addThree = (array[i] + array[i + 1] + array[i + 2])
    if (addThree === 7) {
      return true;
    }
  }
  return false;
}

// console.log(luckySevens([2, 0, 3, 4])) // true
// console.log(luckySevens([3, 3, 3, 3, 6, 6, 0, 1])) // true
// console.log(luckySevens([1, 2, 1, 2])) // false
// -------------------------------------------------------
// given a word, return true if that word's vowels are in alphabetical order.

function orderedVowels(string) {

}

// orderedVowels("asterix") // true
// orderedVowels("funeral") // false
// -------------------------------------------------------
// bubble sort an array

function bubbleSort(array) {

}

// bubbleSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
// bubbleSort([9, 2, 7, 4, 5, 1, 6, 3, 8]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// -------------------------------------------------------
// In Ruby, Array has a `uniq` method that removes duplicates from an array. It
// returns the unique elements in the order in which they first appeared:
//
// [1, 2, 1, 3, 3].uniq # => [1, 2, 3]
//
// Write your own `uniq` method, called `my_uniq`; it should take in an
// Array and return a new array. It should not call `uniq`.

function myUniq(array) {

}

// myUniq([1, 1, 1, 2, 2, 2, 3, 3, 3])
// -------------------------------------------------------
//   Implement a Rock, Paper, Scissors game. The method `rps` should take
//   a string (either "Rock", "Paper" or "Scissors") as a parameter and
//   return the computer's choice, and the outcome of the match. Example:
//
// rps("Rock") # => "Paper, Lose"
// rps("Scissors") # => "Scissors, Draw"
// rps("Scissors") # => "Paper, Win"

function rockPaperScissors(string) {

}

// rockPaperScissors("Paper");
// -------------------------------------------------------
//   Implement a Swingers game. The method `swingers` should take an
//   array of couple arrays and return the same type of data structure,
//   with the couples mixed up. Assume that the first item in the couple
//   array is a man, and the second item is a woman. Don't pair a person
//   with someone of their own gender (sorry to ruin your fun). An
//   example run of the program:
//
// swingers([
//   ["Clyde", "Bonnie"],
//   ["Paris", "Helen"],
//   ["Romeo", "Juliet"]
// ])

function swingers(array) {

}

// swingers([["Clyde", "Bonnie"], ["Paris", "Helen"], ["Romeo", "Juliet"]]);
// -------------------------------------------------------
// Write a method `substrings` that will take a `String` and return an
// array containing each of its substrings.

function substrings(string) {

}

// substrings("cat") // ["c", "ca", "cat", "a", "at", "t"]
// -------------------------------------------------------
// To represent a *matrix*, or two-dimensional grid of numbers, we can
// write an array containing arrays which represent rows:
//
// rows = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]
//
// row1 = rows[0]
// row2 = rows[1]
// row3 = rows[2]
// Write a method, `my_transpose`, which will convert between the
// row-oriented and column-oriented representations.

function transpose(array) {

}

// transpose([[0,0,0], [1, 1, 1], [2, 2, 2]])
// transpose([[0,0,0,0,0], [1,1,1,1,1], [2,2,2,2,2]])
// -------------------------------------------------------
// Martha has created a hash with letter symbols as keys to represent items that
// start with their keys. However, she realized everything is off by one letter.
//
// wrong_hash =
// { :a => "banana", :b => "cabbage", :c => "dental_floss", :d => "eel_sushi" }
//
// Write a program `hash_correct` that takes this wrong hash and returns the
// correct one.

function fixOffset(hashObject) {

}

// fixOffset({a: "banana", b: "cabbage", c: "dental_floss", d: "eel_sushi"});
// fixOffset({r: "quail", s: "ramen", t: "spicy_tuna", u: "turkey"})
