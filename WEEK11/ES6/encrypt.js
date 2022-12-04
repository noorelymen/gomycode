const input = "Piano";

//STEP 1: reverse the input
const reversed = [...input].reverse();
console.log("Reversed = ", reversed);

//STEP 2: Replace all vowels by a = 0, e = 1, i = 2, o = 2, u = 3

const vowels = reversed.map((element) => {
  //   if (element == "a") return "0";
  //   if (element == "e") return "1";
  //   if (element == "i") return "2";
  //   if (element == "o") return "2";
  //   if (element == "u") return "3";
  //   return element;
  switch (element) {
    case "a":
      return "0";
      break;
    case "e":
      return "1";
      break;
    case "i":
      return "2";
      break;
    case "o":
      return "2";
      break;
    case "u":
      return "u";
      break;
    default:
      return element;
  }
});
console.log("Replaced", vowels);

const result = vowels.join("") + "aca";
console.log("Replaced", result);

//SOLUTION PROF
/*
  const encryption = (text) => {
  let textInv = text.split("").reverse(); //splits turn it into an array and reverse
  const obj = {
    a: 0,
    e: 1,
    i: 2,
    o: 2,
    u: 3,
  };

  textInv = textInv.map((element) =>
    obj[element] == undefined ? element : obj[element]
  ); //obj["e"]

  return textInv.join("") + "aca";
};

console.log(encryption("apple"));
*/
