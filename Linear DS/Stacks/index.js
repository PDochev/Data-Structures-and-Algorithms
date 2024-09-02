const LinkedList = require("../Singly Linked Lists/index.js");

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  // Check if the stack is empty or not , if empty return true , else return false
  isEmpty() {
    return this.size === 0;
  }

  // Check if the stack is full or not , if full return false , else return true
  hasRoom() {
    return this.size < this.maxSize;
  }

  // Add data to the top of the stack
  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
      console.log(
        `Added ${value} to the stack! Stack size is now ${this.size}.`
      );
    } else {
      throw new Error("Stack is full!");
    }
  }

  // Remove data from the top of the stack
  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      console.log(
        `Removed ${value} from the stack! Stack size is now ${this.size}.`
      );
      return value;
    } else {
      throw new Error("Stack is empty!");
    }
  }

  // Peek at the top of the stack
  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

  count() {
    return this.size;
  }
}

const pizzaStack = new Stack(6);

// 2. Add pizzas as they are ready until we fill up the stack
for (let i = 1; i <= pizzaStack.maxSize; i++) {
  pizzaStack.push("Pizza #" + i);
}

// 3. Try pushing another pizza to check for overflow
try {
  pizzaStack.push("Pizza #7");
} catch (e) {
  console.log(e);
}

// 4. Peek at the pizza on the top of stack and log its value
console.log("The first pizza to deliver is", pizzaStack.peek());

// 5. Deliver all the pizzas from the top of the stack down
while (!pizzaStack.isEmpty()) {
  pizzaStack.pop();
}

// 6. Try popping another pizza to check for empty stack
try {
  pizzaStack.pop();
} catch (e) {
  console.log(e);
}

module.exports = Stack;
