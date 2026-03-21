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
// 14. CONTROL FLOW - COMPLETE GUIDE
// ===============================

console.log("========== CONTROL FLOW ==========\n");

// ===============================
// IF-ELSE / ELSE-IF
// ===============================

console.log("--- IF-ELSE / ELSE-IF ---\n");

// Simple if-else
function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log(checkAge(20)); // "Adult"
console.log(checkAge(15)); // "Minor"

// Multiple else-if
function checkTemperature(temp) {
  if (temp < 0) {
    return "Freezing";
  } else if (temp < 20) {
    return "Cold";
  } else if (temp < 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}

console.log(checkTemperature(-5));  // "Freezing"
console.log(checkTemperature(15));  // "Cold"
console.log(checkTemperature(25));  // "Warm"
console.log(checkTemperature(35));  // "Hot"

// Nested if-else
function checkLoginAccess(username, password, age) {
  if (username && password) {
    if (age >= 18) {
      return "Access granted";
    } else {
      return "Must be 18+ to access";
    }
  } else {
    return "Invalid credentials";
  }
}

console.log(checkLoginAccess("bibek", "1234", 20)); // "Access granted"
console.log(checkLoginAccess("bibek", "1234", 16)); // "Must be 18+ to access"

// ===============================
// SWITCH CASE
// ===============================

console.log("\n--- SWITCH CASE ---\n");

// Basic switch case
function getDayName(dayNumber) {
  switch(dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

console.log(getDayName(1)); // "Monday"
console.log(getDayName(5)); // "Friday"
console.log(getDayName(9)); // "Invalid day"

// Switch case with multiple values
function getSeasonByMonth(month) {
  switch(month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid month";
  }
}

console.log(getSeasonByMonth(1));  // "Winter"
console.log(getSeasonByMonth(7));  // "Summer"
console.log(getSeasonByMonth(10)); // "Autumn"

// Switch case for calculator
function calculate(a, b, operator) {
  switch(operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    case "%":
      return a % b;
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 0, "/")); // "Cannot divide by zero"

// ===============================
// 3. EARLY RETURN PATTERN
// ===============================

console.log("\n--- EARLY RETURN PATTERN ---\n");

// Grade calculator - Early Return Pattern
function getGrade(score) {
  // Handle invalid cases first (early return)
  if (score < 0 || score > 100) return "Invalid marks ❌";
  
  // Return as soon as condition is met (no else needed)
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 33) return "D";
  
  // If nothing matched above, it's a fail
  return "Fail";
}

// Test cases
console.log(getGrade(95));   // A+
console.log(getGrade(85));   // A
console.log(getGrade(75));   // B
console.log(getGrade(65));   // C
console.log(getGrade(50));   // D
console.log(getGrade(25));   // Fail
console.log(getGrade(105));  // Invalid marks ❌
console.log(getGrade(-5));   // Invalid marks ❌

// Email validation - Early Return
function validateEmail(email) {
  // Check for empty string first
  if (!email) return "Email is required";
  
  // Check minimum length
  if (email.length < 5) return "Email too short";
  
  // Check for @ symbol
  if (!email.includes("@")) return "Email must contain @";
  
  // Check for domain
  if (!email.includes(".")) return "Email must contain domain (.com, .org, etc.)";
  
  // All validations passed
  return "Valid email ✅";
}

console.log(validateEmail(""));                    // Email is required
console.log(validateEmail("abc"));                 // Email too short
console.log(validateEmail("bibek"));               // Email must contain @
console.log(validateEmail("bibek@gmail"));         // Email must contain domain
console.log(validateEmail("bibek@gmail.com"));     // Valid email ✅

// User permissions - Early Return
function checkUserPermission(user) {
  // Check if user exists
  if (!user) return "No user found";
  
  // Check if user is banned
  if (user.isBanned) return "User is banned";
  
  // Check if email is verified
  if (!user.isVerified) return "Email not verified";
  
  // Check if subscription is active
  if (!user.hasActiveSubscription) return "No active subscription";
  
  // All checks passed
  return "Full access granted ✅";
}

console.log(checkUserPermission(null)); // No user found
console.log(checkUserPermission({isBanned: true})); // User is banned
console.log(checkUserPermission({isBanned: false, isVerified: false})); // Email not verified
console.log(checkUserPermission({
  isBanned: false, 
  isVerified: true, 
  hasActiveSubscription: true
})); // Full access granted ✅

// ===============================
// 4. ROCK, PAPER, SCISSORS GAME
// ===============================

console.log("\n--- ROCK, PAPER, SCISSORS GAME ---\n");

function playRockPaperScissors(playerChoice, computerChoice) {
  // Validate player choice
  const validChoices = ["rock", "paper", "scissors"];
  if (!validChoices.includes(playerChoice.toLowerCase())) {
    return "Invalid choice! Choose rock, paper, or scissors";
  }
  
  // Normalize choices to lowercase
  const player = playerChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();
  
  // Check for tie
  if (player === computer) {
    return `Tie! Both chose ${player}`;
  }
  
  // Determine winner using early return pattern
  if (player === "rock" && computer === "scissors") return "You win! Rock beats Scissors";
  if (player === "rock" && computer === "paper") return "You lose! Paper beats Rock";
  
  if (player === "paper" && computer === "rock") return "You win! Paper beats Rock";
  if (player === "paper" && computer === "scissors") return "You lose! Scissors beats Paper";
  
  if (player === "scissors" && computer === "paper") return "You win! Scissors beats Paper";
  if (player === "scissors" && computer === "rock") return "You lose! Rock beats Scissors";
  
  return "Something went wrong!";
}

// Test the game
console.log(playRockPaperScissors("rock", "scissors"));     // You win! 
console.log(playRockPaperScissors("rock", "paper"));        // You lose! 
console.log(playRockPaperScissors("paper", "paper"));       // Tie! 
console.log(playRockPaperScissors("scissors", "paper"));    // You win! 
console.log(playRockPaperScissors("banana", "rock"));       // Invalid choice!

// ===============================
// 5. COMPARISON: ALL 3 PATTERNS
// ===============================

console.log("\n--- COMPARISON: IF-ELSE vs SWITCH vs EARLY RETURN ---\n");

// Same function, 3 different approaches

// Approach 1: If-Else
function getUserRoleIfElse(role) {
  if (role === "admin") {
    return "Full access";
  } else if (role === "moderator") {
    return "Can edit and delete";
  } else if (role === "user") {
    return "Can view only";
  } else {
    return "Invalid role";
  }
}

// Approach 2: Switch Case
function getUserRoleSwitch(role) {
  switch(role) {
    case "admin":
      return "Full access";
    case "moderator":
      return "Can edit and delete";
    case "user":
      return "Can view only";
    default:
      return "Invalid role";
  }
}

// Approach 3: Early Return
function getUserRoleEarlyReturn(role) {
  if (role === "admin") return "Full access";
  if (role === "moderator") return "Can edit and delete";
  if (role === "user") return "Can view only";
  return "Invalid role";
}

console.log("If-Else:", getUserRoleIfElse("admin"));
console.log("Switch:", getUserRoleSwitch("moderator"));
console.log("Early Return:", getUserRoleEarlyReturn("user"));

console.log("\n✅ Control Flow concepts completed!\n");