class Node {
  constructor(data) {
    this.data = data; // Value of the node
    this.next = null; // Reference to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Start of the list
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // If the list is empty
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      // Traverse to the last node
      current = current.next;
    }
    current.next = newNode; // Add the new node at the end
  }

  // Add a node at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode; // Make the new node the head
  }

  // Delete a node by value
  delete(data) {
    if (!this.head) return; // List is empty

    // If the head node is to be deleted
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      // If the value is found
      current.next = current.next.next;
    }
  }

  search(data) {
    // Start with the head node
    let current = this.head;

    // Traverse the list
    while (current) {
      if (current.data === data) {
        return current; // Return the node if found
      }
      current = current.next; // Move to the next node
    }

    return null; // Return null if not found
  }

  insert(data, index) {
    // Insert new node containing data at index position
    // Insertion takes O(1), finding node at index position takes O(N)
    // Takes overall O(N)

    if (index === 0) {
      this.append(data);
    }

    if (index > 0) {
      let newNode = new Node(data);

      let position = index;
      let current = this.head;

      while (position > 1) {
        current = current.next;
        position -= 1;
      }

      let prevNode = current;
      let nextNode = current.next;

      prevNode.next = newNode;
      newNode.next = nextNode;
    }
  }

  nodeAtIndex(index) {
    if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      let position = 0;

      while (position < index) {
        current = current.next;
        position += 1;
      }

      return current;
    }
  }

  // Print the list
  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result);
  }
}

module.exports = { LinkedList };

// Example Usage
const list = new LinkedList();
list.print(); // Output: []
list.append(10); // Add 10 to the end
list.append(30); // Add 30 to the end
list.append(40); // Add 40 to the end
list.append(20); // Add 20 to the end
list.prepend(5); // Add 5 to the beginning
list.print(); // Output: [ 5, 10, 30, 40, 20 ]
list.delete(10); // Remove 10
list.insert(69, 3); // Insert 69 in position index = 3
list.print(); // Output: [ 5, 30, 40, 69, 20 ]
