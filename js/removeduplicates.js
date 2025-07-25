function duplicate(arr) {
    // create a new array to store unique elements
    const uniqueArray = [];

    // loop through the original array
    for (let i = 0; i < arr.length; i++) {
        // check if the element is already in the unique array
        if (!uniqueArray.includes(arr[i])) {
            // if not, add it to the unique array
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}
// Example usage
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const resultArray = duplicate(originalArray);
console.log(resultArray); // Output: [1, 2, 3, 4, 5]

// Example usage of linearsearch

function duplicate(arr) {
    // create a new array to store unique elements
    const uniqueArray = [];

    // loop through the original array
    for (let i of arr) {
        // check if the element is already in the unique array
        if (uniqueArray.indexOf(i) === -1) {
            // if not, add it to the unique array
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}
// Example usage
const originalArray2 = [1, 2, 2, 3, 4, 4, 5];
const resultArray2 = duplicate(originalArray2);
