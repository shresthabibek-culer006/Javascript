// ===============================
// 1. VARIABLES (let, const)
// ===============================

const PI = 3.14;
let age = 19;

console.log("Pie Value is : ", PI);
console.log("Age : " , age);

age = age += 1; // Reassign allowed in let variable
console.log("Age : " , age);

/*
PI = 3.16; // Ressign  is not allowed in const variable because it is constable variable
console.log(PI);
*/

// ===============================
// 2. DECLARATION & INITIALIZATION
// ===============================

let username; // Declaration
username = "Bibek Shrestha"; // Initialization

let city = "Kathmandu" // Declaration and Initialization at a same time 

console.log("Username : " , username);
console.log("City : " , city);


// ===============================
// 3. SCOPE
// ===============================

let globalVar = "I'm a global Variable";

function scopeExample(){
    var functionVar = "This is functional Variable";

    if(true){
      let blockVar = "This a blocked based Variable";
      console.log(blockVar);
    }

    console.log(functionVar);
}

scopeExample();

console.log(globalVar);
/*
console.log(blockVar); shows ERROR blockVar is not defined because blockVar is initialized inside the fucntion.
*/

// ===============================
// 4. HOISTING
// ===============================

// Hoisting means once the variable is initialized js automatically creates the declaration on the top of the memory.
// TDZ = TEMPORAL DEAD ZONE means the time between hosting to initialization.

console.log(mainCharacter); // undefined - hoisted 
var mainCharacter = "Bibek";

/*

console.log(playerName); // Error - TDZ 
let playerName = "Shradiya";
console.log(playerName);

*/

// ===============================
// 5. DATA TYPES
// ===============================

// Primitive Data Types 
let writer = "MhrznSh";
let writer_age = 17;
let does_she_has_a_good_handwriting = true;
let kiss = null;
let Playscore = undefined;
let big_number = 12345678901234567890n;
let player_id = Symbol("id");


// Reference Data Types

const fruits = ["Pineapple","Banana","Mango","Apple","Kiwi","Orange"];

const good_girl = {
  girl_name : "Shradiya",
  girl_age: 17
}

function isSheMyBabe(){
  const her_name = "Shradiya Maharjan";
  console.log(her_name,"! She is my Babyyyyyyy💋");
}

isSheMyBabe();

// ===============================
// 7. TYPE COERCION
// ===============================

console.log(5+4); // 9 = it simply just do add
console.log("5"+4); // 54 = it concatenates doesn't do the math
console.log("5"-4); // 1 = it converts string to number because of - operator
console.log("Shradiya"-4); // NaN = String - Number it's basically the failed Number Operation

// ===============================
// 8. == vs ===
// ===============================

console.log(5 == "5");   // true = checks the value only
console.log(5 === "5");  // false = checks the type and the value 

console.log(0 == false); // 0 is false so false == flase it true
console.log(0 === false); // 0 is a number and false is a boolean so it's false

// ===============================
// 9. TRUTHY & FALSY
// ===============================

let value = "";

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy value detected");
}

// Falsy Value = false , "" , 0 , undefined , null , Nan , document.All
// Truthy Valur = true , 1 and everything are truthy except the falsy values.

// ===============================
// 10. FUNCTION EXAMPLE
// ===============================

function allowToVote(){
  let voter_name = "Haku Maicha";
  let voter_age = 17; 

  if (voter_age >= 18){
    console.log("You are allowed to vote for a ghanti 🔔")
  }else{
    console.log("You are not allowed to vote for a ghanti 🔔")
  }
}

console.log(allowToVote());

// ===============================
// 11. OBJECT + ARRAY PRACTICE
// ===============================

const student = {
  student_name : "Shradiya",
  student_age : 17,
  skills : ["HTML","CSS","JAVASCRIPT"]
}

console.log(student.student_name);
console.log(student.skills[1]);

// ===============================
// 12. LOOP PRACTICE
// ===============================

for(let i = 0 ; i <= 5 ; i++){
  console.log("Number : ",i);
}

// ===============================
// 13. NaN Example
// ===============================

let result = 2 * "text";
console.log(result);        // NaN
console.log(typeof result); // number


// =====================================
// 14. ARROW FUNCTIONS
// =====================================

const cube = num => {
  return num * num * num
}

console.log(cube(7));


const greatestAmongThree = (a, b, c) => {
  if (a > b && a > c) {
    return "A is the Greatest Among All";
  } 
  else if (b > a && b > c) {
    return "B is the Greatest Among All";
  } 
  else if (c > a && c > b) {
    return "C is the Greatest Among All";
  } 
  else {
    return "Some values are equal";
  }
};

console.log(greatestAmongThree(34,56,45));

// ===============================
// QUICK PRACTICE - ALL CONCEPTS
// ===============================

// ========== ARITHMETIC OPERATORS ==========
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 1000 (10^3)

// ========== COMPARISON OPERATORS ==========
console.log(5 == "5");   // true (loose)
console.log(5 === "5");  // false (strict) 
console.log(10 > 5);     // true
console.log(10 <= 10);   // true
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// ========== LOGICAL OPERATORS ==========
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)

// ========== ASSIGNMENT OPERATORS ==========
let x = 10;
x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6

// ========== INCREMENT/DECREMENT ==========
let count = 5;
count++;  // 6 (post-increment)
++count;  // 7 (pre-increment)
count--;  // 6 (post-decrement)

// ========== IF - ELSE ==========

// Multiple conditions
let player_username = "bibek";
let password = "1234";
if (player_username === "bibek" && password === "1234") {
    console.log("Login successful");
} else {
    console.log("Invalid");
}

// ========== TERNARY OPERATOR ==========
// Nested ternary
let num = 0;
let sign = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(sign); // "Zero"

// ========== ARRAYS ==========

// Creating arrays
let her_fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Access elements
console.log(her_fruits[0]); // "apple"
console.log(her_fruits[2]); // "mango"

// Array length
console.log(her_fruits.length); // 3

// Add elements
her_fruits.push("orange");     // Add to end
her_fruits.unshift("grapes");  // Add to start
console.log(her_fruits); // ["grapes", "apple", "banana", "mango", "orange"]

// Remove elements
her_fruits.pop();      // Remove from end
her_fruits.shift();    // Remove from start
console.log(her_fruits); // ["apple", "banana", "mango"]

// Check if element exists
console.log(her_fruits.includes("apple")); // true
console.log(her_fruits.includes("litchi")); // false
console.log(her_fruits.indexOf("banana"));   // 1

// Join array to string
console.log(her_fruits.join(", ")); // "apple, banana, mango"

// Slice (extract part)
let some = her_fruits.slice(0, 2);
console.log(some); // ["apple", "banana"]

// ========== FUNCTIONS ==========

// Function Declaration
function greet() {
    console.log("Hello!");
}
greet(); // Call function

// Function with parameters
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello("Bibek"); // "Hello, Bibek!"

// Function with return
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(5, 3);
console.log(sum); // 8

// Default parameters
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
greetUser();          // "Welcome, Guest!"
greetUser("Bibek");   // "Welcome, Bibek!"

// ========== ARROW FUNCTIONS ==========

// Arrow function with return
const addArrow = (a, b) => {
    return a + b;
}
console.log(addArrow(34, 545)); // 579

// Shorthand (implicit return)
const addShort = (a, b) => a + b;
console.log(addShort(10, 20)); // 30

// Single parameter (no parentheses needed)
const square = num => num * num;
console.log(square(5)); // 25

// ========== ARROW FUNCTIONS WITH ARRAY METHODS ==========
const new_numbers = [1, 2, 3, 4, 5];

// Map - double each number
const numbers_doubled = new_numbers.map(num => num * 2);
console.log(numbers_doubled); // [2, 4, 6, 8, 10]

// Filter - get even numbers
const numbers_evens = new_numbers.filter(num => num % 2 === 0);
console.log(numbers_evens); // [2, 4]

// Reduce - sum all numbers
const numbers_sum = new_numbers.reduce((total, num) => total + num, 0);
console.log(numbers_sum); // 15

// ========== PRACTICAL EXAMPLE ==========
const students = [
    {name: "Bibek", marks: 85},
    {name: "Shradiya", marks: 92},
    {name: "Haku", marks: 78}
];

const toppers = students.filter(student => student.marks >= 80);
console.log(toppers);

// ========== OBJECTS ==========

// Creating object
const person = {
    name: "Bibek Shrestha",
    age: 20,
    city: "Kathmandu",
    isStudent: true
};

// Access properties
console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation

// Modify properties
person.age = 21;
person.city = "Pokhara";
console.log(person);

// Add new property
person.country = "Nepal";
console.log(person);

// Delete property
delete person.isStudent;
console.log(person);

// ========== NESTED OBJECTS ==========
const user = {
    name: "Bibek",
    address: {
        city: "Lalitpur, Sundhara",
        street: "Thamel",
        zip: 44600
    }
};
console.log(user.address.city); // "Lalitpur, Sundhara" 

// ========== OBJECT WITH METHODS ==========
const player = {
    name: "Messi",
    goals: 700,
    celebrate: function() {
        console.log(`${this.name} celebrates!`);
    }
};
player.celebrate(); // "Messi celebrates!"

// ========== OBJECT METHODS ==========

const dav_student = {
    name: "Shradiya",
    age: 17,
    course: "Web Dev"
};

// Object.keys() - get all keys
console.log(Object.keys(dav_student)); // ["name", "age", "course"]

// Object.values() - get all values
console.log(Object.values(dav_student)); // ["Shradiya", 17, "Web Dev"]

// Object.entries() - get key-value pairs
console.log(Object.entries(dav_student));
// [["name", "Shradiya"], ["age", 17], ["course", "Web Dev"]]

// Check if property exists
console.log("name" in dav_student); // true
console.log("salary" in dav_student); // false

// Copy object (shallow copy)
const studentCopy = {...dav_student};
studentCopy.age = 21;
console.log(dav_student.age);     // 17 (original unchanged)
console.log(studentCopy.age);     // 21

// ========== MERGE OBJECTS ==========
const basic = {name: "Bibek", age: 20};
const extra = {city: "Kathmandu", country: "Nepal"};
const merged = {...basic, ...extra};
console.log(merged);
// {name: "Bibek", age: 20, city: "Kathmandu", country: "Nepal"}

// ========== OBJECT DESTRUCTURING ==========
const student_data = {
    his_name: "Bibek",
    his_age: 20,
    his_course: "Web Dev"
};

const {his_name, his_age, his_course} = student_data;
console.log(his_name);   // "Bibek"
console.log(his_age);    // 20
console.log(his_course); // "Web Dev"

// ========== ARRAY OF OBJECTS (Real World) ==========

const players = [
    {name: "Messi", goals: 700, team: "Barcelona"},
    {name: "Ronaldo", goals: 850, team: "Al Nassr"},
    {name: "Neymar", goals: 400, team: "Al Hilal"}
];

// Access specific player
console.log(players[0].name); // "Messi" - he is the goat 

// Loop through array of objects
players.forEach(player => {
    console.log(`${player.name} scored ${player.goals} goals`);
});

// Filter - find players with 500+ goals
const legends = players.filter(p => p.goals >= 500);
console.log(legends);

// Map - get only names
const player_names = players.map(p => p.name);
console.log(player_names); // ["Messi", "Ronaldo", "Neymar"]

// Find - get specific player
const messi = players.find(p => p.name === "Messi");
console.log(messi);

// Sort by goals (descending)
const sorted = [...players].sort((a, b) => b.goals - a.goals);
console.log(sorted);

// Add new player
players.push({name: "Haaland", goals: 250, team: "Man City"});
console.log(players);

// Practical example - total goals
const totalGoals = players.reduce((sum, player) => sum + player.goals, 0);
console.log(`Total goals: ${totalGoals}`);

// Print array elements using for loop
const colors = ["red", "blue", "green", "yellow","orange"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// Sum all numbers in array
const nums = [10, 20, 30, 40, 50];
let sums = 0;

for (let i = 0; i < nums.length; i++) {
    sums += nums[i];
}

console.log("Total:", sums); // 150

// Find largest number in array
const numss = [45, 23, 89, 12, 67];
let max = numss[0];

for (let i = 1; i < numss.length; i++) {
    if (numss[i] > max) {
        max = numss[i];
    }
}

console.log("Largest:", max); // 89

// Reverse array using loop
const bucket_fruits = ["apple", "banana", "mango", "orange"];
let reversed = [];

for (let i = bucket_fruits.length - 1; i >= 0; i--) {
    reversed.push(bucket_fruits[i]);
}

console.log(reversed); // ["orange", "mango", "banana", "apple"]


// Function to print numbers 1 to n
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(10); // Prints 1 to 10

// Function to calculate factorial
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

// Function to count vowels in a string
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("JavaScript")); // 3

// Function to print multiplication table
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable(5);
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ... up to 5 x 10 = 50

// Calculate shopping cart total
const cart = [
    {item: "T-shirt", price: 500},
    {item: "Jeans", price: 1500},
    {item: "Shoes", price: 2000}
];

const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(`Total: Rs. ${total}`); // Total: Rs. 4000






// ===============================
// END OF PRACTICE
// ===============================  

// SAKYOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO






















































































// -------------------------- DIFFERENT ADVANCE SESSION PRACITCE ----------------------------------

// ===============================
// JAVASCRIPT PRACTICE SESSION
// ===============================

// Practicing core JS concepts: string manipulation, array methods,
// built-in functions, and ES6 features like arrow functions and spread operator
// ===============================

// STRING MANIPULATION: Reverse a string
// Using split() to convert string to array, reverse() to flip it, join() to make it string again
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("shradiya")); // Output: "ayidarhs"

// ===============================

// PALINDROME CHECKER: Check if word reads same forwards and backwards
// Palindrome = word that's same when reversed (e.g., "mom", "racecar")
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("hello")); // false

// ===============================

// ARRAY METHOD: Multiply each element by 2 using map()
// map() creates new array by applying function to each element
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// ===============================

// STRING PROPERTY: Count total characters in a string
// .length property returns number of characters (including spaces)
let text = "Shradiya Maharjan";
console.log(text.length); // 17

// ===============================

// STRING METHOD: Convert string to uppercase
// .toUpperCase() transforms all letters to capital letters
let haha_name = "bibek shrestha";
console.log(haha_name.toUpperCase()); // "BIBEK SHRESTHA"

// ===============================

// MATH OBJECT + SPREAD OPERATOR: Find maximum number in array
// Math.max() finds largest number, ...spread unpacks array into individual arguments
let big_nums = [23, 54, 75, 76, 354, 556];
console.log(Math.max(...big_nums)); // 556

// ===============================

// MATH OBJECT + SPREAD OPERATOR: Find minimum number in array
// Math.min() finds smallest number from the array
let random_numbers = [436455, 4654, 665, 576, 577, 6677, 867657, 5764, 4675, 776];
let min_random_numbers = Math.min(...random_numbers);
console.log(min_random_numbers); // 576

// ===============================

// KEY CONCEPTS PRACTICED:

// ✓ String methods: split(), reverse(), join(), toUpperCase()
// ✓ Array methods: map()
// ✓ Arrow functions (=>)
// ✓ Spread operator (...)
// ✓ Math object: Math.max(), Math.min()
// ✓ String properties: .length
// ✓ Functions and return statements
// ===============================

// ===============================
// END PRACTICE FILE
// ===============================

console.log("Practice Finished ✅")























































/*

// Array Methods Practice - Map
const prices = [100, 200, 300, 400];
const discounted = prices.map(price => price * 0.9);
console.log(discounted); // 10% discount

// Array Methods Practice - Filter
const ages = [15, 22, 18, 30, 12, 25];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [22, 18, 30, 25]

// Array Methods Practice - Reduce
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // 15

// Object Destructuring
const user = {
    name: "Bibek",
    user_age: 20,
    user_city: "Kathmandu"
};
const {name, user_age, user_city} = user;
console.log(`${name} is ${age} years old from ${city}`);

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const person = {name: "Bibek", age: 20};
const updatedPerson = {...person, city: "Kathmandu"};
console.log(updatedPerson);

// Template Literals
const playerName = "Messi";
const goals = 700;
const message = `${playerName} has scored ${goals} goals in his career!`;
console.log(message);

// Ternary Operator
const score = 85;
const score_result = score >= 50 ? "Pass" : "Fail";
console.log(score_resultresult);

const userAge = 17;
const canVote = userAge >= 18 ? "Can vote" : "Cannot vote";
console.log(canVote);

// forEach Loop
const my_fruits = ["apple", "banana", "mango", "orange"];
my_fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// Find and FindIndex
const students = [
    {name: "Ram", marks: 85},
    {name: "Shyam", marks: 92},
    {name: "Hari", marks: 78}
];
const topStudent = students.find(student => student.marks > 90);
console.log(topStudent); // {name: "Shyam", marks: 92}

const index = students.findIndex(student => student.name === "Hari");
console.log(index); // 2

// Some and Every
const scores = [45, 67, 89, 92, 78];
const hasHighScore = scores.some(score => score > 90);
console.log(hasHighScore); // true

const allPassed = scores.every(score => score >= 40);
console.log(allPassed); // true

// Sort and Reverse
const nums = [5, 2, 8, 1, 9];
const ascending = [...nums].sort((a, b) => a - b);
console.log(ascending); // [1, 2, 5, 8, 9]

const descending = [...nums].sort((a, b) => b - a);
console.log(descending); // [9, 8, 5, 2, 1]

*/