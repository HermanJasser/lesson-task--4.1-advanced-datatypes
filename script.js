/**** exercise 1 *****/

function largeFactorial(n) {
    if(n == 1 || n == 0){
        return BigInt(1);
    } else{
        let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result
    }
}
// Example usage:
//console.log(largeFactorial(100)); // Outputs the factorial of 100 as a BigInt


/**** exercise 2*****/
function uniqueElements(arr) {
    let uniqueNumber = new Set(arr);

    return uniqueNumber;

}
// Example usage:
//console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

/**** exercise 3 *****/
function countOccurrences(arr) {
    let counter = new Map();
    arr.forEach(element => {
        if (counter.has(element)) {
          counter.set(element, counter.get(element) + 1);
        } else {
          counter.set(element, 1);
        }
      });
      return counter;
    
}
// Example usage:
//console.log(countOccurrences(['apple', 'banana', 'apple', 'orange']));
// Map { 'apple' => 2, 'banana' => 1, 'orange' => 1 }

/**** exercise 4 *****/

function createUser(id, name) {
    let ider = Symbol("id");
    let user = {
        [ider]: id,
        name: name
    }
    return user;
}
// Example usage:
const user = createUser(1, 'Alice');
//console.log(user); // Output should contain a Symbol representing the user id


/**** exercise 5 *****/
function cacheFunction(fn) {
    const cache = new WeakMap(); 

    return function(obj) {
        if (cache.has(obj)) {
            return cache.get(obj); 
        } else {
            const result = fn(obj);
            cache.set(obj, result); 
            return result;          
        }
    };


}


// Example usage:
const cache = cacheFunction(obj => obj.name);
const user1 = {name: 'Alice'};
const user2 = {name: 'Bob'};
//console.log(cache(user1)); // 'Alice'
//console.log(cache(user2)); // 'Bob'

/**** exercise 6 *****/

function trackObjects() {
    // Create a WeakSet to track the objects
    const processedObjects = new WeakSet();

    return {
        // Method to add an object to the WeakSet
        add(obj) {
            if (typeof obj === 'object' && obj !== null) {
                processedObjects.add(obj);
            } else {
                throw new TypeError('Only non-null objects can be added');
            }
        },
        // Method to check if an object is in the WeakSet
        has(obj) {
            return processedObjects.has(obj);
        }
    };
}

// Example usage:
const track = trackObjects();
const obj1 = {};
const obj2 = {};

track.add(obj1);
//console.log(track.has(obj1)); // true
//console.log(track.has(obj2)); // false


/**** exercise 7 *****/

class Stack {
    constructor() {
        this.items = [];
    }

    // Adds an item to the top of the stack
    push(item) {
        this.items.push(item);
    }

    // Removes and returns the item at the top of the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack underflow');
        }
        return this.items.pop();
    }

    // Returns the item at the top of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }

    // Checks if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
//console.log(stack.peek()); // 20
//console.log(stack.pop());  // 20
//console.log(stack.isEmpty()); // false