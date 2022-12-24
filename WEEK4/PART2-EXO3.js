//--------------------------------------------------- EXO 3 ---------------------------------------------------

/*

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table for 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end.

*/

console.log(`\n`);
console.log(`-----------------------------------------------------`);
console.log(`------------------- PART 2 - EXO3 -------------------`);
console.log(`-----------------------------------------------------`);

function multiplicationTable(number) {
  var mult = "";
  for (var i = 0; i <= 10; i++) {
    mult += `${i} * ${number} = ${i * number}`; //concaténation doesn't add a line break un like console.log
    if (i < 10) {
      mult += `\n`;
    }
  }

  return mult;
}

//for (var j = 0; j <= 10; j++)
console.log(multiplicationTable(6));

console.log("hi");
