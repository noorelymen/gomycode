/*

====================================================================================================
                                            TABS
====================================================================================================

*/

var tab = [1, 2, 3];

if (tab == [1, 2, 3]) {
  console.log(true);
} else {
  console.log(false); //it's gonna display false cause here in this case js will compare the memory addresses because it's not a simple variable
}

var tab2 = tab;
tab.push(4);
console.log(tab2);

//what we need to do is add the operator ... before tab

tab2 = [...tab]; //spread operator

console.log(tab2);

for (var i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}

for (var element of tab) {
  console.log(element); //display the elements
}

for (var element2 in tab) {
  console.log(element2); //displays the indexes in for index to remember
}

/*

====================================================================================================
                                            Objects
====================================================================================================

*/

var obj = {};

obj["age"] = 56;

console.log(obj);

obj.age = "hello"; //equivalent to obj["age"]

console.log(obj);

var obj = {
  nom: "noor",
  age: 29,
};

var keys = Object.keys(obj); //we would have a tab of keys, values() is a static function used only for parents, for children we use methods

console.log(keys);

for (var element of keys) {
  console.log(obj[element]);
}

var values = Object.values(obj); //we would have a tab of keys

for (var element of values) {
  console.log(element); //simpler
}

//if we want to replace nom by name we have to delete nom and add name we can not edit the key delete obj["nom"] or delete

/*

====================================================================================================
                                            FUNCTIONS
====================================================================================================

*/

var tab = [12, 34, "nom", false];
var tab2 = ["Hello", "World!"];

function length(array) {
  var taille = 0;

  while (array[taille] != undefined) {
    taille++;
  }

  console.log(taille); //affiche seulement ne renvoit pas
  return taille;
}

var len = length(tab);

console.log("len=", len);

if (len > 5) {
  console.log("Trop grand");
} else {
  console.log("Trop petit");
}

function somme(a, b) {
  a + b;
}

//area

console.log(somme(12, 13));

function sup(a, b) {
  return a * b;
}

//perimeter

function per(a, b) {
  return (a + b) * 2;
}

console.log(
  `La superficie est de ${sup(2, 3)} et le périmètre est de ${per(2, 3)}`
);

// caracteristics
function carac(a, b) {
  return {
    peri: (a + b) * 2,
    sup: a * b,
  };
}

var result = carac(2, 1);
console.log(`Caracteristics ${result}`);

function isUpper(str) {
  return str.toUpperCase() === str;
}

if (isUpper(prompt("Donnez une chaine:")))
  console.log("La chaine est tout en majuscule");
else console.log("La chaine n'est pas tout en majuscule");

function isFirstUpper(str) {
  return isUpper(str[0]);
}

if (isFirstUpper(prompt("Donnez une chaine:")))
  console.log("La chaine est capitalized");
else console.log("La chaine n'est pas capitalized");

function isAnyUpper(str) {
  for (var i = 0; i < str.length; i++) if (isUpper(str[i])) return true;
  return false;
}

if (isAnyUpper(prompt("Donnez une chaine:")))
  console.log("La chaine contient une majusule");
else console.log("La chaine ne contient pas de majuscule");
