function QuickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let sorted = [];

  // Divide
  // Get a pivot
  let pivot = array[0];

  // Define two arrays, smaller and larger
  let smaller = [];
  let bigger = [];

  for (let i = 1; i < array.length; i++) {
    if (pivot >= array[i]) {
      smaller.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }

  // If new array.length is <= 1, return
  // Recursion on those arrays, call QuickSort
  if (smaller.length > 1) {
    let sortedSmaller = QuickSort(smaller);
    smaller = sortedSmaller;
  }

  if (bigger.length > 1) {
    let SortedBigger = QuickSort(bigger);
    bigger = SortedBigger;
  }
  // Conquer
  // Join smaller + pivot + larger
  sorted = [...smaller, pivot, ...bigger];

  // Return the sorted array
  return sorted;
}

const unsorted = [3, 5, 1, 4, 3, 2, 6, 10, 3, 5, 6, 11, 8];
console.log("Unsorted: ", unsorted);

const sorted = QuickSort(unsorted);
console.log("Sorted: ", sorted);
