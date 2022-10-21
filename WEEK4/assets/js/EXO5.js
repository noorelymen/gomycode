/*
=====================================================================================================
                                            EXERCICE 5
=====================================================================================================

1. Declare an empty array.
2. Declare an array with more than 5 number of elements.
3. Find the length of your array.
4. Get the first item, the middle item and the last item of the array.
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array, the array size should be greater than 5.
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
7. Print the array using console.log().
8. Print the number of companies in the array.
9. Print the first company, middle and last company.

*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`------------------- EXERCICE 5 -------------------`);
console.log(`--------------------------------------------------`);

/*
--------------------------------------------------------------------------------------
          1. Declaring an empty array
--------------------------------------------------------------------------------------
*/

var tab = [];

/*
--------------------------------------------------------------------------------------
          2. Array with more than 5 elements
--------------------------------------------------------------------------------------
*/
var elements = ["fire", "water", "air", "wood", "earth", "metal"];

/*
--------------------------------------------------------------------------------------
          3. Finding the length of the array
--------------------------------------------------------------------------------------
*/

console.log(`Number of elements: ${elements.length}`);

/*
--------------------------------------------------------------------------------------
          4. Get the first item, the middle item and the last item of the array
--------------------------------------------------------------------------------------
*/

console.log(`First element: ${elements.shift()}`); //first item
console.log(
  `Middle element (using Math.round): ${
    elements[Math.round((elements.length - 1) / 2)]
  }`
); //middle item: solution 1
console.log(
  `Middle element (using Math.floor): ${
    elements[Math.floor(elements.length / 2)]
  }`
); //middle item: solution 2
console.log(`First element: ${elements.pop()}`); //last item

/*
--------------------------------------------------------------------------------------
          5. Declare an array called mixedDataTypes, put different 
          data types in the array and find the length of the array, 
          the array size should be greater than 5
--------------------------------------------------------------------------------------
*/

var mixedDataTypes = [2, "hello", "20", true, "world", false, ""];
console.log(`Mixed Data Types Array Length: ${mixedDataTypes.length}`);

/*
--------------------------------------------------------------------------------------
          6. Declare an array variable name itCompanies and assign 
             initial values Facebook, Google, Microsoft, Apple, IBM, 
             Oracle and Amazon
--------------------------------------------------------------------------------------
*/

var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

/*
--------------------------------------------------------------------------------------
          7. Print the array using console.log()
--------------------------------------------------------------------------------------
*/

console.log(`IT Companies Array: ${itCompanies}`);

/*
--------------------------------------------------------------------------------------
          8. Print the number of companies in the array
--------------------------------------------------------------------------------------
*/

console.log(`Number of IT Companies: ${itCompanies.length}`);

/*
--------------------------------------------------------------------------------------
          9. Print the first company, middle and last company
--------------------------------------------------------------------------------------
*/

console.log(`First company: ${itCompanies.shift()}`);
console.log(`Middle company: ${itCompanies[Math.floor(elements.length / 2)]}`);
console.log(`Last company: ${itCompanies.pop()}`);
