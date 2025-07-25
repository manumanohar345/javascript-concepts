// function reverseFibonacci(n) {
//     let fib = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }

//     // Print in reverse
//     for (let i = n; i >= 0; i--) {
//         console.log(fib[i]);
//     }
// }

// // Example usage
// reverseFibonacci(5);


function generateFibonacci(n) {
    const sequence = [];

    let a = 0, b = 1;
    for (let i = 0; i <= n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b]; // swap a and b
    }

    return sequence.reverse(); // Reverse the sequence before returning
}

// Example usage
console.log(generateFibonacci(5)); // Output: [5, 3, 2, 1, 1, 0]
