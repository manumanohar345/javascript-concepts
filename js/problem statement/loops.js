// // for loop using leta and var
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// // Output: 0 1 2 3 4
// // for loop using var
// for (var j = 0; j < 5; j++) {
//     console.log(j);
// }   
// // Output: 0 1 2 3 4

// // and do with setimeout
// setTimeout(() => {
//     console.log(j); // Output: 5
// }, 1000);
// // for loop using let
// for (let k = 0; k < 5; k++) {
//     setTimeout(() => {
//         console.log(k); // Output: 0 1 2 3 4
//     }, 1000);
// }   

// // add settimout but without duartions
// setTimeout(() => {
//     console.log("This will execute after 1 second");
// });
// Output: This will execute after 1 second
// for loop with let and var and using setTimeout without duration
// for (var m = 1; m < 4; m++) {
//     setTimeout(() => {
//         console.log(m); // Output: 4 (because var is function scoped)
//     });
// }
// for loop with var and using setTimeout without duration
// for (var n = 0; n < 5; n++) {
//     setTimeout(() => {
//         console.log(n); // Output: 5 (because var is function scoped)
//     });
// }

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // Output: 5 (because var is function scoped)
    });
}
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i); // Output: 0 1 2 3 4 (because let is block scoped)
//     });
// }

