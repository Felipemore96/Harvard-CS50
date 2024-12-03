function SelectionSort(array) {
  let sorted = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let min = 0;
    for (let j = 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    sorted.push(array[min]);
    array.splice(min, 1);
  }
  return sorted;
}

const unsorted = [6, 2, 8, 1, 3, 9, 5];
console.log("Unsorted: ", unsorted);

const sorted = SelectionSort(unsorted);
console.log("Sorted: ", sorted);
