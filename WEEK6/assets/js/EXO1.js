/*
=====================================================================================================
                                            EXERCICE 1
=====================================================================================================

1. Write a for loop that takes a tab of values, calculates the power of 2 of each element and adds it to
   another tab (tabCarre) 
2. Write a for loop that takes a tab of prices, calculates the TVA of each price and adds it to another
tab (tabTVA)

*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`------------------- EXERCICE 1 -------------------`);
console.log(`--------------------------------------------------`);

/*
--------------------------------------------------------------------------------------
                          1. Tab of Power of 2
--------------------------------------------------------------------------------------
*/

var tab = [5, 12, 78, 3];
var tabCarre = [];

for (var element of tab) {
  tabCarre.push(element ** 2); //tabCarre(Math.pow(element), 2)
}

console.log(tabCarre);

/*
--------------------------------------------------------------------------------------
                          2. Tab of TVA
--------------------------------------------------------------------------------------
*/

var tab = [5, 12, 78, 3, 20, 59.99, 205.59, 33.33];
var tabTVA = [];

for (var element of tab) {
  var tva = element + element * 0.19;
  var fixed = tva.toFixed(2);
  tabTVA.push(fixed);
}

console.log(tabTVA);

/*
--------------------------------------------------------------------------------------
                          3. Tab of TVA > 10
--------------------------------------------------------------------------------------
*/

var tab = [5, 12, 78, 3, 20, 59.99, 205.59, 3.33];
var tvaFiltered = [];

for (var element of tabTVA) {
  if (element > 10) {
    tvaFiltered.push(element);
  }
}

console.log(tvaFiltered);

/*
--------------------------------------------------------------------------------------
                          4. Tab of objects
--------------------------------------------------------------------------------------
*/

var products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 2000,
    show: true,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
      { userId: "Afaf", rate: 2 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    show: true,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 4000,
    show: false,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 1. Tab with the objects that have "show" as true

var productsShow = [];

for (var product of products) {
  if (product.show) {
    productsShow.push(product);
  }
}

console.log(productsShow);

// 2. Tab with the objects that have price > 3000

var productsFilteredPrice = [];

for (var product of products) {
  if (product.price > 3000) {
    productsFilteredPrice.push(product);
  }
}

console.log(productsFilteredPrice);

// 3. Tab with the objects that have name less than 10 characters

var productsFilteredName = [];

for (var product of products) {
  if (product.name.length < 10) {
    productsFilteredName.push(product);
  }
}

console.log(productsFilteredName);

// 4. Tab with the prices objects + their TVA

var productsTVA = [];

for (var product of products) {
  priceTVA = product.price + product.price * 0.19;
  product.price = priceTVA;
  productsTVA.push(product);
}

console.log(productsTVA);

// 5. Average of all ratings

var ratings = [
  { userId: "fg12cy", rate: 5 },
  { userId: "zwf8md", rate: 4.5 },
  { userId: "Afaf", rate: 2 },
  { userId: "Akram", rate: 7 },
];

var sum = 0;

for (var rating of ratings) {
  sum = sum + rating.rate;
}

var average = sum / ratings.length;
console.log(average);

// 6. Tab with the objects with the most ratings

var bestProduct = products[0];
var bestRate = 0;

console.log(`Solution 1 - Best rate of all ratings`);
for (var product of products) {
  if (product.ratings.rate > bestRate) {
    bestRate = product.ratings.rate;
    bestProduct = product;
  }
}

console.log(bestProduct);

console.log(`Solution 2 - With the best average rate`);

for (var product of products) {
  if (product.ratings.length == 0) {
    continue;
    //to pass all the following loop's block of instructions
    //and go to the next iteration
    //if the ratings tab length equals 0 because we can't
    //divide by 0 even thoug js doesn't display an error

    //break would get out of the loop entirely instead
    //of going to the next iteration
  }
  var sum = 0;

  for (var rating of product.ratings) {
    sum += rating.rate;
  }

  var average = sum / product.ratings.length;

  if (average > bestRate) {
    bestRate = average;
    bestProduct = product;
  }
}

console.log(bestProduct);

// Use case of break

console.log(`Use-case of break`);
var tab = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (var i = 0; i < tab.length; i++) {
  console.log(`Element = ${tab[i]}`);
  if (tab[i] == 12) {
    console.log("12 exists");
    break;
  }
}

var products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 2000,
    show: true,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
      { userId: "Afaf", rate: 2 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    show: true,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    price: 4000,
    show: false,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 4000,
    show: false,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

var productsNameDesc = [];

for (var product of products) {
  var obj = {};

  if (product.name != undefined && product.description != undefined) {
    obj.name = product.name;
    obj.description = product.description;

    productsNameDesc.push(obj);
  }

  /*
  var name = product.name;
  var description = product.description;

    productsNameDesc.push({
      name, //equivalent to name: name,
      description //equivalent to description: description
    });

    or 

    var {name, description} = product // instead of var name = product.name; and var description = product.description;
  */
}

console.log(productsNameDesc);

var tab = [5, 12, 78, 3];

var tabTVA = [];

function priceWithTVA(prix, taxe) {
  var tva = prix + (prix * taxe) / 100;
  var tvaFixed = tva.toFixed(2);
  return tvaFixed;
}

for (var element of tab) {
  var newPrice = priceWithTVA(element, 10);
  tabTVA.push(newPrice);
}

console.log(tabTVA);

var tab = [5, 12, 78, 3];

function pricesWithTVA(prices, taxe) {
  var pricesWithTVA = [];
  for (var i = 0; i < prices.length; i++) {
    var tva = prices[i] + (prices[i] * taxe) / 100;
    var tvaFixed = tva.toFixed(2);
    pricesWithTVA.push(tvaFixed);
  }
  return pricesWithTVA;
}

/*

SOLUTION PROF

function pricesWithTVA(prices, taxe) {
  var newTab = [];
  for (var price of prices) {
    var priceTVA = price + price * taxe / 100;
    newTab.push(priceTVA.toFixed(2))
  }
  return newtAB;
}

*/

var newPrices = pricesWithTVA(tab, 10);
console.log(newPrices);

var tab = ["u", "i"];

function swap(tab) {
  var tmp = tab[0];
  tab[0] = tab[1];
  tab[1] = tmp;

  return tab;
}

var newTab = swap(tab);
console.log(newTab);

//to save original tab unchanged we need a second tab
function swap(tab) {
  var tab2 = [];

  tab2.push(tab[1]);
  tab1.push(tab[2]);

  //tab2.reverse()

  return tab2;
}

function swap(tab) {
  var tab2 = [];

  for (var element of tab) {
    tab2.unshift(element); //to add an element at the beginning of tab
  }

  return tab2;
}

var tab = ["u", "i", "r"];
var newTab = swap(tab);
console.log(newTab);

// find out the intrus

// function findOutlier(numbers) {
//   let oddTab = [];
//   let evenTab = [];

//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       evenTab.push(numbers[i]);
//     } else {
//       oddTab.push(numbers[i]);
//     }
//   }

//   for (var element of tab) {
//     if (element % 2 == 0) {
//       evenTab.push(element);
//     } else {
//       oddTab.push(element);
//     }
//   }
//  return odd.length > even.length ? even[0] : odd[0]

//   if (evenTab.length == 1) {
//     return evenTab[0]; //if the even tab contains only one item we're sure all the other numbers were odd
//   } else {
//     return oddTab[0]; //else if the even tab contains more than one item we're sure the odd tab contains only one
//   }
// }

function findOutlier(numbers) {
  var odd = 0;
  var even = 0;
  for (var i = 0; i < 3; i++) {
    if (numbers[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  if (even > odd) {
    for (var element of tab) {
      if (element % 2 == 1) {
        return element;
      }
    }
  } else {
    for (var element of tab) {
      if (element % 2 == 0) {
        return element;
      }
    }
  }

  /*
  var modImposter = even > odd ? 1 : 0
  for(var element of tab){
    if(element % 2 == modImposter) {
      return element
    }
  }
  */
}

var tab1 = [2, 4, 0, 100, 4, 11, 2602, 36]; //returns 11: the only odd number
console.log(findOutlier(tab1));

var tab2 = [160, 3, 1719, 19, 11, 13, -21]; //returns 160: the only even number
console.log(findOutlier(tab2));
