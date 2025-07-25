// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);
// using spread operator
const newObj2 = { ...person, ...student };
// using spread operator
const newObj3 = { ...person, ...student, city: 'New York' };

console.log(newObj);
console.log(newObj2);
console.log(newObj3);