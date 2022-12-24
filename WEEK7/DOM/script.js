// var h1 = document.getElementById("titre"); //document is the object, getElementByID is the method
// var p = document.getElementsByClassName("text");
// //Elements with an s at the end because many elements can have the same class unlike the ids

// var h2 = document.getElementsByTagName("h2"); //returns an array because all of the h2 elements

// var h1 = document.querySelector("#titre"); //we give it the same selector as css it returns only the first element with that id or class

// var h1 = document.querySelectorAll("h2"); //to have all the elements

// var spantext = document.querySelectorAll("span.text"); //to have all the elements

// console.log(p); //will display array of [p, text] because we can have many elements with the same class
// console.log(p[0]);

// h1.innerText = "Title";
// h1.style.color = "red";

// h1.style.backgroundColor = "green"; //any css property with - become no dash ad capital second word

// div.classList.add("custom"); //adds the custom class to the div
// //when we have few css stylings we can make them with js
// //if we have too many lines of styling, better add them to the css file and add the classes to the elements with js
// div.classList.contains("custom"); //looks for the custom class in the div
// div.classList.toggle("custom"); //if class exists it removes it otherwise it adds it
// div.classList.remove("custom");

// var btn = document.getElementById("switch");

// btn.addEventListener("click", function () {
//   //une fonction qui a en parametres une autre fonction s'apelle a callback function
//   var body = document.querySelector("body");
//   body.classList.toggle("dark");
// });

// var btn = document.getElementById("switch");

// btn.addEventListener("click", function () {
//   //une fonction qui a en parametres une autre fonction s'apelle a callback function
//   var p = document.querySelector("p");
//   p.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum a assumenda
//   quasi, exercitationem dolorum, doloremque culpa voluptates repellendus quia
//   sapiente ratione voluptate facilis quidem nulla. Eos natus obcaecati
//   necessitatibus doloribus.`;
// });

// var btn = document.getElementById("fill-cells");

// btn.addEventListener("click", function () {
//   var td = document.querySelectorAll("td");
//   for (var element of td) {
//     element.innerText = parseInt(Math.random() * 20);
//   }
// });

var quotes = [
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: null,
  },
];

var btn = document.getElementById("generate-quote");

btn.addEventListener("click", function () {
  var quote = document.getElementById("quote");
  var author = document.getElementById("author");

  if (quotes.length != 0) {
    var randomIndex = parseInt(Math.random() * quotes.length);

    var randomQuote = quotes[randomIndex].text;

    var randomAuthor = quotes[randomIndex].author;

    quote.innerText = randomQuote;

    randomAuthor
      ? (author.innerText = randomAuthor)
      : (author.innerText = "Anonymous");

    quotes.splice(randomIndex, 1);
  } else {
    quote.innerText = "No more quotes";
    author.innerText = "";
  }

  if (quotes == []) {
    console.log("empty tab");
  } else {
    console.log("here");
  }
});
