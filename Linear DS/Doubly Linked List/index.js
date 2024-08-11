// Doubly Linked List

// Adding to the List

// Adding to the Head
// When adding to the head of the doubly linked list, we first need to check if there is a current head to the list.
// If there isn’t, then the list is empty, and we can simply make our new node both the head and tail of the list and set both pointers to null.
// If the list is not empty, then we will:

// 1. Set the current head’s previous pointer to our new head
// 2. Set the new head’s next pointer to the current head
// 3. Set the new head’s previous pointer to null


// Adding to the Tail
// Similarly, there are two cases when adding a node to the tail of a doubly linked list.
// If the list is empty, then we make the new node the head and tail of the list and set the pointers to null. If the list is not empty, then we:

// 1. Set the current tail’s next pointer to the new tail
// 2. Set the new tail’s previous pointer to the current tail
// 3. Set the new tail’s next pointer to null