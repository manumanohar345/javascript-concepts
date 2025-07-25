function findIntervals(arr) {
    const intervals = [];
    for (let i = 0; i < arr.length - 1; i++) {
        intervals.push(arr[i + 1] - arr[i]);
    }
    return intervals;
}
const arr = [1, 4, 6];
const intervals = findIntervals(arr);
console.log(intervals); // Output: [3, 2]

