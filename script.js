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

// =====================================
// 14. ARROW FUNCTIONS
// =====================================


// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("shradiya"));

// Check if word is palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("mom")); // true

// Multiply array by 2
let arr = [1, 2, 3, 4, 5];
let doubled = arr.map(x => x * 2);
console.log(doubled);

// Count characters
let text = "Shradiya Maharjan";
console.log(text.length);


// Convert to uppercase
let haha_name = "bibek shrestha";
console.log(haha_name.toUpperCase());

// Find maximum number
let big_nums = [23,54,75,76,354,556,];
console.log(Math.max(...big_nums));

// Find minimun number
let random_numbers = [436455,4654,665,576,577,6677,867657,5764,4675,776];
min_random_numbers = Math.min(...random_numbers);
console.log(min_random_numbers); 

// ===============================
// END PRACTICE FILE
// ===============================

console.log("Practice Finished ✅");
