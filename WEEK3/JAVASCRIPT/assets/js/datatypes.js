/*
=========================================================================
                          EXERCICE 1 - PART 3
=========================================================================

4. Create datatypes.js file and use the JavaScript typeof operator to 
   check different data types. Check the data type of each variable

5. Declare four variables without assigning values

6. Declare four variables with assigned values

7. Declare variables to store your first name, last name, marital status, 
   country and age in multiple lines

8. Declare variables to store your first name, last name, marital status, 
   country and age in a single line

9. Declare two variables myAge and yourAge and assign them initial values 
   and log to the browser console like this: 
   I am 25 years old.
   You are 30 years old.

*/

console.log(`\n`);
console.log(`-----------------------------------------------------------`);
console.log(`------------------- EXERCICE 1 - PART 3 -------------------`);
console.log(`-----------------------------------------------------------`);

/*
-------------------------------------------------------------------------
                          4. Checking data types
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`4. Checking Data Types`);
console.log(`-----------------------------------------------------------`);
console.log(`\n`);

// String
var text = "Lorem ipsum dolor sit amet consectetur adipisicing.";

//Boolean
var bool = true;

// Undefined
var undef;

// NULL
var empty = null;

// Table
var tab = ["Hello", "World"];

// Objects
var personne = {
  "nom propre": "MEBARKI",
  prenom: "Noor",
  age: 29,
  profession: "Web Developer",
};

console.log(`\n\n1. Variables`);

console.log(
  `
String = ${text}

Boolean = ${bool}

Undefined = ${undef}

Null = ${empty}

Tab = ${tab}

Object = ${personne}
`
);

console.log(`\n\n2. Variable types`);

console.log(
  `
String's type: ${typeof text}

Boolean's type: ${typeof bool}

Undefined's type: ${typeof undef}

Empty's type: ${typeof empty}

Tab's type: ${typeof tab}

Object's type: ${typeof personne}
`
);

/*
-------------------------------------------------------------------------
                  5. Declaring 4 variables without values
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`5. Declaring 4 variables without values`);
console.log(`-----------------------------------------------------------`);

var a, b, c, d;
console.log(
  `
a = ${a}
b = ${b} 
c = ${c}
d = ${d}
`
);

/*
-------------------------------------------------------------------------
                  6. Declaring 4 variables with values
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`6. Declaring 4 variables with values`);
console.log(`-----------------------------------------------------------`);
console.log(`\n`);

var numb = 25;
var strNumb = "30";
var myName = "Noor";
var bool = false;

console.log(
  `
Number = ${numb}

String Number ${strNumb}

My name = ${myName}

Boolean ${bool}
`
);

/*
-------------------------------------------------------------------------
                  7. Multiple lines declaration
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`7. Multiple lines declaration`);
console.log(`-----------------------------------------------------------`);

var firstName = "Noor";
var lastName = "MEBARKI";
var martialStatus = "Signle";
var country = "Algeria";
var age = 29;

console.log(
  `
First name: ${firstName}

Last name: ${lastName}

Martial status: ${martialStatus}

Country: ${country}

Age: ${age}
`
);

/*
-------------------------------------------------------------------------
                    8. Single line declaration
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`8. Single line declaration`);
console.log(`-----------------------------------------------------------`);

var firstName = "Noor",
  lastName = "MEBARKI",
  martialStatus = "Signle",
  country = "Algeria",
  age = 29;

console.log(
  `
First name: ${firstName}

Last name: ${lastName}

Martial status: ${martialStatus}

Country: ${country}

Age: ${age}
`
);

/*
-------------------------------------------------------------------------
                    9. Single line declaration
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`9. Multi-line string`);
console.log(`-----------------------------------------------------------`);

var myAge = 29;
var yourAge = 30;

//Solution 1
console.log(
  "\n\nI am ",
  myAge,
  " years old \nYou are ",
  yourAge,
  "years old\n"
);

//Solution 2
console.log(
  "\n\nI am " + myAge + " years old \nYou are " + yourAge + "years old\n"
); // we use + to concatenate strings outside of console.log generally inside we use ,

//Solution 3
console.log(
  `
I am ${myAge} years old 
You are ${yourAge} years old
`
); //string literal or template string

var paragraph = `this is a
multiline
paragraph`;
