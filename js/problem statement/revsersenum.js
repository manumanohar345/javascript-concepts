function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''))
}
let num = 1234
reverseNumber(num)
console.log(reverseNumber(num)); // Output: 4321