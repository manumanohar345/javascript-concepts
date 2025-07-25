function sumNaturalNumbers(n) {
    let sum = 0;
    // Loop through numbers from 1 to n and add them
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

// Example usage
console.log(sumNaturalNumbers(5)); // Output: 15 (1+2+3+4+5)
