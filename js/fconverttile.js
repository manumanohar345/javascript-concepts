function convertToTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
const str = "hello world";
const titleCasedStr = convertToTitleCase(str);
console.log(titleCasedStr); // Output: "Hello World"
