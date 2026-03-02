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