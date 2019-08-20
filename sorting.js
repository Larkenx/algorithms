let iterations = 0;
function mergeSort(array) {
  // if the array is a length of one, it's sorted
  if (array.length <= 1) return array;
  // Find our midpoint in the array to divide the array into halves
  let middle = ~~(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
  let left = [...leftArray];
  let right = [...rightArray];
  let sorted = [];
  while (left.length > 0 && right.length > 0) {
    iterations++;
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while (left.length > 0) {
    iterations++;

    sorted.push(left.shift());
  }

  while (right.length > 0) {
    iterations++;

    sorted.push(right.shift());
  }

  return sorted;
}

let arr = [2, 19, 13, 2, 2, 1, 6, 7, 8, 9, 3, 200, 6, 1];
for (let i = 0; i < 10; i++) {
  arr = [...arr, ...arr];
}

mergeSort(arr);
console.log(arr.length);
console.log(iterations);
// console.log(...merge([1, 2, 400], [1, 3]));
