// 1. Find the maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9

// 2. Check if a string is a palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('racecar')); // Output: true

// 3. Calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 4. Merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1,2,3,4,5,6]

// 5. Find the sum of all even numbers in an array
function sumEven(arr) {
    return arr.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
}
console.log(sumEven([1, 2, 3, 4, 5, 6])); // Output: 12

// 6. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: 'olleh'

// 7. Remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1,2,3,4,5]

// 8. Find the intersection of two arrays
function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}
console.log(intersection([1,2,3], [2,3,4])); // Output: [2,3]

// 9. Count the number of vowels in a string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('hello world')); // Output: 3

// 10. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    const normalize = s => s.split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
