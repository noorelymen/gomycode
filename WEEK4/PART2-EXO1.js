//--------------------------------------------------- EXO 1 ---------------------------------------------------

/*

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough 
money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" 

Exemple : 
salaryWithBonus(100, true) //=> 1000£
salaryWithBonus(30, false) //=> 30£
*/

console.log(`\n`);
console.log(`-----------------------------------------------------`);
console.log(`------------------- PART 2 - EXO1 -------------------`);
console.log(`-----------------------------------------------------`);

function salaryWithBonus(salary, bonus) {
  if (bonus) return salary * 10 + "£";
  return salary + "£";
}

console.log(`Your salary is: ${salaryWithBonus(100, true)}`);
console.log(`Your salary is: ${salaryWithBonus(30, false)}`);
