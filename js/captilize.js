// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.chartAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = 'hello world';

const result = capitalizeFirstLetter(string);

console.log(result);