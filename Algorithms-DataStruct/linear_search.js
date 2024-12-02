function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
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

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

result = linearSearch(numbers, 8);
verify(result);
