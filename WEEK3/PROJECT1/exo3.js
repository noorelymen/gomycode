var base = parseInt(prompt("Entrez la base de votre triangle (cm) : "))
var height = parseInt(prompt("Entrez la hauteur de votre triangle (cm) : "))

var area = 0.5 * base * height
alert("La superficie de votre triangle est de: "+area+ "cm²") //n'affiche pas les variables
console.log("La superficie de votre triangle est de: ", area, "cm²")

var sideA = parseInt(prompt("Entrez le coté A de votre triangle (cm) : "))
var sideB = parseInt(prompt("Entrez le coté B de votre triangle (cm) : "))
var sideC = parseInt(prompt("Entrez le coté C de votre triangle (cm) : "))

var perimeter = sideA + sideB + sideC
console.log("Le périmètre de votre triangle est de: ", perimeter, "cm")