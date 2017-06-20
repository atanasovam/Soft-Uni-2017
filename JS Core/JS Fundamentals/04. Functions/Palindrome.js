function palindrome(word) {
    for (let i = 0; i < word.length / 2 - 1; i++) {
        let currLetter = word[word.length - 1 - i];
        if (word[i] !== currLetter) {
            return false
        }
    }
    return true;
}

console.log(palindrome("haha"));
console.log();
console.log(palindrome("racecar"));
console.log();
console.log(palindrome("unitinu"));
