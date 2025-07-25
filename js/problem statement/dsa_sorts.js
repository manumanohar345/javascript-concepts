// 1. Bubble Sort
// Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log('Bubble Sort:', bubbleSort([5, 1, 4, 2, 8])); // Output: [1,2,4,5,8]

// 2. Selection Sort
// Selection Sort repeatedly finds the minimum element from the unsorted part and puts it at the beginning.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap the found minimum element with the first element
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
console.log('Selection Sort:', selectionSort([64, 25, 12, 22, 11])); // Output: [11,12,22,25,64]

// 3. Insertion Sort
// Insertion Sort builds the sorted array one item at a time by comparing each new element to those already sorted.
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log('Insertion Sort:', insertionSort([12, 11, 13, 5, 6])); // Output: [5,6,11,12,13]

// 4. Merge Sort
// Merge Sort is a divide and conquer algorithm that splits the array into halves, sorts each half, and merges them.
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
// Helper function for Merge Sort
function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    // Concatenate remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log('Merge Sort:', mergeSort([38, 27, 43, 3, 9, 82, 10])); // Output: [3,9,10,27,38,43,82]

// 5. Quick Sort
// Quick Sort picks a pivot and partitions the array into elements less than and greater than the pivot, then sorts recursively.
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log('Quick Sort:', quickSort([10, 7, 8, 9, 1, 5])); // Output: [1,5,7,8,9,10]

// 6. Heap Sort
// Heap Sort builds a max heap and repeatedly extracts the maximum element to sort the array.
function heapSort(arr) {
    let n = arr.length;
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}
// Helper function for Heap Sort
function heapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
console.log('Heap Sort:', heapSort([12, 11, 13, 5, 6, 7])); // Output: [5,6,7,11,12,13]
