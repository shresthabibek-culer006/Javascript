// ===============================
// JAVASCRIPT MASTERY JOURNEY 🚀
// Practice File: js-practice-hub.js
// Organized: Beginner → Intermediate → Advanced
// ===============================

// ===============================
// 📚 LEVEL 1: BEGINNER
// Basic concepts and fundamental operations
// ===============================

console.log("\n========== LEVEL 1: BEGINNER ==========\n");

// ========== ARRAYS BASICS ==========

// Creating different types of arrays
let her_fruits = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Accessing array elements using index (starts from 0)
console.log(her_fruits[0]); // "apple" (first element)
console.log(her_fruits[2]); // "mango" (third element)

// Get array length
console.log("Total fruits:", her_fruits.length); // 3

// ========== ARRAY METHODS - ADDING/REMOVING ==========

// Add to end of array
her_fruits.push("orange");
console.log("After push:", her_fruits);

// Add to start of array
her_fruits.unshift("grapes");
console.log("After unshift:", her_fruits);

// Remove from end
her_fruits.pop();
console.log("After pop:", her_fruits);

// Remove from start
her_fruits.shift();
console.log("After shift:", her_fruits);

// ========== ARRAY SEARCHING ==========

// Check if element exists in array
console.log("Has apple?", her_fruits.includes("apple")); // true
console.log("Has litchi?", her_fruits.includes("litchi")); // false

// Find position of element
console.log("Position of banana:", her_fruits.indexOf("banana")); // 1

// ========== ARRAY TO STRING ==========

// Join array elements into a string
console.log(her_fruits.join(", ")); // "apple, banana, mango"

// Extract part of array (slice doesn't modify original)
let some = her_fruits.slice(0, 2);
console.log("Sliced:", some); // ["apple", "banana"]

// ========== BASIC FUNCTIONS ==========

// Function without parameters
function greet() {
    console.log("Hello!");
}
greet();

// Function with parameter
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello("Bibek");

// Function with return value
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(5, 3);
console.log("Sum:", sum); // 8

// Function with default parameter
function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}
greetUser();          // "Welcome, Guest!"
greetUser("Bibek");   // "Welcome, Bibek!"

// ========== BASIC LOOPS ==========

// Print colors using for loop
const colors = ["red", "blue", "green", "yellow", "orange"];
console.log("\n--- Colors ---");
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Sum array elements
const nums = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}
console.log("Total:", total); // 150

// ========== SIMPLE STRING OPERATIONS ==========

// Count characters in string
let text = "Shradiya Maharjan";
console.log("Length:", text.length); // 17

// Convert to uppercase
let haha_name = "bibek shrestha";
console.log(haha_name.toUpperCase()); // "BIBEK SHRESTHA"

// ===============================
// 📈 LEVEL 2: INTERMEDIATE
// Array methods, objects, and practical functions
// ===============================

console.log("\n========== LEVEL 2: INTERMEDIATE ==========\n");

// ========== ARROW FUNCTIONS ==========

// Arrow function with explicit return
const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(34, 545)); // 579

// Arrow function with implicit return (shorthand)
const addShort = (a, b) => a + b;
console.log(addShort(10, 20)); // 30

// Single parameter (no parentheses needed)
const square = num => num * num;
console.log("Square of 5:", square(5)); // 25

// Cube function
const cube = num => num * num * num;
console.log("Cube of 7:", cube(7)); // 343

// ========== ARRAY METHODS (map, filter, reduce) ==========

const new_numbers = [1, 2, 3, 4, 5];

// map() - Transform each element
const numbers_doubled = new_numbers.map(num => num * 2);
console.log("Doubled:", numbers_doubled); // [2, 4, 6, 8, 10]

// filter() - Get elements that match condition
const numbers_evens = new_numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", numbers_evens); // [2, 4]

// reduce() - Combine all elements into single value
const numbers_sum = new_numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", numbers_sum); // 15

// ========== PRACTICAL EXAMPLE: STUDENT FILTERING ==========

const students = [
    {name: "Bibek", marks: 85},
    {name: "Shradiya", marks: 92},
    {name: "Haku", marks: 78}
];

// Filter students with marks >= 80
const toppers = students.filter(student => student.marks >= 80);
console.log("Toppers:", toppers);

// ========== OBJECTS MANIPULATION ==========

// Creating and modifying objects
const person = {
    name: "Bibek Shrestha",
    age: 20,
    city: "Kathmandu",
    isStudent: true
};

// Access properties
console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation

// Modify existing properties
person.age = 21;
person.city = "Pokhara";

// Add new property
person.country = "Nepal";

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
console.log("City:", user.address.city);

// ========== OBJECT WITH METHODS ==========

const player = {
    name: "Messi",
    goals: 700,
    celebrate: function() {
        console.log(`${this.name} celebrates!`);
    }
};
player.celebrate();

// ========== OBJECT METHODS ==========

const dav_student = {
    name: "Shradiya",
    age: 17,
    course: "Web Dev"
};

// Get all keys
console.log(Object.keys(dav_student)); // ["name", "age", "course"]

// Get all values
console.log(Object.values(dav_student)); // ["Shradiya", 17, "Web Dev"]

// Get key-value pairs
console.log(Object.entries(dav_student));

// Check if property exists
console.log("Has name?", "name" in dav_student); // true
console.log("Has salary?", "salary" in dav_student); // false

// ========== OBJECT COPYING (Spread Operator) ==========

const studentCopy = {...dav_student};
studentCopy.age = 21;
console.log("Original age:", dav_student.age);     // 17
console.log("Copy age:", studentCopy.age);         // 21

// ========== MERGE OBJECTS ==========

const basic = {name: "Bibek", age: 20};
const extra = {city: "Kathmandu", country: "Nepal"};
const merged = {...basic, ...extra};
console.log("Merged:", merged);

// ========== OBJECT DESTRUCTURING ==========

const student_data = {
    his_name: "Bibek",
    his_age: 20,
    his_course: "Web Dev"
};

const {his_name, his_age, his_course} = student_data;
console.log(his_name, his_age, his_course);

// ========== ARRAY OF OBJECTS ==========

const players = [
    {name: "Messi", goals: 700, team: "Barcelona"},
    {name: "Ronaldo", goals: 850, team: "Al Nassr"},
    {name: "Neymar", goals: 400, team: "Al Hilal"}
];

// Access specific player
console.log("First player:", players[0].name);

// Loop through array of objects
players.forEach(player => {
    console.log(`${player.name} scored ${player.goals} goals`);
});

// Filter players with 500+ goals
const legends = players.filter(p => p.goals >= 500);
console.log("Legends:", legends);

// Map - get only names
const player_names = players.map(p => p.name);
console.log("Player names:", player_names);

// Find specific player
const messi = players.find(p => p.name === "Messi");
console.log("Found:", messi);

// Sort by goals (descending)
const sorted = [...players].sort((a, b) => b.goals - a.goals);
console.log("Sorted by goals:", sorted);

// Add new player
players.push({name: "Haaland", goals: 250, team: "Man City"});

// Calculate total goals
const totalGoals = players.reduce((sum, player) => sum + player.goals, 0);
console.log(`Total goals: ${totalGoals}`);

// ========== MATH OPERATIONS ==========

// Find max number in array (spread operator)
let big_nums = [23, 54, 75, 76, 354, 556];
console.log("Max:", Math.max(...big_nums)); // 556

// Find min number in array
let random_numbers = [436455, 4654, 665, 576, 577, 6677];
console.log("Min:", Math.min(...random_numbers)); // 576

// ========== PRACTICAL FUNCTIONS ==========

// Find largest number manually
const numss = [45, 23, 89, 12, 67];
let max = numss[0];
for (let i = 1; i < numss.length; i++) {
    if (numss[i] > max) {
        max = numss[i];
    }
}
console.log("Largest:", max);

// Reverse array using loop
const bucket_fruits = ["apple", "banana", "mango", "orange"];
let reversed = [];
for (let i = bucket_fruits.length - 1; i >= 0; i--) {
    reversed.push(bucket_fruits[i]);
}
console.log("Reversed:", reversed);

// ========== STRING MANIPULATION ==========

// Reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("shradiya")); // "ayidarhs"

// Palindrome checker
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("hello")); // false

// ========== UTILITY FUNCTIONS ==========

// Print numbers 1 to n
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Calculate factorial
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5:", factorial(5)); // 120

// Count vowels in string
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
console.log("Vowels in 'hello world':", countVowels("hello world")); // 3

// Multiplication table
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// ===============================
// 🔥 LEVEL 3: ADVANCED
// Complex logic, real-world scenarios, optimization
// ===============================

console.log("\n========== LEVEL 3: ADVANCED ==========\n");

// ========== SHOPPING CART WITH DISCOUNT ==========

const shopping_cart = [
    {item: "Apple", price: 30, quantity: 4},
    {item: "Milk", price: 60, quantity: 2},
    {item: "Bread", price: 45, quantity: 1},
    {item: "Eggs", price: 120, quantity: 1}
];

function getTotal(price, quantity) {
    // 10% discount if quantity >= 3
    if (quantity >= 3) {
        return price * quantity * 0.9;
    }
    return price * quantity;
}

let grandTotal = 0;
shopping_cart.forEach(product => {
    const itemTotal = getTotal(product.price, product.quantity);
    grandTotal += itemTotal;
    console.log(`${product.item} → Rs.${itemTotal}`);
});
console.log(`Grand Total: Rs.${grandTotal}`);

// ========== GRADING SYSTEM ==========

function getGrade(marks) {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";
    return "F";
}

const pcps_students = [
    {name: "Alice", score: 92},
    {name: "Bob", score: 25},
    {name: "Nina", score: 73},
    {name: "Diana", score: 58},
    {name: "Eve", score: 88}
];

pcps_students.forEach(student => {
    const grade = getGrade(student.score);
    console.log(`${student.name} scored ${student.score} → Grade: ${grade}`);
});

// ========== EVEN/ODD CHECKER WITH CATEGORIZATION ==========

const unique_numbers = [12, 7, 34, 19, 56, 3, 88, 45, 60];

function checkNumber(num) {
    const type = num % 2 === 0 ? "Even" : "Odd";
    const category = num > 50 ? "Big" : "Small";
    return {number: num, type, category};
}

unique_numbers.forEach(num => {
    const result = checkNumber(num);
    console.log(`${result.number} → ${result.type} → ${result.category}`);
});

// ========== MULTI-OPERATION CALCULATOR ==========

function calculate(a, b, operator) {
    switch(operator) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "multiply": return a * b;
        case "divide": return b === 0 ? "Cannot divide by zero" : a / b;
        default: return "Invalid operator";
    }
}

const numbs = [10, 25, 37, 48, 55];
for (let i = 0; i < numbs.length - 1; i++) {
    const a = numbs[i];
    const b = numbs[i + 1];
    console.log(`${a} + ${b} = ${calculate(a, b, "add")}`);
    console.log(`${a} * ${b} = ${calculate(a, b, "multiply")}`);
    console.log("---");
}

// ========== TEMPERATURE CONVERTER WITH STATUS ==========

const temperatures = [0, 25, 37, 100, -10];

function convertCelsius(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    let status;
    if (celsius < 0) status = "Freezing";
    else if (celsius < 20) status = "Cold";
    else if (celsius < 35) status = "Normal";
    else status = "Hot";
    
    return {status, fahrenheit};
}

temperatures.forEach(temp => {
    const result = convertCelsius(temp);
    console.log(`${temp}°C → ${result.fahrenheit}°F → ${result.status}`);
});

// ========== PASSWORD STRENGTH CHECKER ==========

function checkPasswordStrength(password) {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
}

const passwords = ["abc", "hello123", "MyP@ss1", "SuperSecure@99!", "12345"];
passwords.forEach(pwd => {
    console.log(`"${pwd}" → ${checkPasswordStrength(pwd)}`);
});

// ========== DISCOUNT CALCULATOR ==========

function applyDiscount(price, discountPercent) {
    const discount = (price * discountPercent) / 100;
    return price - discount;
}

console.log("1000 with 10% off:", applyDiscount(1000, 10));
console.log("2500 with 20% off:", applyDiscount(2500, 20));

// ========== EMAIL VALIDATOR ==========

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("bibek@gmail.com"));  // true
console.log(isValidEmail("invalid.com"));      // false

// ========== CELSIUS TO FAHRENHEIT ==========

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("0°C =", celsiusToFahrenheit(0), "°F");
console.log("100°C =", celsiusToFahrenheit(100), "°F");

// ========== PRODUCT SEARCH ==========

const products = [
    {name: "Laptop", price: 80000},
    {name: "Phone", price: 30000},
    {name: "Tablet", price: 45000}
];

function searchProduct(query) {
    return products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );
}

console.log("Search 'lap':", searchProduct("lap"));

// ========== LOGIN VALIDATION ==========

const users = [
    {username: "bibek", password: "1234"},
    {username: "admin", password: "admin123"}
];

function login(username, password) {
    const user = users.find(u => 
        u.username === username && u.password === password
    );
    return user ? "Login successful!" : "Invalid credentials";
}

console.log(login("bibek", "1234"));
console.log(login("bibek", "wrong"));

// ========== TODO COUNTER ==========

const todos = [
    {task: "Study JS", completed: true},
    {task: "Exercise", completed: false},
    {task: "Read book", completed: true},
    {task: "Code project", completed: true}
];

const completedCount = todos.filter(todo => todo.completed).length;
const totalCount = todos.length;
console.log(`Completed: ${completedCount}/${totalCount}`);

// ========== RANDOM OTP GENERATOR ==========

function generateOTP(length = 6) {
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

console.log("6-digit OTP:", generateOTP());
console.log("4-digit OTP:", generateOTP(4));

// ========== BMI CALCULATOR ==========

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) return `BMI: ${bmi.toFixed(1)} - Underweight`;
    if (bmi < 25) return `BMI: ${bmi.toFixed(1)} - Normal`;
    if (bmi < 30) return `BMI: ${bmi.toFixed(1)} - Overweight`;
    return `BMI: ${bmi.toFixed(1)} - Obese`;
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(90, 1.80));

// ========== PHONE NUMBER FORMATTER ==========

function formatPhone(number) {
    const clean = number.replace(/\D/g, "");
    return `+977 ${clean.slice(0, 3)}-${clean.slice(3, 6)}-${clean.slice(6)}`;
}

console.log(formatPhone("9841234567"));

// ========== WORD COUNTER ==========

function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
}

console.log("Words in 'Hello world':", countWords("Hello world"));
console.log("Words in 'Learning JavaScript is fun':", countWords("Learning JavaScript is fun"));

// ========== TIP CALCULATOR ==========

function calculateTip(bill, tipPercent = 10) {
    const tip = (bill * tipPercent) / 100;
    return {
        bill,
        tip,
        total: bill + tip
    };
}

console.log("Tip for Rs.1000 (15%):", calculateTip(1000, 15));
console.log("Tip for Rs.500 (default):", calculateTip(500));

// ========== USERNAME GENERATOR ==========

function generateUsername(firstName, lastName) {
    const randomNum = Math.floor(Math.random() * 1000);
    return `${firstName.toLowerCase()}_${lastName.toLowerCase()}${randomNum}`;
}

console.log("Username:", generateUsername("Bibek", "Shrestha"));

// ========== AVERAGE CALCULATOR ==========

function calculateAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log("Average:", calculateAverage([10, 20, 30, 40, 50]));

// ========== URL SLUG GENERATOR ==========

function generateSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

console.log(generateSlug("Hello World"));
console.log(generateSlug("JavaScript is Amazing!"));

// ========== FIND OLDEST PERSON ==========

const people = [
    {name: "Ram", age: 25},
    {name: "Shyam", age: 30},
    {name: "Hari", age: 22}
];

function findOldest(people) {
    return people.reduce((oldest, person) => 
        person.age > oldest.age ? person : oldest
    );
}

console.log("Oldest:", findOldest(people));

// ========== REMOVE DUPLICATES ==========

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log("Unique numbers:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("Unique letters:", removeDuplicates(["a", "b", "a", "c"]));

// ========== SHOPPING CART CALCULATOR ==========

const cart = [
    {item: "T-shirt", price: 500},
    {item: "Jeans", price: 1500},
    {item: "Shoes", price: 2000}
];

const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);
console.log(`Cart Total: Rs. ${cartTotal}`);

// ========== ACTIVE USERS FILTER ==========

const all_users = [
    {name: "Bibek", active: true},
    {name: "Ram", active: false},
    {name: "Shyam", active: true}
];

const activeUsers = all_users.filter(user => user.active);
console.log("Active users:", activeUsers);

// ========== AGE CALCULATOR FROM BIRTH YEAR ==========

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

console.log("Age if born in 2004:", calculateAge(2004));

// ===============================
// 🎯 END OF PRACTICE FILE
// ===============================

console.log("\n✅ All levels completed! Keep practicing! 🚀\n");
console.log("SAKYOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO 🔥");