// Using JavaScript Map() to create a hash table

const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }

  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }

  remove(key) {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }

  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const hashTable = new HashTable();
hashTable.insert("firstName", "John");
hashTable.insert("lastName", "Doe");
hashTable.insert("age", 30);
hashTable.insert("dob", "01/01/1990");
hashTable.insert("address", "123 Main St");

console.log(hashTable.search("lastName"));
console.log(hashTable.search("age"));
console.log(hashTable.search("dob"));

console.log(hashTable);

hashTable.remove("dob");
hashTable.remove("address");
hashTable.remove("firstName");
hashTable.remove("age");
console.log(hashTable);
