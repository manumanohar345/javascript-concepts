const obj = {
    value: 10,
    name: 'Manoh',
    hobbies: ['reading', 'coding', 'gaming'],
}
// Loop through object properties
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
    }
}