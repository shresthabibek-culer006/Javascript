function countCharacters(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countCharacters("hello world", "l")); // 3

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello")); // "Hello"
console.log(capitalize("javaScript")); // "Javascript"

function sumOddNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(sumOddNumbers([1, 2, 3, 4, 5])); // 9 (1+3+5)

function isVowel(char) {
    const vowels = "aeiouAEIOU";
    return vowels.includes(char);
}

console.log(isVowel("a")); // true
console.log(isVowel("b")); // false


function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // [[1,2], [3,4], [5,6]]

function countEvenOdd(arr) {
    let even = 0, odd = 0;
    arr.forEach(num => {
        if (num % 2 === 0) even++;
        else odd++;
    });
    return {even, odd};
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6])); // {even: 3, odd: 3}


function repeatString(str, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
}

console.log(repeatString("Ha", 3)); // "HaHaHa"

function getInitials(name) {
    const words = name.split(" ");
    let initials = "";
    for (let word of words) {
        initials += word[0].toUpperCase();
    }
    return initials;
}

console.log(getInitials("Bibek Shrestha")); // "BS"

function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([10, 20, 30], 20)); // 1

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // 3


function flattenArray(arr) {
    return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, [5]]])); // [1, 2, 3, 4, [5]]

function isEmpty(arr) {
    return arr.length === 0;
}

console.log(isEmpty([])); // true
console.log(isEmpty([1, 2])); // false

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

const a = {name: "Bibek"};
const b = {age: 20};
console.log(mergeObjects(a, b)); // {name: "Bibek", age: 20}

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log(getObjectKeys({name: "Ram", age: 25})); // ["name", "age"]

function swapValues(a, b) {
    return [b, a];
}

const [x, y] = swapValues(5, 10);
console.log(x, y); // 10 5

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

console.log(getRandomElement([1, 2, 3, 4, 5]));

function toTitleCase(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

console.log(toTitleCase("hello world")); // "Hello World"

const users = [
    {name: "Ram", age: 25},
    {name: "Shyam", age: 17},
    {name: "Hari", age: 20}
];

const adults = users.filter(user => user.age >= 18);
console.log(adults);

const scores = {math: 85, english: 90, science: 78};

const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(total); // 253


function hasProperty(obj, prop) {
    return prop in obj;
}

const person = {name: "Bibek", age: 20};
console.log(hasProperty(person, "name")); // true
console.log(hasProperty(person, "salary")); // false

const students = [
    {name: "Ram", grade: "A"},
    {name: "Shyam", grade: "B"},
    {name: "Hari", grade: "A"}
];

const grouped = students.reduce((acc, student) => {
    if (!acc[student.grade]) acc[student.grade] = [];
    acc[student.grade].push(student);
    return acc;
}, {});

console.log(grouped);

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = {name: "Bibek", address: {city: "KTM"}};
const copy = deepClone(original);
copy.address.city = "PKR";
console.log(original.address.city); // "KTM" (unchanged)

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

function removeFalsy(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN])); // [1, 2, 3]

function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]