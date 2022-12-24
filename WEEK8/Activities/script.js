var next = document.getElementById("next");
var like = document.getElementById("like");
var activity = document.getElementById("activity");
var price = document.getElementById("price");
var type = document.getElementById("type");

var currentActivity = [];
var favorites = [];

function generateActivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      currentActivity = data;

      activity.innerText = data.activity;
      price.innerText = data.price;
      type.innerText = data.type;
    });
}

generateActivity();

next.addEventListener("click", function () {
  generateActivity();
});

like.addEventListener("click", function () {
  var faves = {};

  faves.activity = currentActivity.activity;

  faves.price = currentActivity.price;
  faves.type = currentActivity.type;
  favorites.push(faves);

  localStorage.setItem("favoriteActivities", JSON.stringify(favorites));
});
