function hasSameLastDigit(a, b) {
    return a % 10 === b % 10;
}

// Example usage
console.log(hasSameLastDigit(27, 57)); // true (both end in 7)
console.log(hasSameLastDigit(123, 89)); // false
