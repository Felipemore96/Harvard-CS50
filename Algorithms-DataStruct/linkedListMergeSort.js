const { LinkedList } = require("./linked_list");

function MergeSort(linkedList) {
  // Sorts a linked lisk in ascending order
  // Recursively divide the linked list into sublists containing a single node
  // Repeatedly merge the sublists to produce sorted sublists unril one remain
  // Returns a sorted linked list

  if (linkedList.size() <= 1) {
    return linkedList;
  }

  // Devide - into sublists
  const { leftHalf, rightHalf } = Split(linkedList);

  // Combine - Merge sorted sublists
  return Merge(MergeSort(leftHalf), MergeSort(rightHalf));
}

function Split(linkedList) {
  // Devide the unsorted list at midpoint into sublists

  if (!linkedList || !linkedList.head) {
    return { leftHalf: linkedList, rightHalf: null };
  } else {
    const size = linkedList.size();
    let mid = Math.floor(size / 2);

    let midNode = linkedList.nodeAtIndex(mid - 1);

    let leftHalf = linkedList;
    let rightHalf = new LinkedList();
    rightHalf.head = midNode.next;
    midNode.next = null;
    return { leftHalf, rightHalf };
  }
}

function Merge(left, right) {
  // Merges two linked lists, sorting by data in nodes
  // Returns a new, merged list

  let merged = new LinkedList();

  merged.append(0); // Add a fake head that is discarded later

  let current = merged.head;

  let leftHead = left.head;
  let rightHead = right.head;

  while (leftHead || rightHead) {
    if (!leftHead) {
      current.next = rightHead;
      rightHead = rightHead.next; // Call next on right to stop loop
    } else if (!rightHead) {
      current.next = leftHead;
      leftHead = leftHead.next;
    } else {
      let leftData = leftHead.data;
      let rightData = rightHead.data;

      if (leftData < rightData) {
        current.next = leftHead;
        leftHead = leftHead.next;
      } else {
        current.next = rightHead;
        rightHead = rightHead.next;
      }
    }
    current = current.next;
  }

  // Discard fake head
  let head = merged.head.next;
  merged.head = head;

  return merged;
}

// Example Usage
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(5);
linkedList.append(30);
linkedList.append(20);

console.log("Unsorted list:");
linkedList.print();

const sortedList = MergeSort(linkedList);

console.log("Sorted list:");
sortedList.print();
