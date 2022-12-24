const start = () => {
  const icons = [
    "fa-otter",
    "fa-otter",
    "fa-horse",
    "fa-horse",
    "fa-kiwi-bird",
    "fa-kiwi-bird",
    "fa-hippo",
    "fa-hippo",
    "fa-dragon",
  ];

  //shuffle icons

  for (var i = icons.length - 1; i > 1; i--) {
    j = parseInt(Math.random() * (i + 1)); // 0 <= number <= i, 0 <= number < 1 -> 0 <= number * i < i
    var tmp = icons[j];
    icons[j] = icons[i];
    icons[i] = tmp;
  }

  console.log("Icones", icons);

  // add icons randomly to cards
  var faces = document.querySelectorAll(".card_front > i");
  for (var i = 0; i < faces.length; i++) {
    faces[i].classList.add(icons[i]);
  }

  console.log("Icones after class add", faces);

  //return card when clicked
  var cards = document.querySelectorAll(".card");
  console.log(cards);
  var currentCard;
  var matchedCards = 0;

  for (var card of cards) {
    card.addEventListener("click", function (event) {
      var target = event.target;

      //to prevent when we click on the same card it considers it matched
      if (target.classList.contains("visible")) {
        return; //not break because it's not a loop
      }

      target.classList.add("visible");

      // check if 2 returned cards have the same icon
      if (!currentCard) {
        currentCard = target;
        //to animate the dragon at the very end when all the matching cards have been found we have to
        console.log(matchedCards);
        var cardFace = target.querySelector(".card_front > i");
        if (cardFace.classList.contains("fa-dragon") && matchedCards == 4) {
          cardFace.classList.add("matched");
        }
        //if currentCard is empty we store the first clicked card in it else we compare the next clicked card with currentCard
      } else {
        // here if 2 cards match or don't match it's too quick we add a timeout
        setTimeout(function () {
          var face = target.querySelector(".card_front > i");
          var previousFace = currentCard.querySelector(".card_front > i");
          console.log("Current face", face);
          console.log("Previous face", previousFace);
          if (face.className != previousFace.className) {
            target.classList.remove("visible");
            currentCard.classList.remove("visible");
          } else {
            target.classList.add("matched");
            currentCard.classList.add("matched");
            matchedCards++;
          }
          currentCard = undefined; //reset current card
        }, 500);
      }
    });
  }

  setTimeout(function () {
    for (var card of cards) {
      card.classList.add("visible");
    }
    setTimeout(function () {
      for (var card of cards) {
        card.classList.remove("visible");
      }
    }, 1000);
  }, 500);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
