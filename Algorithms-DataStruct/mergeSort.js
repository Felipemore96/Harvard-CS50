function MergeSort(array) {
  // Sort an array in ascending order
  // Returns a new sorted list

  if (array.length <= 1) {
    return array; // Base case: an array of 1 or 0 elements is already sorted
  }

  // Devide - into sublists
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid); // This one includes mid

  // Combine - Merge sorted sublists
  return Merge(MergeSort(left), MergeSort(right));
}

function Merge(left, right) {
  // Merges two arrays, sorting them in the process
  // Returns a new meged array

  const result = [];
  let i = 0,
    j = 0;

  // Conquer - sort sublists
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Example use
const numbers = [47, 15, 5, 26, 90, 3, 22, 57];
console.log("Unsorted array:", numbers);

const sortedNumbers = MergeSort(numbers);
console.log("Sorted array: ", sortedNumbers);
