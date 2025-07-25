const products = [
    { id: 1, name: "Apple", category: "fruit", price: 1 },
    { id: 2, name: "Carrot", category: "vegetable", price: 0.5 },
    { id: 3, name: "Banana", category: "fruit", price: 1.2 },
    { id: 4, name: "Broccoli", category: "vegetable", price: 0.8 },
    { id: 5, name: "Orange", category: "fruit", price: 1.1 }
];

const test = products.filter(product => product.category === "fruit")
console.log(test);

// get just the names of the vegetables
const vegetableNames = products.filter(product => product.category === "vegetable")
    .map(product => product.name);
console.log(vegetableNames); // Output: [ 'Carrot', 'Broccoli' ]

// get the total price of all fruits
const totalFruitPrice = products.filter(product => product.category === "fruit")
    .reduce((total, product) => total + product.price, 0);
console.log(totalFruitPrice); // Output: 3.3
// get the average price of all products
const averagePrice = products.reduce((total, product) => total + product.price, 0) / products.length;
console.log(averagePrice); // Output: 0.92
// Grouping all items by category
const groupedByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
}, {});
console.log(groupedByCategory);
// Output:
// {
//   fruit: [
//     { id: 1, name: 'Apple', category: 'fruit', price: 1 },
//     { id: 3, name: 'Banana', category: 'fruit', price: 1.2 },
//     { id: 5, name: 'Orange', category: 'fruit', price: 1.1 }
//   ],
//   vegetable: [
//     { id: 2, name: 'Carrot', category: 'vegetable', price: 0.5 },
//     { id: 4, name: 'Broccoli', category: 'vegetable', price: 0.8 }
//   ]
// }