// program to check if a key exists

const person = {
    id: 1,
    name: 'John',
    age: 23
}

//check if key exists
const hasKey = person.hasOwnProperty('name');
if(hasKey) {
    console.log("Key exists in the object.");
}
else {
    console.log("Key does not exist in the object.");
}