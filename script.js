// ===============================
// 1. VARIABLES (let, const, var)
// ===============================

// const - Cannot be reassigned
const PI = 3.14;
console.log("PI Value is:", PI);

// let - Can be reassigned
let age = 19;
console.log("Age:", age);
age = age + 1; // or age += 1
console.log("Updated Age:", age);

// var - Old way (avoid)
// var is function scoped, not block scoped

/*
// This will throw error - const cannot be reassigned
PI = 3.16; 
console.log(PI);
*/

// ===============================
// 2. DECLARATION & INITIALIZATION
// ===============================

// Declaration only
let username;
console.log("Username (before):", username); // undefined

// Initialization
username = "Bibek Shrestha";
console.log("Username (after):", username);

// Declaration + Initialization together
let city = "Kathmandu";
console.log("City:", city);

// ===============================
// 3. SCOPE (Global, Block, Function)
// ===============================

// Global Scope - accessible everywhere
let globalVar = "I'm a global variable";

function scopeExample() {
  // Function Scope - accessible only inside function
  var functionVar = "This is a functional variable";
  
  if (true) {
    // Block Scope - accessible only inside { }
    let blockVar = "This is a block-scoped variable";
    console.log("Inside block:", blockVar);
  }
  
  console.log("Inside function:", functionVar);
  // console.log(blockVar); // ERROR! blockVar not accessible here
}

scopeExample();
console.log("Global:", globalVar);
// console.log(blockVar); // ERROR! blockVar is not defined

// ===============================
// 4. HOISTING & TDZ
// ===============================

// var - Gets hoisted with undefined
console.log(mainCharacter); // undefined (not an error)
var mainCharacter = "Bibek";
console.log(mainCharacter); // "Bibek"

// let/const - Temporal Dead Zone (TDZ)
/*
console.log(playerName); // ReferenceError! (TDZ)
let playerName = "Shradiya";
console.log(playerName);
*/

// ===============================
// 5. DATA TYPES
// ===============================

// ========== PRIMITIVE DATA TYPES ==========

// String
let writer = "MhrznSh";
console.log("Writer:", writer, "Type:", typeof writer);

// Number
let writer_age = 17;
console.log("Age:", writer_age, "Type:", typeof writer_age);

// Boolean
let does_she_has_a_good_handwriting = true;
console.log("Good handwriting:", does_she_has_a_good_handwriting, "Type:", typeof does_she_has_a_good_handwriting);

// Null
let kiss = null;
console.log("Kiss:", kiss, "Type:", typeof kiss); // "object" (JS bug!)

// Undefined
let playerScore = undefined;
console.log("Score:", playerScore, "Type:", typeof playerScore);

// BigInt
let big_number = 12345678901234567890n;
console.log("Big number:", big_number, "Type:", typeof big_number);

// Symbol
let player_id = Symbol("id");
console.log("Player ID:", player_id, "Type:", typeof player_id);

// ========== REFERENCE DATA TYPES ==========

// Array
const fruits = ["Pineapple", "Banana", "Mango", "Apple", "Kiwi", "Orange"];
console.log("Fruits:", fruits, "Type:", typeof fruits); // "object"

// Object
const good_girl = {
  girl_name: "Shradiya",
  girl_age: 17
};
console.log("Good girl:", good_girl, "Type:", typeof good_girl);

// Function
function isSheMyBabe() {
  const her_name = "Shradiya Maharjan";
  console.log(her_name, "! She is my Babyyyyyyy💋");
}
isSheMyBabe();
console.log("Function type:", typeof isSheMyBabe);

// ===============================
// 6. TYPE COERCION
// ===============================

console.log("\n--- TYPE COERCION ---");

// + operator (addition or concatenation)
console.log(5 + 4);         // 9 (both numbers, addition)
console.log("5" + 4);       // "54" (string + number = concatenation)

// - operator (only math)
console.log("5" - 4);       // 1 (string converted to number)
console.log("Shradiya" - 4); // NaN (failed number operation)

// ===============================
// 7. == vs === (COMPARISON)
// ===============================

console.log("\n--- == vs === ---");

// == (loose equality - allows type coercion)
console.log(5 == "5");      // true (converts "5" to 5)
console.log(0 == false);    // true (both falsy)

// === (strict equality - checks type AND value)
console.log(5 === "5");     // false (different types)
console.log(0 === false);   // false (number vs boolean)

// ===============================
// 8. TRUTHY & FALSY VALUES
// ===============================

console.log("\n--- TRUTHY & FALSY ---");

let value = "";

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy value detected");
}

// ===============================
// 9. FUNCTIONS
// ===============================

console.log("\n--- FUNCTIONS ---");

// Arrow Function - Simple
const cube = num => {
  return num * num * num;
};
console.log("Cube of 7:", cube(7));

// Arrow Function - Complex logic
const greatestAmongThree = (a, b, c) => {
  if (a > b && a > c) {
    return "A is the Greatest Among All";
  } else if (b > a && b > c) {
    return "B is the Greatest Among All";
  } else if (c > a && c > b) {
    return "C is the Greatest Among All";
  } else {
    return "Some values are equal";
  }
};
console.log(greatestAmongThree(34, 56, 45));

// Grade calculator function
const getGrade = score => {
  if (score <= 32) return "Fail";
  else if (score >= 33 && score <= 59) return "D";
  else if (score >= 60 && score <= 69) return "C";
  else if (score >= 70 && score <= 79) return "B";
  else if (score >= 80 && score <= 89) return "A";
  else if (score >= 90 && score <= 100) return "A+";
  else return "Invalid Score";
};
console.log("Grade for 18:", getGrade(18)); // "Fail"

// ===============================
// 10. OBJECTS & ARRAYS
// ===============================

console.log("\n--- OBJECTS & ARRAYS ---");

const student = {
  student_name: "Shradiya",
  student_age: 17,
  skills: ["HTML", "CSS", "JAVASCRIPT"]
};

// Accessing object properties
console.log("Student name:", student.student_name);
console.log("Second skill:", student.skills[1]); // "CSS"

// ===============================
// 11. LOOPS
// ===============================

console.log("\n--- LOOPS ---");

// For loop
for (let i = 0; i <= 5; i++) {
  console.log("Number:", i);
}

// ===============================
// 12. NaN EXAMPLE
// ===============================

console.log("\n--- NaN EXAMPLE ---");

let result = 2 * "text";
console.log("Result:", result);        // NaN
console.log("Type:", typeof result);   // "number" (failed number operation)

// Falsy values: false, 0, "", null, undefined, NaN, document.all
// Truthy values: Everything else!

// ===============================
// 13. OPERATORS
// ===============================

console.log("\n--- OPERATORS ---");

// ========== ARITHMETIC OPERATORS ==========
let a = 10, b = 3;
console.log("a + b =", a + b);   // 13
console.log("a - b =", a - b);   // 7
console.log("a * b =", a * b);   // 30
console.log("a / b =", a / b);   // 3.333...
console.log("a % b =", a % b);   // 1 (remainder)
console.log("a ** b =", a ** b); // 1000 (10^3)

// ========== COMPARISON OPERATORS ==========
console.log(5 == "5");    // true (loose)
console.log(5 === "5");   // false (strict)
console.log(10 > 5);      // true
console.log(10 <= 10);    // true
console.log(5 != "5");    // false
console.log(5 !== "5");   // true

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
console.log("Final x:", x);

// ========== INCREMENT/DECREMENT ==========
let count = 5;
count++;   // 6 (post-increment)
++count;   // 7 (pre-increment)
count--;   // 6 (post-decrement)
console.log("Count:", count);

console.log("\n--- TERNARY OPERATOR ---");

// Simple ternary
let num = 0;
let sign = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log("Sign:", sign); // "Zero"

// Grade system using ternary
let player_score = 88;
let grade = player_score >= 90 ? "A" : 
            player_score >= 70 ? "B" : 
            player_score >= 50 ? "C" : "Fail";
console.log("Grade:", grade); // "B"

// Player status
let player_points = 100;
let player_status = player_points >= 100 ? "Gold" : 
                    player_points >= 50 ? "Silver" : 
                    player_points < 50 ? "Bronze" : "Invalid";
console.log("Player Status:", player_status); // "Gold"


// ===============================
// 14. CONTROL FLOW (if-else)
// ===============================

console.log("\n--- IF-ELSE ---");

// Multiple conditions with && (AND)
let player_username = "bibek";
let password = "1234";

if (player_username === "bibek" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

// Voting eligibility example
function allowToVote() {
  let voter_name = "Haku Maicha";
  let voter_age = 17;
  
  if (voter_age >= 18) {
    console.log("You are allowed to vote for a ghanti 🔔");
  } else {
    console.log("You are not allowed to vote for a ghanti 🔔");
  }
}

allowToVote();



