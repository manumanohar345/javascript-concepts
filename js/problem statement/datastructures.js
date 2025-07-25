//data structures.js
// This file contains various data structures and their basic operations in JavaScript.
// Arrays
// Arrays are ordered collections of items, which can be of any type.
// They are mutable and can grow or shrink in size.
// Example of an array
const array = [1, 2, 3, 4, 5];
// Basic operations on arrays
// Adding an item to the end of the array
array.push(6); // [1, 2, 3, 4, 5, 6]
// Removing the last item from the array
array.pop(); // [1, 2, 3, 4, 5]
// Adding an item to the beginning of the array 
array.unshift(0); // [0, 1, 2, 3, 4, 5]
// Removing the first item from the array
array.shift(); // [1, 2, 3, 4, 5]
// Accessing an item by index
const firstItem = array[0]; // 1
// Modifying an item by index
array[0] = 10; // [10, 2, 3, 4, 5]
// stacks data structure and algorithms
// Stacks are Last In First Out (LIFO) data structures.
// They allow adding and removing items from the top of the stack.
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
// Example usage of Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.isEmpty()); // false
// queues data structure and algorithms
// Queues are First In First Out (FIFO) data structures.
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);  
    }

    dequeue() { 
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
// Example usage of Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
console.log(queue.isEmpty()); // false
// Linked Lists
// Linked Lists are collections of nodes where each node contains data and a reference to the next node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}   
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            if (!current.next) {
                this.tail = current; // Update tail if last node is removed
            }
        }
    }
}   
// Example usage of LinkedList
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.remove(2);
console.log(linkedList.head.data); // 1
console.log(linkedList.head.next.data); // 3
// Hash Tables
// Hash Tables are collections of key-value pairs.
class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
    }

    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.table.length;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }
}       
// Example usage of HashTable
const hashTable = new HashTable();
hashTable.set('name', 'Alice');
hashTable.set('age', 25);
console.log(hashTable.get('name')); // Alice
console.log(hashTable.get('age')); // 25
console.log(hashTable.get('nonexistent')); // undefined
// Sets
// Sets are collections of unique values.
class SetCollection {
    constructor() {
        this.items = {};
    }

    add(value) {
        if (!this.has(value)) {
            this.items[value] = true;
        }
    }

    has(value) {
        return this.items.hasOwnProperty(value);
    }

    delete(value) {
        if (this.has(value)) {
            delete this.items[value];
        }
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }
}
// Example usage of SetCollection
const set = new SetCollection();
set.add(1);
set.add(2);
set.add(2); // Duplicate, will not be added
set.add(3);
console.log(set.size()); // 3
console.log(set.has(2)); // true
console.log(set.has(4)); // false
set.delete(2);
console.log(set.has(2)); // false
set.clear();
console.log(set.size()); // 0
// Maps
// Maps are collections of key-value pairs, where keys can be of any type.
class MapCollection {
    constructor() {
        this.items = {};
    }

    set(key, value) {
        this.items[key] = value;
    }

    get(key) {
        return this.items.hasOwnProperty(key) ? this.items[key] : undefined;
    }

    has(key) {
        return this.items.hasOwnProperty(key);
    }

    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
        }
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }
}
