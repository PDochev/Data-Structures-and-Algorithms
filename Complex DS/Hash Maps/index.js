const LinkedList = require("../../Linear DS/Singly Linked Lists/index.js");
const Node = require("../../Linear DS/Nodes/index.js");

// The HashMap class implements a hash map data structure using separate chaining to handle collisions.
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  // Hashing function
  // The hash() method takes a key as input and returns the hash code for that key.
  // The hash code is calculated by summing the ASCII values of the characters in the key and taking the modulo of the sum with the size of the hashmap.
  // This ensures that the hash code falls within the range of valid indices in the hashmap.
  // The hash() method has a time complexity of O(n) since it has to iterate through the characters in the key to calculate the hash code.
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  // Separate chaining
  // Separate chaining is a collision resolution technique that involves storing all the colliding keys in a linked list
  // at the same index in the hash table.
  // This allows multiple keys with the same hash code to be stored and retrieved independently.
  // The assign() method takes a key and a value as input and stores the key-value pair in the hashmap.
  // It calculates the hash code for the key and retrieves the linked list at that index in the hashmap.
  // If the linked list is empty, it adds the key-value pair to the head of the list.
  // If the linked list is not empty, it iterates through the list to find the key. If the key is found, it updates the value. If the key is not found,
  // it adds the key-value pair to the end of the list.
  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    console.log(`Storing ${value} at index ${arrayIndex}`);
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.next) {
        current.next = new Node({ key, value });
        break;
      }
      current = current.next;
    }
  }

  // The retrieve() method takes a key as input and retrieves the value associated with that key from the hashmap.
  // It calculates the hash code for the key and retrieves the linked list at that index in the hashmap.
  // It then iterates through the list to find the key. If the key is found, it returns the value associated with the key.
  // If the key is not found, it returns null.
  // The retrieve() method has a time complexity of O(n) since it has to iterate through the linked list to find the key.
  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        console.log(
          `\nRetrieving ${current.data.value} from index ${arrayIndex}`
        );
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

const birdCensus = new HashMap(16);
birdCensus.assign("mandarin duck", "Central Park Pond");
birdCensus.assign("monk parakeet", "Brooklyn College");
birdCensus.assign("horned owl", "Pelham Bay Park");

console.log(birdCensus.retrieve("mandarin duck"));
console.log(birdCensus.retrieve("monk parakeet"));
console.log(birdCensus.retrieve("horned owl"));

module.exports = HashMap;
