// var pets = [
//   { name: "Max", type: "dog", bornOn: 2018 },
//   { name: "Angel", type: "cat", bornOn: 2015 },
//   { name: "Jasper", type: "dog", bornOn: 2016 },
// ];

// function getAge(pet) {
//   return new Date().getFullYear() - pet.bornOn;
// }

// var petsWithAge = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   pet.age = getAge(pet);

//   petsWithAge.push(pet);
// }
// console.log(petsWithAge);

// var dogs = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }
// console.log(dogs);

// var jasper;
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }
// console.log("Jasper is " + jasper.age + " years old");

const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];

console.log(pets[0]); //pets will be modified anyway because it's an address in memory at the moment we click to see the values the browser goes to the pets address and gets the values thats why it has age

const getAge = function (pet) {
  //anonymous function
  return new Date().getFullYear() - pet.bornOn;
};

const getAge2 = (pet) => {
  //arrow function
  return new Date().getFullYear() - pet.bornOn;
  //equivalent to: const getAge2 = (pet) => new Date().getFullYear() - pet.bornOn;
  // but only in case we only have one instruction
};
// const petsWithAge = [];
// pets.forEach(function (element, index) {
//   element.age = getAge(element);
//   petsWithAge.push(element);
// });

// const petsWithAge = pets.map(function (element, index) {
//   return { ...element, age: getAge(element) }; //to avoid changing the pets array we use spread operator ... to add the object to petsWithAge with adding the attribute age and its value
// });

const petsWithAge = pets.map((element) => ({
  ...element,
  age: getAge(element),
})); //without the () around the object {} we will get an error because the arrow function awaits a function and it would understand that it's a function althog its an object

console.log("Pets with Age", petsWithAge);

// const dogs = pets.filter(function (element, index) {
//   return element.type === "dog";
// });
const dogs = pets.filter((element) => element.type === "dog");
console.log("Dogs", dogs);

// var jasper = petsWithAge.find(function (element, index) {
//   return element.name === "Jasper";
// });
const jasper = pets.find((element) => element.name === "Jasper");
console.log("Jasper is " + jasper.age + " years old");

console.log(pets);
