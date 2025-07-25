// examples of Array   
// 1. Creating an array
const array1 = [1, 2, 3, 4, 5];
console.log(array1); // Output: [1, 2, 3, 4, 5]
// 2. Accessing elements in an array
console.log(array1[0]); // Output: 1
console.log(array1[2]); // Output: 3    
// 3. Modifying elements in an array
array1[1] = 10;
console.log(array1); // Output: [1, 10, 3, 4, 5]
// 4. Adding elements to an array
array1.push(6);
console.log(array1); // Output: [1, 10, 3, 4, 5, 6]
// 5. Removing elements from an array
array1.pop();
console.log(array1); // Output: [1, 10, 3, 4, 5]
// 6. Finding the length of an array
console.log(array1.length); // Output: 5
// 7. Iterating through an array
array1.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});
// Output:
// Element at index 0: 1
// Element at index 1: 10
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5    
// 8. Using map to create a new array
const doubledArray = array1.map(element => element * 2);
console.log(doubledArray); // Output: [2, 20, 6, 8, 10]
// 9. Using filter to create a new array with elements greater than 3   
const filteredArray = array1.filter(element => element > 3);
console.log(filteredArray); // Output: [10, 4, 5]
// 10. Using reduce to calculate the sum of elements in an array
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 23
// 11. Checking if an array includes a specific element
console.log(array1.includes(10)); // Output: true
console.log(array1.includes(7)); // Output: false
// 12. Finding the index of an element in an array
console.log(array1.indexOf(10)); // Output: 1
console.log(array1.indexOf(7)); // Output: -1 (not found)
// 13. Concatenating two arrays 
const array2 = [6, 7, 8];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 10, 3, 4, 5, 6, 7, 8]
// 14. Slicing an array to get a subarray
const slicedArray = array1.slice(1, 4);
console.log(slicedArray); // Output: [10, 3, 4]
// 15. Splicing an array to remove elements
const splicedArray = array1.splice(1, 2); // Removes 2 elements
console.log(splicedArray); // Output: [10, 3]
console.log(array1); // Output: [1, 4, 5] (original array modified)
// 16. Reversing an array
const reversedArray = array1.reverse();
console.log(reversedArray); // Output: [5, 4, 1]
// 17. Sorting an array
const sortedArray = array1.sort((a, b) => a - b);
console.log(sortedArray); // Output: [1, 4, 5]
// 18. Checking if an object is an array
console.log(Array.isArray(array1)); // Output: true
console.log(Array.isArray({})); // Output: false
// 19. Joining elements of an array into a string
const joinedString = array1.join(', ');
console.log(joinedString); // Output: "1, 4, 5"
// 20. Filling an array with a specific value
const filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]
// 21. Finding the first element that satisfies a condition
const firstGreaterThanThree = array1.find(element => element > 3);
console.log(firstGreaterThanThree); // Output: 4
// 22. Finding the index of the first element that satisfies a condition
const indexOfFirstGreaterThanThree = array1.findIndex(element => element > 3);
console.log(indexOfFirstGreaterThanThree); // Output: 1
// 23. Checking if all elements satisfy a condition
const allGreaterThanZero = array1.every(element => element > 0);
console.log(allGreaterThanZero); // Output: true
// 24. Checking if some elements satisfy a condition

const someGreaterThanThree = array1.some(element => element > 3);
console.log(someGreaterThanThree); // Output: true
// 25. Flattening a nested array
const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
// 26. Finding the last index of an element
const lastIndexOfElement = array1.lastIndexOf(4);
console.log(lastIndexOfElement); // Output: 1 (if 4 is present in
// the array, otherwise -1)
// 27. Using for...of loop to iterate through an array
for (const element of array1) {
    console.log(element);
}       
// Output:
// 1
// 4
// 5    
// 28. Using for...in loop to iterate through an array (not recommended for arrays)
for (const index in array1) {
    console.log(`Index ${index}: ${array1[index]}`);
}
// Output:
// Index 0: 1   
// Index 1: 4
// Index 2: 5
// 29. Using Array.from to create an array from an iterable
const iterable = 'hello';
const arrayFromIterable = Array.from(iterable);
console.log(arrayFromIterable); // Output: ['h', 'e', 'l', 'l', 'o']
// 30. Using Array.of to create an array from a set of elements
const arrayOfElements = Array.of(1, 2, 3, 4, 5);
console.log(arrayOfElements); // Output: [1, 2, 3, 4, 5]
// 31. Using Array.prototype.copyWithin to copy elements within an array
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3);
console.log(copyWithinArray); // Output: [4, 5, 3, 4, 5]
// 32. Using Array.prototype.fill to fill an array with a specific value
const fillArray = new Array(5).fill(7);
console.log(fillArray); // Output: [7, 7, 7, 7, 7]
// 33. Using Array.prototype.findLast to find the last element that satisfies a condition
const findLastGreaterThanThree = array1.findLast(element => element > 3);
console.log(findLastGreaterThanThree); // Output: 5 (if 5 is the
// last element greater than 3, otherwise the last matching element)
// 34. Using Array.prototype.findLastIndex to find the index of the last element that

// satisfies a condition
const findLastIndexGreaterThanThree = array1.findLastIndex(element => element > 3);
console.log(findLastIndexGreaterThanThree); // Output: 2 (if 5 is the
// last element greater than 3, otherwise the index of the last matching element)
// 35. Using Array.prototype.includes to check if an array includes a specific element
console.log(array1.includes(4)); // Output: true
console.log(array1.includes(6)); // Output: false
// 36. Using Array.prototype.indexOf to find the index of an element
console.log(array1.indexOf(4)); // Output: 1
console.log(array1.indexOf(6)); // Output: -1 (not found)
// 37. Using Array.prototype.lastIndexOf to find the last index of an element
console.log(array1.lastIndexOf(4)); // Output: 1
console.log(array1.lastIndexOf(6)); // Output: -1 (not found)
// 38. Using Array.prototype.reverse to reverse the order of elements in an array
const reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log(reverseArray); // Output: [5, 4, 3, 2, 1]
// 39. Using Array.prototype.sort to sort the elements of an array
const sortArray = [5, 2, 8, 1, 4];
sortArray.sort((a, b) => a - b);
console.log(sortArray); // Output: [1, 2, 4, 5, 8]
// 40. Using Array.prototype.toString to convert an array to a string   
const toStringArray = [1, 2, 3];
console.log(toStringArray.toString()); // Output: "1,2,3"   
// 41. Using Array.prototype.valueOf to get the primitive value of an array
const valueOfArray = [1, 2, 3];
console.log(valueOfArray.valueOf()); // Output: [1, 2, 3]
// 42. Using Array.prototype.entries to get an iterator for the key/value pairs of an
// array
const entriesArray = [1, 2, 3];
const entriesIterator = entriesArray.entries();
for (const [index, value] of entriesIterator) {
    console.log(`Index: ${index}, Value: ${value}`);
}   
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// 43. Using Array.prototype.keys to get an iterator for the keys of an array
const keysArray = [1, 2, 3];
const keysIterator = keysArray.keys();
for (const key of keysIterator) {
    console.log(`Key: ${key}`);
}
// Output:
// Key: 0
// Key: 1
// Key: 2
// 44. Using Array.prototype.values to get an iterator for the values of an array
const valuesArray = [1, 2, 3];
const valuesIterator = valuesArray.values();
for (const value of valuesIterator) {
    console.log(`Value: ${value}`);
}
// Output:
// Value: 1
// Value: 2
// Value: 3
// 45. Using Array.prototype.flatMap to map and flatten an array
const flatMapArray = [[1, 2], [3, 4], [5]];
const flatMappedArray = flatMapArray.flatMap(arr => arr.map(num => num * 2));
console.log(flatMappedArray); // Output: [2, 4, 6, 8, 10]
// 46. Using Array.prototype.at to get an element at a specific index
const atArray = [1, 2, 3, 4, 5];
console.log(atArray.at(2)); // Output: 3
console.log(atArray.at(-1)); // Output: 5 (last element)
// 47. Using Array.prototype.copyWithin to copy elements within an array
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3);
console.log(copyWithinArray); // Output: [4, 5, 3, 4, 5]
// 48. Using Array.prototype.fill to fill an array with a specific value
const fillArray = new Array(5).fill(7);
console.log(fillArray); // Output: [7, 7, 7, 7, 7]
// 49. Using Array.prototype.findLast to find the last element that satisfies a condition
const findLastArray = [1, 2, 3, 4, 5];
const lastGreaterThanThree = findLastArray.findLast(element => element > 3);


console.log(lastGreaterThanThree); // Output: 5 (if 5 is the last element greater than 3, otherwise the last matching element)
// 50. Using Array.prototype.findLastIndex to find the index of the last element that satisfies a condition
const lastIndexGreaterThanThree = findLastArray.findLastIndex(element => element > 3);
console.log(lastIndexGreaterThanThree); // Output: 4 (if 5 is the
// last element greater than 3, otherwise the index of the last matching element)
// 51. Using Array.prototype.includes to check if an array includes a specific element
console.log(findLastArray.includes(4)); // Output: true
console.log(findLastArray.includes(6)); // Output: false
// 52. Using Array.prototype.indexOf to find the index of an element
console.log(findLastArray.indexOf(4)); // Output: 3
console.log(findLastArray.indexOf(6)); // Output: -1 (not found)
// 53. Using Array.prototype.lastIndexOf to find the last index of an element
console.log(findLastArray.lastIndexOf(4)); // Output: 3
console.log(findLastArray.lastIndexOf(6)); // Output: -1 (not found)
// 54. Using Array.prototype.reverse to reverse the order of elements in an array
const reverseFindLastArray = [1, 2, 3, 4, 5];
reverseFindLastArray.reverse();
console.log(reverseFindLastArray); // Output: [5, 4, 3, 2, 1]
// 55. Using Array.prototype.sort to sort the elements of an array
const sortFindLastArray = [5, 2, 8, 1, 4];
sortFindLastArray.sort((a, b) => a - b);




