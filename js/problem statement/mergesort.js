// all sort8ing techniques dsa exmaples
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Sort left half
    const right = mergeSort(arr.slice(mid)); // Sort right half

    return merge(left, right); // Merge the sorted halves
}
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Merge the two sorted arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add any remaining elements from the right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result; // Return the merged sorted array
}
// Example usage
const numbers = [5, 4, 3, 2, 1];
const sorted = mergeSort(numbers);
console.log(sorted); // Expected output: [1, 2, 3, 4, 5]
// Test mergeSort with an empty array
const emptyArray = [];
const sortedEmpty = mergeSort(emptyArray);
console.log(sortedEmpty); // Expected output: []
// Test mergeSort with a single element array
const singleElementArray = [42];
const sortedSingle = mergeSort(singleElementArray);
console.log(sortedSingle); // Expected output: [42]
// Test mergeSort with an already sorted array
const alreadySortedArray = [1, 2, 3, 4, 5];
const sortedAlreadySorted = mergeSort(alreadySortedArray);
console.log(sortedAlreadySorted); // Expected output: [1, 2, 3, 4, 5]
// Test mergeSort with an array containing duplicate elements
const duplicateArray = [3, 1, 2, 3, 1];
const sortedDuplicates = mergeSort(duplicateArray);
console.log(sortedDuplicates); // Expected output: [1, 1, 2, 3, 3]
// Test mergeSort with a large array
const largeArray = [100, 50, 75, 25, 0, 200, 150];
const sortedLarge = mergeSort(largeArray);
console.log(sortedLarge); // Expected output: [0, 25, 50, 75, 100, 150, 200]
// Test mergeSort with negative numbers
const negativeArray = [-5, -1, -3, -2, -4];
const sortedNegative = mergeSort(negativeArray);
console.log(sortedNegative); // Expected output: [-5, -4, -3, -2, -1]
// Test mergeSort with a mix of positive and negative numbers
const mixedArray = [3, -1, 2, -5, 4];
const sortedMixed = mergeSort(mixedArray);
console.log(sortedMixed); // Expected output: [-5, -1, 2, 3, 4]
// Test mergeSort with an array of strings
const stringArray = ["banana", "apple", "cherry", "date"];
const sortedStrings = mergeSort(stringArray);
console.log(sortedStrings); // Expected output: ["apple", "banana", "cherry", "date"]
// Test mergeSort with an array of objects
const objectArray = [
    { name: "banana", value: 2 },
    { name: "apple", value: 1 },
    { name: "cherry", value: 3 }
];
const sortedObjects = mergeSort(objectArray.sort((a, b) => a.value - b.value));
console.log(sortedObjects); // Expected output: [{ name: "apple", value: 1 }, { name: "banana", value: 2 }, { name: "cherry", value: 3 }]   
// Test mergeSort with an array of mixed types
const mixedTypeArray = [3, "apple", 2, "banana", 1];
const sortedMixedType = mergeSort(mixedTypeArray.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a - b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
    } else {
        return typeof a === "number" ? -1 : 1; // Numbers come before strings
    }
}));
console.log(sortedMixedType); // Expected output: [1, 2, 3, "apple", "banana"]
// Test mergeSort with an array of booleans
const booleanArray = [true, false, true, false];
const sortedBooleans = mergeSort(booleanArray.sort((a, b) => (a === b ? 0 : a ? 1 : -1)));
console.log(sortedBooleans); // Expected output: [false, false, true, true]
// Test mergeSort with an array of mixed booleans and numbers
const mixedBooleanNumberArray = [true, 1, false, 0];
const sortedMixedBooleanNumber = mergeSort(mixedBooleanNumberArray.sort((a, b) => {
    if (typeof a === "boolean" && typeof b === "boolean") {
        return a === b ? 0 : a ? 1 : -1; // true comes after false
    } else if (typeof a === "number" && typeof b === "number") {
        return a - b; // Sort numbers normally
    } else {
        return typeof a === "boolean" ? -1 : 1; // Booleans come before numbers
    }
}));
console.log(sortedMixedBooleanNumber); // Expected output: [false, 0, true, 1]
// Test mergeSort with an array of mixed types including null and undefined
const mixedNullUndefinedArray = [null, undefined, 3, "apple", 2];
const sortedMixedNullUndefined = mergeSort(mixedNullUndefinedArray.sort((a, b) => {
    if (a === null || a === undefined) return -1; // null and undefined come first
    if (b === null || b === undefined) return 1;
    if (typeof a === "number" && typeof b === "number") {
        return a - b; // Sort numbers normally
    } else if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b); // Sort strings lexicographically
    } else {
        return typeof a === "number" ? -1 : 1; // Numbers come before strings
    }
}));
console.log(sortedMixedNullUndefined); // Expected output: [null, undefined, 2, 3, "apple"]
// Test mergeSort with an array of special characters
const specialCharArray = ["@", "#", "$", "%", "&"];
const sortedSpecialChars = mergeSort(specialCharArray.sort((a, b) => a.localeCompare(b)));
console.log(sortedSpecialChars); // Expected output: ["@", "#", "$", "%", "&"]
// Test mergeSort with an array of emojis
const emojiArray = ["😊", "😂", "😍", "😢", "  😎"];
const sortedEmojis = mergeSort(emojiArray.sort((a, b) => a.localeCompare(b)));
console.log(sortedEmojis); // Expected output: ["  😎", "😂", "😍", "😢", "😊"]
// Test mergeSort with an array of mixed emojis and strings
const mixedEmojiStringArray = ["😊", "apple", "😂", "banana", ""]
const sortedMixedEmojiString = mergeSort(mixedEmojiStringArray.sort((a, b) => {
    if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b); // Sort strings lexicographically
    } else if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b); // Sort emojis lexicographically
    } else {
        return 0; // No specific order for mixed types
    }
}));