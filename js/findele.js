function findElementIndex(arr, element) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        };
    }

    return -1
}
let arr = [2, 4, 6, 8, 10];
let element = 6;
findElementIndex(arr, element)
console.log(findElementIndex(arr, element));