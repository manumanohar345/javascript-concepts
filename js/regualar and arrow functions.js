// Regular and Arrow Functions
// Regular function declaration
function test1(a,b) {
    return a + b;
}
const check = test1(1,3);
console.log(check); 
// Output: 4

// Regular function expression
const test2 = function(a,b) {
    return a + b;
}
test2(1,3);
// Output: 4

const testarrow = (a,b) => {
    return a + b;
};
const check2 = testarrow(1,3);
console.log(check2);    
// Output: 4

// Arrow function with implicit return
const testarrow2 = (a,b) => a + b;
const check3 = testarrow2(1,3);
console.log(check3);
// Output: 4

// Arrow function with single parameter
const testarrow3 = a => a + 1;  
const check4 = testarrow3(1);
console.log(check4);
// Output: 2

// Arrow function with no parameters
const testarrow4 = () => 42;
const check5 = testarrow4();
console.log(check5);
// Output: 42

// Arrow function with default parameters
const testarrow5 = (a = 1, b = 2) => a + b;
const check6 = testarrow5();    
console.log(check6);
// Output: 3
// Arrow function with rest parameters
const testarrow6 = (...args) => args.reduce((acc, curr) => acc + curr, 0);
const check7 = testarrow6(1, 2, 3, 4);  
console.log(check7);
// Output: 10
// Arrow function with destructuring
const testarrow7 = ({a, b}) => a + b;   
const check8 = testarrow7({a: 1, b: 2});
console.log(check8);
// Output: 3
// Arrow function with object shorthand
const testarrow8 = ({a, b}) => ({sum: a + b});
const check9 = testarrow8({a: 1, b: 2});
console.log(check9);
// Output: { sum: 3 }

// Arrow function with this context
const obj = {
    value: 10,
    getValue: function() {
        return () => this.value; // Arrow function retains 'this' context
    }
};
const getValueFunc = obj.getValue();
console.log(getValueFunc()); // Output: 10
// Regular function with 'this' context
const obj2 = {  
    value: 10,
    getValue: function() {
        return function() { return this.value; }; // Regular function does not retain 'this' context
    }
};
const getValueFunc2 = obj2.getValue();
console.log(getValueFunc2()); // Output: undefined (or error in strict mode)
// Regular function with 'this' context using bind
const obj3 = {
    value: 10,
    getValue: function() {
        return function() { return this.value; }.bind(this); // Using bind to retain 'this' context
    }
};
const getValueFunc3 = obj3.getValue();
console.log(getValueFunc3()); // Output: 10
// Regular function with 'this' context using call
const obj4 = {
    value: 10,
    getValue: function() {
        return function() { return this.value; }.call(this); // Using call to retain 'this' context
    }
};
const getValueFunc4 = obj4.getValue();
console.log(getValueFunc4); // Output: 10
// Regular function with 'this' context using apply
const obj5 = {
    value: 10,
    getValue: function() {
        return function() { return this.value; }.apply(this); // Using apply to retain 'this' context
    }
};
const getValueFunc5 = obj5.getValue();
console.log(getValueFunc5); // Output: 10   
// Regular function with 'this' context using arrow function
const obj6 = {

    value: 10,
    getValue: function() {
        return () => this.value; // Arrow function retains 'this' context
    }

};
const getValueFunc6 = obj6.getValue();
console.log(getValueFunc6()); // Output: 10
// Regular function with 'this' context using arrow function in object method
const obj7 = {
    value: 10,
    getValue: () => this.value // Arrow function does not retain 'this' context in object method
};
const getValueFunc7 = obj7.getValue;
console.log(getValueFunc7()); // Output: undefined (or error in strict mode)
// Regular function with 'this' context using arrow function in object method with bind
const obj8 = {
    value: 10,
    getValue: function() {
        return () => this.value; // Arrow function retains 'this' context
    }
};
const getValueFunc8 = obj8.getValue();
console.log(getValueFunc8()); // Output: 10
// Regular function with 'this' context using arrow function in object method with call
const obj9 = {
    value: 10,
    getValue: function() {
        return () => this.value; // Arrow function retains 'this' context
    }
};
const getValueFunc9 = obj9.getValue();
console.log(getValueFunc9()); // Output: 10
// Regular function with 'this' context using arrow function in object method with apply
const obj10 = {
    value: 10,
    getValue: function() {
        return () => this.value; // Arrow function retains 'this' context
    }
};

const getValueFunc10 = obj10.getValue();
console.log(getValueFunc10()); // Output: 10

// Regular function with 'this' context using arrow function in object method with arrow function
const obj11 = {
    value: 10,
    getValue: () => this.value // Arrow function does not retain 'this' context in object method
};
const getValueFunc11 = obj11.getValue;
console.log(getValueFunc11()); // Output: undefined (or error in strict mode)
// Regular function with 'this' context using arrow function in object method with arrow function and bind
const obj12 = {
    value: 10,
    getValue: function() {
        return () => this.value; // Arrow function retains 'this' context
    }
};
const getValueFunc12 = obj12.getValue();
console.log(getValueFunc12()); // Output: 10
// Regular function with 'this' context using arrow function in object method with arrow function and call
const obj13 = {
    value: 10,
    getValue: function() {
        return () => this.value; // Arrow function retains 'this' context
    }
};
const getValueFunc13 = obj13.getValue();
console.log(getValueFunc13()); // Output: 10