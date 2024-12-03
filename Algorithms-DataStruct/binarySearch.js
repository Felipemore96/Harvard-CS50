const sortedNames = require("./quickSortStrings");

function binarySearch(array, target) {
  first = 0;
  last = array.length - 1;

  while (first <= last) {
    midpoint = Math.floor((first + last) / 2);

    if (array[midpoint] === target) {
      return midpoint;
    }

    if (array[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return -1;
}

function verify(index) {
  if (index !== -1) {
    console.log(`Target found at index: ${index}`);
  } else {
    console.log("Target not found in the array.");
  }
}

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// result = binarySearch(numbers, 6);
// verify(result);

result = binarySearch(sortedNames, "Laura Morris");
verify(result);
