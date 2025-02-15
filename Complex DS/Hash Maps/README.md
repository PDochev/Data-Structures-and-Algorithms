# Hash maps

![Hash Maps Data Structure](Hash_Maps.svg)

Hash maps map keys to their related values, and are one of the most efficient data structures when it comes to retrieving stored data. This is because the key associated with every value added allows for faster retrieval later on. Hash maps are also known as hash tables, maps, dictionaries, or associative arrays. They are widely used in computer science and software engineering to store and retrieve data efficiently. In order for a relationship to be a map, every key that is used can only be the key to a single value. This means that the keys must be unique. However, the values can be duplicated.

Hash map: A key-value store that uses an array and a hashing function to save and retrieve values.
Key: The identifier given to a value for later retrieval.
Hash function: A function that takes some input and returns a number.
Compression function: A function that transforms its inputs into some smaller range of possible outputs.

Recipe for saving to a hash table:

- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index is empty, if so, save the value (and the key) there.
- If the array is full at that index continue to the next possible position depending on your collision strategy.

Recipe for retrieving from a hash table:

- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index has contents, if so, check the key saved there.
- If the key matches the one you're looking for, return the value.
- If the keys don't match, continue to the next position depending on your collision strategy.

## References

- [Codecademy](https://www.codecademy.com)