function QuickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let sorted = [];
  let pivot = array[0];
  let smaller = [];
  let bigger = [];

  for (let i = 1; i < array.length; i++) {
    if (pivot >= array[i]) {
      smaller.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }

  return [...QuickSort(smaller), pivot, ...QuickSort(bigger)];
}

const unsorted = [3, 5, 1, 4, 3, 2, 6, 10, 5, 6, 11, 8];
console.log("Unsorted: ", unsorted);
const sorted = QuickSort(unsorted);
console.log("Sorted: ", sorted);
