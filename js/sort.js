let numbers = [10, 5, 20, 1];
numbers.sort((a, b) => a - b);  // Important for numbers!
console.log(numbers);

numbers.sort((a, b) => b - a);  // Important for numbers!
console.log(numbers);  // Output: [20, 10, 5, 1


let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

// Sort by age (ascending)
users.sort((a, b) => a.age - b.age);
console.log(users.sort((a, b) => a.age - b.age));
console.log(users.sort((a, b) => a.name.localeCompare(b.name)))


