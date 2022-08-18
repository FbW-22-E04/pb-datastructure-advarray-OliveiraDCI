"use strict";
console.clear();
console.log("-- 1 -----------------------------");

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
let total = orders.reduce((acc, el) => acc + el.amount, 0);
console.log(total);

console.log("-- 2 -----------------------------");
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const addOne = (arr) => arr.map((el) => el + 1);
console.log(addOne(arrayOfNumbers));

console.log("-- 3 -----------------------------");
const filterEvens = (arr) => arr.filter((el) => el % 2 == 0);
console.log(filterEvens([1, 2, 3, 11, 12, 13])); // returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); // returns [22,2,110,6]

console.log("-- 4 -----------------------------");
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (arr, str) =>
  arr.filter((el, i, arr) => arr[i].toLowerCase().includes(str.toLowerCase()));
console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

console.log("-- 5 -----------------------------");
const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20

console.log("-- 6 -----------------------------");
let arrNums = [4, 16, 9];
const squareRoot = (arr) => arr.map((el) => Math.sqrt(el));
console.log(squareRoot(arrNums));
