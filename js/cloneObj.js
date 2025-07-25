const obj = {
    value: 10,
    getValue: function() {
        return function() { return this.value; }; // Regular function does not retain 'this' context
    },
    getValueArrow: function() {
        return () => this.value; // Arrow function retains 'this' context
    }
};

const test = Object.assign({}, obj);
console.log(test.getValue()()); // Output: undefined (or error in strict mode)
console.log(test.getValueArrow()()); // Output: 10

// using spread operator
// program to clone the object
// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = { ... person}

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);

// Output: Peter
// Output: John
// program to clone the object
// declaring object
const person2 = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = JSON.parse(JSON.stringify(person2));

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);
