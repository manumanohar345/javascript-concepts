// es6 opeartors examples
// Destructuring assignment
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    }
    };
const { name, age, address: { city, zip } } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York  
console.log(zip); // 10001
// Spread operator
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
// Rest operator
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
// Template literals
const name1 = 'Alice';
const greeting = `Hello, ${name1}!`;
console.log(greeting); // Hello, Alice!
// Arrow functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
// Default parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10
// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog('Rex');
dog.speak(); // Rex barks.
// Modules (assuming this is in a module context)
// export const pi = 3.14;
// export function add(x, y) {
//     return x + y;
// }
// import { pi, add } from './math.js';
// console.log(pi); // 3.14
// console.log(add(2, 3)); // 5
// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
};
fetchData()
    .then(data => console.log(data)) // Data fetched successfully!
    .catch(error => console.error(error));
// Async/Await
const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log(data); // Data fetched successfully!
    } catch (error) {
        console.error(error);
    }
};
fetchDataAsync();
// Symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false (symbols are unique)
// Iterators and Generators
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
// Sets
const mySet = new Set([1, 2, 3, 4, 5]);
mySet.add(6);
console.log(mySet.has(3)); // true

console.log(mySet.size); // 6
mySet.delete(2);
console.log(mySet.has(2)); // false
// Maps
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 25);
console.log(myMap.get('name')); // Alice
console.log(myMap.get('age')); // 25        
console.log(myMap.has('name')); // true
console.log(myMap.size); // 2
myMap.delete('age');
console.log(myMap.has('age')); // false
// WeakSets
const weakSet = new WeakSet();
const obj1 = {};
const obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false    
// WeakMaps
const weakMap = new WeakMap();
const key1 = {};
const key2 = {};
weakMap.set(key1, 'value1');
weakMap.set(key2, 'value2');
console.log(weakMap.get(key1)); // value1
console.log(weakMap.get(key2)); // value2
console.log(weakMap.has(key1)); // true
console.log(weakMap.has(key2)); // true
weakMap.delete(key1);
console.log(weakMap.has(key1)); // false
console.log(weakMap.has(key2)); // true
// Proxies
const target = {};
const handler = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : 'Property not found';
    },
    set: function(obj, prop, value) {
        obj[prop] = value;
        return true;
    }
};  
const proxy = new Proxy(target, handler);
proxy.name = 'Alice';
console.log(proxy.name); // Alice
console.log(proxy.age); // Property not found
// Reflect
const obj = { a: 1, b: 2 };
console.log(Reflect.get(obj, 'a')); // 1
console.log(Reflect.has(obj, 'b')); // true
Reflect.set(obj, 'c', 3);
console.log(obj.c); // 3
Reflect.deleteProperty(obj, 'a');
console.log(obj.a); // undefined
// Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
const filtered = numbers.filter(num => num > 2);
console.log(filtered); // [3, 4, 5]
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
const found = numbers.find(num => num > 3);
console.log(found); // 4
const sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // [5, 4, 3, 2, 1
// ]
const sliced = numbers.slice(1, 4);
console.log(sliced); // [2, 3, 4]
const joined = numbers.join(', ');
console.log(joined); // "1, 2, 3, 4, 5"
// Array destructuring
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
// Array spread operator    
const arr3 = [...numbers, 6, 7, 8];
console.log(arr3); // [1, 2, 3, 4,
// 5, 6, 7, 8]
// Array findIndex
const index = numbers.findIndex(num => num > 3);
console.log(index); // 3 (index of first element greater than 3)
// Array includes
const includesThree = numbers.includes(3);
console.log(includesThree); // true
const includesTen = numbers.includes(10);
console.log(includesTen); // false
// Array fill
const filledArray = new Array(5).fill(0);
console.log(filledArray); // [0, 0, 0, 0, 0]
// Array flat
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
// Array flatMap
const flatMappedArray = nestedArray.flatMap(x => x);
console.log(flatMappedArray); // [1, 2, 3, 4, 5, 6]
// Array copyWithin
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 2);
console.log(copyWithinArray); // [3, 4, 5, 4, 5]
// Array entries
const entriesArray = numbers.entries();
for (const [index, value] of entriesArray) {
    console.log(`Index: ${index}, Value: ${value}`);
}   
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// Index: 3, Value: 4
// Index: 4, Value: 5
const paddedEnd = "5".padEnd(3, "0");
console.log(paddedEnd); // Expected output: "500"   
// Test string includes
const includesWorld = result.includes("World");
console.log(includesWorld); // Expected output: true
const includesJavaScript = result.includes("JavaScript");
console.log(includesJavaScript); // Expected output: false
const getValue = getValueFunc();
console.log(getValue()); // 10 (Arrow function retains 'this' context)
// Arrow function with 'this' context
const obj3 = {
    value: 10,
    getValue: function() {
        return function() { return this.value; }; // Regular function does not retain 'this' context
    }
};
const getValueFunc2 = obj3.getValue(1);
console.log(getValueFunc2()); // undefined (or error in strict mode)
// Regular function with 'this' context using bind
const obj4 = {
    value: 10,
    getValue: function() {
        return function() { return this.value; }.bind(this); // Using bind to retain 'this' context
    }
};
const getValueFunc3 = obj4.getValue();
console.log(getValueFunc3()); // 10
// Regular function with 'this' context using call
const obj5 = {
    value: 10,
    getValue: function() {
        return function() { return this.value; }.call(this); // Using call to retain 'this' context
    }
};
const getValueFunc4 = obj5.getValue();
console.log(getValueFunc4); // 10
 

