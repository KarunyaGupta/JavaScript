let arr = [64, 25, 12, 22, 11];

// Initialize min and max values
let min = arr[0];
let max = arr[0];
let minIndex = 0;
let maxIndex = 0;

// Iterate through the array to find min and max
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

// Print min and max with their indices
console.log(`Min element: ${min} at index ${minIndex}`);
console.log(`Max element: ${max} at index ${maxIndex}`);


// sorting 
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap elements
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Sorted array:", arr);