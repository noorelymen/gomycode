setTimeout(() => {
  console.log("How are you?");
}, 1000);

console.log("Hi");

//if we want to wait 1s to diplay a message then only then wait another 1s to display the second message...etc
//it's like simulating an asynchronous tasking (nested callbacks) to ensure that the timeouts don't start at the same time but rather
//1st wait for the second to finish to start...etc
//we fall into what's called a callback hell, that's where the promises come in

setTimeout(() => {
  console.log("First message");
  //here the first timeout has another timeout: callback function
  setTimeout(() => {
    console.log("Second message");
    setTimeout(() => {
      console.log("Third message");
    }, 1000);
  }, 1000);
}, 1000);

//how to write a promise
//construction
const isAuth = false;
const promesse = new Promise((resolve, reject) => {
  //takes a callback function as a parameter
  //a promise has 2 parts: construction and consumption
  //if request or condition (context) is successful we call the resolve function else we call the reject
  //resolve checks isAuth is tru

  if (isAuth) {
    //what we build is the logic but the functions resolve and reject are built in functions we call in case it's been successful or fail
    resolve(); //built-in
    //resolve("Success")
  } else {
    reject(); //built-in
    //reject("Fail");
  }
});

promesse
  .then(() => console.log("User authenticated"))
  .catch(() => console.log("You must first log in"));
promesse.then((data) => console.log(data)).catch((error) => console.log(error));

//we can ommit the try catch and write the console.logs inside the if else of the promise but we need to call resolve/reject first

// then gets executed when resolve is called => successful context
// catch gets executed when resolve is called => failed context
