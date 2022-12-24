var quotes;

var btn = document.getElementById("generate-quote");

var quote = document.getElementById("quote");
var author = document.getElementById("author");

//quotes = fetch("https://type.fit/api/quotes")

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    quotes = data;
    quote.innerText = quotes[0].text;
    author.innerText = quotes[0].author;
    console.log("Quotes = ", quotes);
  });

btn.addEventListener("click", function () {
  if (quotes.length != 0) {
    var randomIndex = parseInt(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex].text;
    var randomAuthor = quotes[randomIndex].author;

    quote.innerText = randomQuote;

    randomAuthor
      ? (author.innerText = "- " + randomAuthor)
      : (author.innerText = "Anonymous");

    quotes.splice(randomIndex, 1);
  } else {
    quote.innerText = "No more quotes";
    author.innerText = "";
  }
});
