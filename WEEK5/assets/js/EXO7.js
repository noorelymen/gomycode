//--------------------------------------------------- EXO 7 ---------------------------------------------------

/*

1. Create an empty object called dog
2. Print the dog object on the console
3. Add name, legs, color and age properties for the dog object.
4. Get name, legs, color and age value from the dog object.
5. Set new properties the dog object: breed.
6. Find in the users object, the user who have the most skills : 
  var users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

*/

/*
=====================================================================================================
                                            EXERCICE 7
=====================================================================================================
*/

console.log(`\n`);
console.log(`--------------------------------------------------`);
console.log(`------------------- EXERCICE 7 -------------------`);
console.log(`--------------------------------------------------`);

/*
--------------------------------------------------------------------------------------
          1. Creating an empty object called dog
--------------------------------------------------------------------------------------
*/

var dog = {};

/*
--------------------------------------------------------------------------------------
          2. Printing the dog object on the console
--------------------------------------------------------------------------------------
*/

console.log(dog);

/*
--------------------------------------------------------------------------------------
          3. Adding name, legs, color and age properties for the dog object
--------------------------------------------------------------------------------------
*/

dog.name = "Roxy";
dog.legs = 4;
dog.color = "Gray and white";
dog.age = 3;

/*
--------------------------------------------------------------------------------------
          4. Getting name, legs, color and age value from the dog object
--------------------------------------------------------------------------------------
*/

console.log(
  `My dog's name is ${dog.name}. She's ${dog.age} years old, she's ${dog.color} and she has ${dog.legs} very cute little legs`
);

/*
--------------------------------------------------------------------------------------
          5. Set new properties the dog object: breed
--------------------------------------------------------------------------------------
*/

dog.breed = "Husky";

/*
--------------------------------------------------------------------------------------
          6. Finding the user who have the most skills in the users object
--------------------------------------------------------------------------------------
*/

var users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

var values = Object.values(users);
var keys = Object.keys(users);

var mostSkills = 0; //users[keys[0]].skills.length
//var name = keys[0]

/*
--------------------------------------------------------------------------------------
                                    SOLUTION 1
--------------------------------------------------------------------------------------
*/

for (var element of values) {
  if (element.skills.length > mostSkills) {
    mostSkills = element.skills.length;
  }
}

for (var key of keys) {
  if (users[key].skills.length == mostSkills) {
    console.log(
      `The user with the most skills is ${key} with a total of ${mostSkills}`
    );
  }
}

/*
--------------------------------------------------------------------------------------
                                    SOLUTION 2
--------------------------------------------------------------------------------------
*/

var mostSkills = users[keys[0]].skills.length;
var name = keys[0];

for (var key of keys) {
  if (users[key].skills.length > mostSkills) {
    mostSkills = users[key].skills.length;
    userName = key;
  }
}

console.log(
  `The user with the most skills is ${userName} with a total of ${mostSkills}`
);
