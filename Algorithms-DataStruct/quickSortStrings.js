const names = require("./names.js");

function QuickSortStrings(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let smaller = [];
  let bigger = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i].localeCompare(pivot) <= 0) {
      smaller.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }

  return [...QuickSortStrings(smaller), pivot, ...QuickSortStrings(bigger)];
}

console.log("Unsorted Names: ", names);
const sorted = QuickSortStrings(names);
console.log("Sorted: ", sorted);
