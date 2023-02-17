const InsertionSort = (arr) => {
  const sorted = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    sorted.splice(sorted.findIndex((elem) => elem > arr[i]) + 1, 0, arr[i]);
  }

  return sorted;
};

const arr1 = [3, 4, 1, 5, 2];
const arr2 = [9, 7, 8, 6, 10, 5];
const arr3 = [100, 20, 30, 40, 10, 50];

console.log(InsertionSort(arr1));
console.log(InsertionSort(arr2));
console.log(InsertionSort(arr3));
