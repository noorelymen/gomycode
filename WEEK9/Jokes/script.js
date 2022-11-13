var joke = document.getElementById("joke");
var btn = document.getElementById("generate-joke");
var fav = document.getElementById("fav");

var container = document.getElementById("container");

var currentJoke = [];
var favorites = [];

function setFav() {
  var jokes = localStorage.getItem("favJokes");
  jokes = JSON.parse(jokes);

  for (var joke of jokes) {
    favorites.push(joke);

    var p = document.createElement("p");

    p.innerText = joke;

    container.appendChild(p);
  }
}

function generateJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentJoke = data;
      joke.innerText = data.value;
    });
}

generateJoke();

btn.addEventListener("click", function () {
  generateJoke();
});

//2 options either we store the jokes or the ids and we add it to the end of the url to access it

fav.addEventListener("click", function () {
  favorites.push(currentJoke.value);

  localStorage.setItem("favoriteJokes", JSON.stringify(favorites)); //to access them, browser > inspect > application

  var p = document.createElement("p");
  p.innerText = currentJoke.value;
  container.appendChild(p);
  console.log(favorites);
});

/*

var btn = document.getElementById("generate")

var text = document.getElementById("text")

var favorites = []
var currentJoke;

var container = document.getElementById("container")
var fav = document.getElementById("fav")


function setFav(){
  var jokes = localStorage.getItem("favJokes")
  jokes = JSON.parse(jokes)
  for (var joke of jokes){
    favorites.push(joke)

    var p = document.createElement("p")

    p.innerText = joke
    
    container.appendChild(p)
  }
}

btn.addEventListener("click",function(){
  fetch("https://api.chucknorris.io/jokes/random")
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    currentJoke = data
    text.innerText = data.value
  })
})

fav.addEventListener("click", function(){
  favorites.push(currentJoke.value)

  localStorage.setItem("favJokes", JSON.stringify(favorites))

  var p = document.createElement("p")

  p.innerText = currentJoke.value
  
  container.appendChild(p)

  console.log(favorites)
})

setFav()

*/
