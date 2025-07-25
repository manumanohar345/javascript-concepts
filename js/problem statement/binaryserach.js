binarysearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}
//     }
//
//         if (current.next) {
//             current.next = current.next.next;
//         }
//     }
//
//     find(data) {
//         let current = this.head;
//         while (current) {
//             if (current.data === data) {
//                 return current;
//             }
//             current = current.next;
//         }
//         return null; // Data not found
//     }
// }
// // Example usage of LinkedList
// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// console.log(linkedList.find(2)); // Node with data 2
// console.log(linkedList.find(4)); // null (not found)
// console.log(binarysearch([1, 2, 3, 4, 5], 3)); // Output: 2
// console.log(binarysearch([1, 2, 3, 4, 5], 6)); // Output: -1 (not found)
// Example usage of binarysearch
console.log(binarysearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarysearch([1, 2, 3, 4, 5], 6)); // Output: -1 (not found)
// Example usage of binarysearch
console.log(binarysearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(binarysearch([10, 20, 30, 40, 50], 60)); // Output: -1 (not found)
console.log(binarysearch([5, 10, 15, 20, 25], 15)); // Output: 2
console.log(binarysearch([5, 10, 15, 20, 25], 30)); // Output: -1 (not found)
console.log(binarysearch([100, 200, 300, 400, 500], 300)); // Output: 2
console.log(binarysearch([100, 200, 300, 400, 500], 600)); // Output: -1 (not found)
console.log(binarysearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarysearch([1, 3, 5, 7, 9], 2)); // Output: -1 (not found)
// Example usage of binarysearch