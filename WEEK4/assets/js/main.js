// /*

// ====================================================================================================
//                                             CONDITIONS
// ====================================================================================================

// /*

// ====================================================================================================
//                                             IF ELSE
// ====================================================================================================

// /*

// // Excellent > 18
// // Bon >= 10
// // Mauvais >= 5
// // Médiocre < 5

// */

// var moyenne = parseFloat(prompt("Donnez votre moyenne"))

// if (moyenne > 18) {
//     alert("Excellent")
// } else {
//     if(moyenne >= 10){
//         alert("Bon")
//     } else {
//         if(moyenne >= 5) {
//             alert("Mauvais")
//         } else {
//             alert("Médiocre")

//         }
//     }
// }

// var age = prompt()

// var group

// if(age > 18) {
//     group = "majeur"
// } else {
//     group = "mineur"
// }

// //ternary expression: condition ? true_expression : false_expression

// group = age > 18 ? "majeur" : "mineur"

// var forfait = parseFloat(prompt("Choisissez un forfait"))

// if (forfait == 1) {
//     alert("Premium")
// } else {
//     if (forfait == 2) {
//         alert("Pro")
//     } else {
//         if (forfait == 3) {
//             alert("Standard")
//         } else {
//             if (forfait == 4) {
//                 alert("Basic")
//             }
//         }
//     }
// }

// /*

// =====================================================================================================
//                                             SWITCH CASE
// =====================================================================================================

//     1. test only one condition no && or ||
//     2. conditions have to be exact var = value not var <> value
//     3. break: without the break the switch executes the other lines anyway
//     4. default: all other cases not mentionner

// */

// var forfait = parseFloat(prompt("Choisissez un forfait"))

// switch(forfait) {
//     case 1:
//         alert("Premium")
//         break
//     case 2:
//         alert("Pro")
//         break
//     case 3:
//         alert("Standard")
//         break
//     case 4:
//         alert("Basic")
//         break
//     default:
//         alert("Forfait erroné")
// }

// /*

// =====================================================================================================
//                                             INCREMENTATION
// =====================================================================================================

//     1.

// */

// var a = 1
// // a += 1, a++
// console.log(a++) // displays first increments then
// console.log(a)
// console.log(++a) // increments first displays then

// /*

// =====================================================================================================
//                                             WHILE
// =====================================================================================================

//     var a = 1
//     console.log(a)
//     a = a + 1
//     console.log(a)
//     a = a + 1
//     console.log(a)
//     a = a + 1
//     console.log(a)
//     a = a + 1
//     console.log(a)

// */

// var a = 1

// while (a < 100) {
//     console.log(a)
//     a = a + 1
// }

// var a = parseFloat(prompt("Donner un nombre entre 0 et 10"))

// while (a > 10 || a < 0) {
//     alert("Chiffre incorrect")
//     var a = parseFloat(prompt("Donner un nombre entre 0 et 10"))
// }

// /*

// =====================================================================================================
//                                             DO WHILE
// =====================================================================================================

//     1. executes the condition at least once before applying the condition

//     2. can become a WHILE LOOP
//     3. we don't know how many times the loop will be executed because it depends on the user

//     our previous example of the while loop is the perfect example for the do while, to avoid

// */

// var a

// do {
//     a = parseFloat(prompt("Donner un nombre entre 0 et 10"))
// } while (a > 10 || a < 0)

// // L'informatique pour automatiser les fonctions redondantes loops

// /*
// =====================================================================================================
//                                             FOR LOOP
// =====================================================================================================

//     1. we know in advance how many times it will be executed

//     2. can become a WHILE LOOP

// */

// var i = 0

// while (i < 10) {
//     console.log(i)
//     i++
// }

// for(var i = 0; i < 10; i+=1) {
//     console.log(a)
// }

/*
=====================================================================================================
                                            FOR LOOP
=====================================================================================================
*/

console.log(`--------------------------------------------------`);
console.log(`FOR LOOP`);
console.log(`--------------------------------------------------`);

for (var i = 0; i <= 10; i += 1) {
  console.log(`${i} x ${i} = ${i * i}`);
}

/*
=====================================================================================================
                                            WHILE LOOP
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`WHILE LOOP`);
console.log(`--------------------------------------------------`);

var i = 0;

/*
=====================================================================================================
                                            WHILE LOOP
=====================================================================================================
*/

while (i <= 10) {
  console.log(`${i} x ${i} = ${i * i}`);
  i++;
}

/*
=====================================================================================================
                                            DO WHILE LOOP
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`DO WHILE LOOP`);
console.log(`--------------------------------------------------`);

var i = 0;

do {
  console.log(`${i} x ${i} = ${i * i}`);
  i++;
} while (i <= 10);

/*
=====================================================================================================
                                            EVEN NUMBERS
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`EVEN NUMBERS`);
console.log(`--------------------------------------------------`);

for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(`${i}`);
  }
}

/*
=====================================================================================================
                                            ODD NUMBERS
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`ODD NUMBERS`);
console.log(`--------------------------------------------------`);

for (var i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(`${i}`);
  }
}

/*
=====================================================================================================
                                            SUM NUMEBRS
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`SUM NUMBERS`);
console.log(`--------------------------------------------------`);

var sum = 0;
for (var i = 0; i <= 100; i++) {
  sum = sum + i;
}

console.log(`La somme des 100 premiers nombres est: ${sum}`);

/*
=====================================================================================================
                                            SUM EVEN
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`SUM EVEN`);
console.log(`--------------------------------------------------`);

var sumEven = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven = sumEven + i;
  }
}

console.log(`La somme des 100 premiers nombres paires est: ${sumEven}`);

/*
=====================================================================================================
                                            SUM ODD
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`SUM ODD`);
console.log(`--------------------------------------------------`);

var sumOdd = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    sumOdd = sumOdd + i;
  }
}

console.log(`La somme des 100 premiers nombres impaires est: ${sumOdd}`);

/*
=====================================================================================================
                                            FOR LOOP
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`COUNTRIES`);
console.log(`--------------------------------------------------`);

var countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

var countriesLength = [];

var i = 0;

while (i < countries.length) {
  countriesLength[i] = countries[i].length;
  i++;
}

console.table(countriesLength);

var countriesLength = [];

var i = 0;

while (i < countries.length) {
  countriesLength.push([countries[i], countries[i].length]);
  i++;
}
console.log(countriesLength);
console.table(countriesLength);
