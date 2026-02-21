



// ========================================
// VARIABLES PRACTICE
// ========================================

// let - can reassign
let userName = "Bibek Shrestha";
userName = "Shradiya"; // Works
console.log("game_username:", userName);

// const - cannot reassign
const PI = 3.14159;
// PI = 3.14; // Error!
console.log("PI:", PI);

// var - old way (avoid)
var oldVar = "Don't use me";
console.log("Old var:", oldVar);

// ========================================
// PRIMITIVE DATA TYPES
// ========================================

// String
let myName = "Bibek Shrestha";
let college = 'Bachelor Degree';
let greeting = `Hello ${myName}`; // Template literal
console.log("\n--- STRINGS ---");
console.log(myName, typeof myName);
console.log(greeting);

// Number
let age = 19;
let price = 99.99;
let negative = -42;
console.log("\n--- NUMBERS ---");
console.log(age, typeof age);
console.log(price, typeof price);

// Boolean
let isStudent = true;
let hasGraduated = false;
console.log("\n--- BOOLEAN ---");
console.log(isStudent, typeof isStudent);

// Undefined
let score;
console.log("\n--- UNDEFINED ---");
console.log(score, typeof score);

// Null
let emptyValue = null;
console.log("\n--- NULL ---");
console.log(emptyValue, typeof emptyValue); // "object" - JS bug!

// Symbol
let id1 = Symbol("user");
let id2 = Symbol("user");
console.log("\n--- SYMBOL ---");
console.log(id1, typeof id1);
console.log(id1 === id2); // false - symbols are unique!

// BigInt
let bigNumber = 9007199254740991n;
console.log("\n--- BIGINT ---");
console.log(bigNumber, typeof bigNumber);

// ========================================
// REFERENCE DATA TYPES
// ========================================

// Array
let fruits = ["Apple", "Banana", "Orange"];
console.log("\n--- ARRAY ---");
console.log(fruits, typeof fruits); // "object"

// Object
let user = {
  name: "Bibek",
  age: 19,
  isStudent: true
};
console.log("\n--- OBJECT ---");
console.log(user, typeof user);

// Function
function greet() {
  return "Hello World!";
}
console.log("\n--- FUNCTION ---");
console.log(greet(), typeof greet);

// ========================================
// DYNAMIC TYPING
// ========================================

console.log("\n--- DYNAMIC TYPING ---");
let dynamicVar = 42;
console.log(dynamicVar, typeof dynamicVar); // number

dynamicVar = "Now I'm a string";
console.log(dynamicVar, typeof dynamicVar); // string

dynamicVar = true;
console.log(dynamicVar, typeof dynamicVar); // boolean

// ========================================
// TYPE COERCION
// ========================================

console.log("\n--- TYPE COERCION ---");

// + operator (addition OR concatenation)
console.log("5 + 5 =", 5 + 5);           // 10 (addition)
console.log('"5" + 5 =', "5" + 5);       // "55" (concatenation)
console.log('"Hello" + 5 =', "Hello" + 5); // "Hello5"

// - operator (only math)
console.log('"5" - 1 =', "5" - 1);       // 4 (converts to number)
console.log('"10" - 2 =', "10" - 2);     // 8
console.log('"Hi" - 1 =', "Hi" - 1);     // NaN

// ========================================
// COMPARISON: == vs ===
// ========================================

console.log("\n--- == vs === ---");

// Loose equality (==)
console.log('5 == "5":', 5 == "5");      // true (type coercion)
console.log('0 == false:', 0 == false);  // true

// Strict equality (===)
console.log('5 === "5":', 5 === "5");    // false (different types)
console.log('0 === false:', 0 === false); // false
console.log('5 === 5:', 5 === 5);        // true

// ========================================
// TRUTHY vs FALSY
// ========================================

console.log("\n--- TRUTHY vs FALSY ---");

// Falsy values (only 7!)
console.log("Boolean(false):", Boolean(false));     // false
console.log("Boolean(0):", Boolean(0));             // false
console.log('Boolean(""):', Boolean(""));           // false
console.log("Boolean(null):", Boolean(null));       // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN));         // false

// Truthy values (everything else!)
console.log('Boolean("hello"):', Boolean("hello")); // true
console.log("Boolean(1):", Boolean(1));             // true
console.log("Boolean([]):", Boolean([]));           // true
console.log("Boolean({}):", Boolean({}));           // true

// ========================================
// COMMON CONFUSIONS
// ========================================

console.log("\n--- COMMON CONFUSIONS ---");

// Why is NaN a "number"?
let result = 2 * "Bibek"; // Failed number operation
console.log("Result:", result, "Type:", typeof result); // NaN, "number"

// undefined vs null
let notAssigned;
let intentionallyEmpty = null;
console.log("Not assigned:", notAssigned, typeof notAssigned);
console.log("Intentionally empty:", intentionallyEmpty, typeof intentionallyEmpty);

// "5" + 1 vs "5" - 1
console.log('"5" + 1 =', "5" + 1);  // "51" (concatenation)
console.log('"5" - 1 =', "5" - 1);  // 4 (math only)

// ========================================
// SCOPE EXAMPLES
// ========================================

console.log("\n--- SCOPE EXAMPLES ---");

// Global scope
let globalVar = "I'm global";

{
  // Block scope
  let blockVar = "I'm block scoped";
  const blockConst = "Me too!";
  var functionVar = "I escape blocks!";
  
  console.log("Inside block:", blockVar);
  console.log("Inside block:", globalVar); // Can access global
}

console.log("Outside block:", functionVar); // var escapes!
// console.log(blockVar); // Error! Can't access

function testScope() {
  let funcVar = "I'm function scoped";
  console.log("Inside function:", funcVar);
  console.log("Inside function:", globalVar); // Can access global
}
testScope();
// console.log(funcVar); // Error! Can't access

// ========================================
// HOISTING EXAMPLES
// ========================================

console.log("\n--- HOISTING ---");

// var hoisting
console.log("Before var declaration:", varHoisted); // undefined
var varHoisted = "I'm hoisted!";
console.log("After var declaration:", varHoisted);

// let/const hoisting (TDZ)
// console.log(letHoisted); // ReferenceError!
let letHoisted = "I'm in TDZ before this line";
console.log("After let declaration:", letHoisted);

// ========================================
// PRACTICAL EXAMPLES
// ========================================

console.log("\n--- PRACTICAL EXAMPLES ---");

// Check if user provided email
function checkEmail(email) {
  if (email) {
    console.log("Email provided:", email);
  } else {
    console.log("No email provided!");
  }
}

checkEmail("bibek@example.com");
checkEmail("");  // Falsy!
checkEmail(null); // Falsy!

// Safe object property access
let userData = {
  name: "Bibek",
  address: {
    city: "Kathmandu"
  }
};

// Safe way
if (userData && userData.address && userData.address.city) {
  console.log("City:", userData.address.city);
}

// Type checking before operations
function addNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Please provide numbers!";
  }
}

console.log(addNumbers(5, 3));      // output : 8
console.log(addNumbers("5", 3));    // "Please provide numbers!"