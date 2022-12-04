/*---------------------------------- Exo 1 ---------------------------------

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes(), which must take in input array, containing the names of people who 
like an item. It must return the display text as shown in the examples:

likes([]) -- must be "no one likes this"
likes(["Peter"]) -- must be "Peter likes this"
likes(["Jacob", "Alex"]) -- must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) -- must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) -- must be "Alex, Jacob and 2 others like this"

*/

const like = (names) => {
  switch (names.length) {
    case 0:
      return "No one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.leng - 2} others like this`;
  }
};

console.log(like(["Max", "John", "Mark"]));

/*

---------------------------------- Exo 2 -----------------------------------

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.Finish the solution so that it returns the sum of all the 
multiples of 3 or 5 below the number passed in.

*/

const multiple = (number) => {
  let result = 0;
  for (let i = 0; i < number; i++) {
    if (!(i % 3) || !(i % 5)) {
      result += i;
    }
  }
  return result;
};

console.log(multiple(15));

/*
---------------------------------- Exo 3 -----------------------------------

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing 
in this way until a single-digit number is produced. The input will be a non-negative integer.

Exemples : 

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

const digitalRoot = (number) => {
  let result = 0;
  number = number.toString();
  for (let i = 0; i < number.length; i++) {
    result += parseInt(number[i]);
  }
  if (result.toString().length <= 1) {
    return result;
  } else {
    return digitalRoot(parseInt(result));
  }
};

/*

SOLUTION 1
----------

const digitalRoot = (number) => {
  if(number < 10) return number
  const numbArr = number.toString().split("")
  const sum = numbArr.reduce((accumulatorr, value) => {//reduce() even though not really used, takes all the elements of an array and returns a single value depending of what we want, we can make it return a sum...
    //acc by default takes first element of the array
    //value takes the second one
    //next iteration is stored in the acc and the next value in the array is stored in the value
    return acc + parseInt(value)
  }, 12) //if we specify 12 here we're saying acc = 12

  //or simpler
  const sum = numbArr.reduce((accumulatorr, value) => acc + parseInt(value)

  while(number > 10){
    const numbArr = number.toString().split("")
    const sum = numbArr.reduce((accumulatorr, value) => acc + parseInt(value)
    sum = number
  }
};

SOLUTON 2
---------
const digitalRoot = (number) => {
  if(number < 10) return number //or do while

  const numbArr = number.toString().split("")
  const sum = numbArr.reduce((accumulator, value) => acc + parseInt(value),0)
  return digitalRoot(sum)
};
*/

console.log("Digital root of 16: ", digitalRoot(16));
console.log("Digital root of 942 ", digitalRoot(942));
console.log("Digital root of 132189", digitalRoot(132189));
console.log("Digital roots of 493193", digitalRoot(493193));

/*
---------------------------------- Exo 4 -----------------------------------

You are given an array (which will have a length of at least 3, but could be very large) containing 
integers. The array is either entirely comprised of odd integers or entirely comprised of even integers 
except for a single integer N. Write a method that takes the array as an argument and returns this 
"outlier" N.

Examples :

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

/*

---------------------------------- Exo 5 -----------------------------------

Write a function that takes in a string of one or more words, and returns the same string, but with 
all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist 
of only letters and spaces. Spaces will be included only when more than one word is present.

Examples :

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

spinWords( "This is a test") => returns "This is a test"

spinWords( "This is another test" )=> returns "This is rehtona test"

*/
