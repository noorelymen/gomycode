// const time = 1;

// const promFunc = (msg) => {
//   return new Promise((resolve, reject) => {
//     if (msg) {
//       resolve(msg);
//     } else {
//       reject("Fail");
//     }
//   });
// };

// promFunc()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const promFunc = (msg) => {
  return new Promise((resolve, reject) => {
    if (msg) {
      console.log(msg);
      setTimeout(() => {
        resolve(msg);
      }, 1000);
    } else {
      reject("Fail");
    }
  });
};

//this is called the dot then chaining
// promFunc("Hey")
//   .then((data) => promFunc("First"))
//   .then((data) => promFunc("Second")) //data and error are returns of the resolve and reject functions
//   .catch((error) => console.log(error));

//in consumption either we do then chaining or await
//await needs to be called inside of an asynchronous function

//async is a keyword, await needs to be inside of the async function
const printAll = async () => {
  try {
    const data = await promFunc("First"); //data that we were sending in then is now
    const data2 = await promFunc("Second");
    const data3 = await promFunc("Third");
  } catch (err) {
    console.log(err);
  }
};

printAll();

const url = "https://fakestoreapi.com/products";
//first concommation
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(data));

//second consommation
const fetchAwait = async (url) => {
  try {
    const res = await fetch(url); //what is returned the first then from the url in the res we put it in a res variable that takes a fetch(url)
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchAwait(url);
