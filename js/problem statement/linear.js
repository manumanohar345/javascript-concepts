// linearsearchResult.js
// This file contains a function to perform a linear search on an array.    
//         this.items.push(item);
//     }
// 
//     dequeue() {  


linearsearchResult = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target found
        }
    }
    return -1; // Target not found
}
// }
// Example usage of linearsearch
console.log(linearsearchResult([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(linearsearchResult([1, 2, 3, 4, 5], 6)); // Output: -1 (not found)
console.log(linearsearchResult([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearsearchResult([10, 20, 30, 40, 50], 60)); // Output: -1 (not found)
console.log(linearsearchResult([5, 10, 15, 20, 25], 15)); // Output: 2
console.log(linearsearchResult([5, 10, 15, 20, 25], 30)); // Output: -1 (not found)
console.log(linearsearchResult([100, 200, 300, 400, 500], 300)); // Output: 2
console.log(linearsearchResult([100, 200, 300, 400, 500], 600)); // Output: -1 (not found)
console.log(linearsearchResult([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(linearsearchResult([1, 3, 5, 7, 9], 2)); // Output: -1 (not found)
// Example usage of linearsearch
console.log(linearsearchResult([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(linearsearchResult([1, 2, 3, 4, 5], 6)); // Output: -1 (not found)
console.log(linearsearchResult([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearsearchResult([10, 20, 30, 40, 50], 60)); // Output: -1 (not found)
console.log(linearsearchResult([5, 10, 15, 20, 25], 15)); // Output: 2
console.log(linearsearchResult([5, 10, 15, 20, 25], 30)); // Output: -1 (not found)
console.log(linearsearchResult([100, 200, 300, 400, 500], 300)); // Output: 2
console.log(linearsearchResult([100, 200, 300, 400, 500], 600)); // Output: -1 (not found)
console.log(linearsearchResult([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(linearsearchResult([1, 3, 5, 7, 9], 2)); // Output: -1 (not found)
// Example usage of linearsearch
console.log(linearsearchResult([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(linearsearchResult([1, 2, 3, 4, 5], 6)); // Output: -1 (not found)
console.log(linearsearchResult([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearsearchResult([10, 20, 30, 40, 50], 60)); // Output: -1 (not found)
console.log(linearsearchResult([5, 10, 15, 20, 25], 15)); // Output: 2
console.log(linearsearchResult([5, 10, 15, 20, 25], 30)); // Output: -1 (not found)
console.log(linearsearchResult([100, 200, 300, 400, 500], 300)); // Output: 2
console.log(linearsearchResult([100, 200, 300, 400, 500], 600)); // Output: -1 (not found)
console.log(linearsearchResult([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(linearsearchResult([1, 3, 5, 7, 9], 2)); // Output: -1 (not found)
// Example usage of linearsearch
console.log(linearsearchResult([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(linearsearchResult([1, 2, 3, 4, 5], 6)); // Output: -1 (not found)
console.log(linearsearchResult([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearsearchResult([10, 20, 30, 40, 50], 60)); // Output: -1 (not found)
console.log(linearsearchResult([5, 10, 15, 20, 25], 15)); // Output: 2
console.log(linearsearchResult([5, 10, 15, 20, 25], 30)); // Output: -1 (not found)
console.log(linearsearchResult([100, 200, 300, 400, 500], 300)); // Output: 2
console.log(linearsearchResult([100, 200, 300, 400, 500], 600)); // Output: -1 (not found)
console.log(linearsearchResult([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(linearsearchResult([1, 3, 5, 7, 9], 2)); // Output: -1 (not found)

console.log(linearsearchResult([1, 2, 3, 4, 5], 3)); // Output: 2
