//  Javascript program Find the sum of all non- repeated
// elements in an array

// Find the sum of all non-repeated elements
// in an array
function sumDistinct(arr, n) {
  let sum = 0;

  // Hash to store all element of array
  let s = new Set();
  for (let i = 0; i < n; i++) {
    if (!s.has(arr[i])) {
      sum += arr[i];
      s.add(arr[i]);
    }
  }
  return sum;
}

// Driver code

let arr = [1, 2, 3, 1, 1, 4, 5, 6];
let n = arr.length;
document.write(sumDistinct(arr, n));
