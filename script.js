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

