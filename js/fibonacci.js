// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }   
// // Example usage
// console.log(fibonacci(5)); // Output: 5 (Fibonacci sequence: 0
// // 1 1 2 3 5)
// // 


function fibonacciSeries(n) {
    let a = 0, b = 1;

    for (let i = 0; i <= n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

// Example usage
fibonacciSeries(5);
