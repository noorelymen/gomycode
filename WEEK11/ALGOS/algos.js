const arr = [1, 34, 12, 9, 4, 26, 2];

console.log("avant: ", arr);
arr.sort((a, b) => {
  //we can modify the function but by default the function implemented is quicksort here we just tell it what to do example here we tell it to sort asc
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

arr.sort((a, b) => a - b); //if a > b 1 else -1 else 0 -> asc b - a desc

console.log("apres: ", arr); //will sort the array alphabetically considers the elements strings
