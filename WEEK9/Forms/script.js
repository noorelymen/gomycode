var form = document.getElementById("form");

function click(event) {
  event.preventDefault();

  var parentForm = event.target;

  var email = parentForm.querySelector('input[type="email"]');
  var password = parentForm.querySelector('input[type="password"]');

  // if(password.value.length < 7){
  //     alert("Mot de passe trop court")
  //     return
  // }

  // if(password.value[0] !== password.value[0].toUpperCase()){
  //     alert("Mot de passe doit commencer par une majuscule")
  //     return
  // }

  var schema = joi.object({
    password: joi.string().alphanum().min(8).max(30),
  });

  var h = schema.validate({ password: password.value });

  console.log(h);
}

form.addEventListener("submit", click);

setInterval(function () {
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "green";
  setTimeout(function () {
    body.style.backgroundColor = "white";
  }, 3000); //after 3 seconds the bg color would become white
}, 5000); //every 5 seconds the whole operation repeats like a timed loop
