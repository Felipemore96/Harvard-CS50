function recursiveBinarySearch(array, target) {
  if (array.length === 0) {
    return false;
  } else {
    midpoint = Math.floor(array.length / 2);
  }

  if (array[midpoint] === target) {
    return true;
  } else if (array[midpoint] < target) {
    return recursiveBinarySearch(array.slice(midpoint + 1), target);
  } else {
    return recursiveBinarySearch(array.slice(0, midpoint), target);
  }
}

function verify(index) {
  if (index !== -1) {
    console.log(`Target found at index: ${index}`);
  } else {
    console.log("Target not found in the array.");
  }
}

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

result = recursiveBinarySearch(numbers, 12);
verify(result);
