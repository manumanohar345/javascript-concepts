// let str = "Vaddeapally";
// let repeats = [...str].filter((c, i, a) => a.indexOf(c) !== i && a.lastIndexOf(c) === i);
// console.log("Repeated characters:", repeats);
// // exxplanation:
// // This code finds characters in the string "Vaddeapally" that appear more than once and logs them to the console.
// // Output: Repeated characters: [ 'd', 'a', 'l' ]
// // filter() keeps only characters where:
// // indexOf(c) !== i: it's not the first occurrence → means it repeated.
// // lastIndexOf(c) === i: this ensures we keep only one of each repeated character (no duplicates in the output).
// // This code prompts the user for a number, calculates its square, and logs the result to the console.
// // count repeats count needed
// // This code prompts the user for a number, calculates its square, and logs the result to the console.

// let str2 = "Vaddeapally";
// console.log(Object.entries([...str].reduce((acc, char) => (acc[char] = (acc[char] || 0) + 1, acc), {}))
//     .filter(([, count]) => count > 1)
//     .map(([char, count]) => `${char} (${count} times)`));
// // Output: [ 'd (2 times)', 'a (3 times)', 'l (2 times)' ]

// // This code counts the occurrences of each character in the string "Vaddeapally" and logs the repeated characters with their counts.
// let strcheck = "Vaddeapally";
// let chars = strcheck.split("");
// let countMap = {};

// chars.forEach(char => {
//     if (countMap[char]) {
//         countMap[char] += 1;
//     } else {
//         countMap[char] = 1;
//     }
// });

// // let repeated = [];
// // for (let char in countMap) {
// //     if (countMap[char] > 1) {
// //         repeated.push(`${char} (${countMap[char]} times)`);
// //     }
// // }
// console.log("Repeated characters:", repeated);

let str = "Vaddeapally";
let chars = str.split("");
let countMap = {};

// Count how many times each character appears
chars.forEach(char => {
    countMap[char] = (countMap[char] || 0) + 1;
});


// Print each character with its count
// for (let char in countMap) {
//   console.log(`${char} → ${countMap[char]} time(s)`);
// }

console.log("Repeated characters:");
for (let char in countMap) {
    if (countMap[char] > 1) {
        console.log(`${char} → ${countMap[char]} times`);
    }
}
