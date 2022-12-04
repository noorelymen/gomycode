var container = document.getElementById("container")

var favActivities = localStorage.getItem("fav")

if(favActivities){

    favActivities = JSON.parse(favActivities)

    for(var favActivity of favActivities){
        // Elements creation
        var div = document.createElement("div")
        var text = document.createElement("p")
        var type = document.createElement("p")
        var price = document.createElement("p")

        text.innerText = "Activity : " + favActivity.activity
        type.innerText = "Type : " + favActivity.type
        price.innerText = "Price : " + favActivity.price

        div.appendChild(text)
        div.appendChild(type)
        div.appendChild(price)

        div.style.border = "solid 1px black"
        div.style.marginBottom = "1rem"

        container.appendChild(div)
    }

}else{

}