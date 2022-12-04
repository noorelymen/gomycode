var container = document.getElementById("container");

var favActivities = localStorage.getItem("fav");

if (favActivities) {
  favActivities = JSON.parse(favActivities);

  for (var favActivity of favActivities) {
    // Elements creation
    var div = document.createElement("div");
    var text = document.createElement("p");
    var type = document.createElement("p");
    var price = document.createElement("p");
    var remove = document.createElement("button");

    text.innerText = "Activity : " + favActivity.activity;
    type.innerText = "Type : " + favActivity.type;
    price.innerText = "Price : " + favActivity.price;
    remove.innerText = "Remove";

    remove.classList.add("btn", "btn-danger");

    remove.addEventListener("click", function (event) {
      var btn = event.target; //targets the element in which the event happened
      var div = btn.parentNode; //we have another div here the function sear
      var container = div.parentNode;
      //we have to remove the element from the local storage array first
      //before removing the element itself otherwise we would lose its id
      //since we added it as an attribute (data-id) in the div

      var id = div.getAttribute("data-id");

      for (var index in favActivities) {
        console.log(favActivities);
        if (favActivities[index].id == id) {
          favActivities.splice(index, 1); //to remove an element from an array we need its index
          console.log(favActivities);
          localStorage.setItem("fav", JSON.stringify(favActivities));
          break; //because we know there's only one element with that unique id there is no need to search for further elements with the same id
        }
      }

      container.removeChild(div);
    });

    div.setAttribute("data-id", favActivity.id);
    div.appendChild(text);
    div.appendChild(type);
    div.appendChild(price);
    div.appendChild(remove);

    div.style.border = "solid 1px black";
    div.style.marginBottom = "1rem";

    container.appendChild(div);
  }
} else {
}
