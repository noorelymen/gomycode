// Paragraphs
var text = document.getElementById("text")
var type = document.getElementById("type")
var price = document.getElementById("price")

// Buttons
var next = document.getElementById("next")
var fav = document.getElementById("fav")

// Variables
var currentActivity

// Generate first activity
fetch("https://www.boredapi.com/api/activity/")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        text.innerText = "Activity : " + data.activity
        type.innerText = `Type : ${data.type}`
        price.innerText = `Price : ${data.price}` 
        currentActivity = {
            activity : data.activity,
            type : data.type,
            price : data.price
        }
    })

next.addEventListener("click", function(){
    fetch("https://www.boredapi.com/api/activity/")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        text.innerText = "Activity : " + data.activity
        type.innerText = `Type : ${data.type}`
        price.innerText = `Price : ${data.price}` 
        currentActivity = {
            activity : data.activity,
            type : data.type,
            price : data.price
        }
    })
})

fav.addEventListener("click", function(){
    var favActivities = localStorage.getItem("fav") 

    if(!favActivities){
        favActivities = []
    }else{
        favActivities = JSON.parse(favActivities)
    }

    favActivities.push(currentActivity)

    localStorage.setItem("fav", JSON.stringify(favActivities))  

    Toastify({
        text: "Activity added",
        duration: 3000,
        destination: "./favorite.html",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})