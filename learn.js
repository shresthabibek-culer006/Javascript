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