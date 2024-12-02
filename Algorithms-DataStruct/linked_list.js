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

// Example Usage
const list = new LinkedList();
list.print(); // Output: []
list.append(10); // Add 10 to the end
list.append(30); // Add 10 to the end
list.append(40); // Add 10 to the end
list.append(20); // Add 20 to the end
list.prepend(5); // Add 5 to the beginning
list.print(); // Output: [5, 10, 20]
list.delete(10); // Remove 10
list.print(); // Output: [5, 20]
