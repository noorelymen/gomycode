const a = [1, 2, 3, 4];

for (let element of a) {
  console.log(element);
}

const b = [];
a.forEach(function (element, index) {
  b.push(element * 10);
});

const c = a.map(function (element, index) {
  return element * 10;
});

console.log(a);
console.log(b);

const filteredA = a.filter(function (element) {
  //   if (element > 2) {
  //     return true; // element is saved in a new array
  //   } else {
  //     return false;
  //   }
  return element > 2;
});

console.log(filteredA);

const found = a.find(function (element) {
  return element > 2; //returns the first element where the condition is true
});

console.log(found);

const foundIndex = a.findIndex(function (element) {
  return element > 2; //returns the first element where the condition is true
});

console.log(foundIndex);
