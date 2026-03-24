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