// // String
// var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero" 

// //Boolean
// var bool = true;

// // Undefined
// var undef

// // NULL
// var empty = null

// // Table
// var tab = ["Hello", "World"]

// // Objects
// var personne = {
//     'nom propre': "MEBARKI",
//     prenom: "Noor",
//     age: 29,
//     profession: "Web Developer"
// }


// console.log("Chaine = ", text, "\nBoolean = ", bool, "\nUndefined = ", undef, "\nNull = ", empty, "\nTableau = ", tab, "\Objet = ", personne)

// console.log("Le type de Chaine = ", typeof text, "\nLe type de Boolean = ", typeof bool, "\nLe type de Undefined = ", typeof undef, "\nLe type de Null = ", typeof empty, "\nLe type de Tableau = ", typeof tab, "\nLe type de Personne = ", typeof personne)

// // unassigned values to 4 variables
// var a, b, c, d
// console.log("a = ", a, "b = ", b)

// // assigned values to 4 variables
// var e = 25
// var f = '30'
// var g = "Noor"
// var h = false

// // multiple lines declaration
// var firstName = "Noor"
// var lastName = "MEBARKI"
// var martialStatus = "Signle"
// var country = "Algeria"
// var age = 29

// //single line declaration
// var firstName = "Noor", lastName = "MEBARKI", martialStatus = "Signle", country = "Algeria", age = 29


// var personne = {
//     'First name': "Noor",
//     'Last name': "MEBARKI",
//     'Martial status': "Single",
//     Country: "Algeria",
//     Age: 29
// }


// console.log("Le type de Chaine = ", typeof text, "\nLe type de Boolean = ", typeof bool, "\nLe type de Undefined = ", typeof undef, "\nLe type de Null = ", typeof empty, "\nLe type de Tableau = ", typeof tab, "\nLe type de Personne = ", typeof personne)

// var myAge = 29
// var yourAge = 30

// console.log("\n\nI am ", myAge, " years old \nYou are ", yourAge, "years old\n")
// console.log("\n\nI am " +myAge+ " years old \nYou are " +yourAge+ "years old\n") we use + to concatenate strings outside of console.log generally inside we use ,
// console.log(`\n\nI am ${myAge} years old \nYou are ${yourAge} years old\n`) string literal or template string
/* var paragraph = `this is a
multiline
paragraph`

*/


console.log("1. ", 4 > 3)
console.log("\n2. ", 4 >= 3)
console.log("\n3. ", 4 < 3)
console.log("\n4. ", 4 <= 3)
console.log("\n5. ", 4 == 4)
console.log("\n6. ", 4 === 4)
console.log("\n7. ", 4 != 4)
console.log("\n8. ", 4 !== 4)
console.log("\n9. ", 4 != '4') // js essaie de convertir les deux variables au meme type avant de comparer leurs valeurs
console.log("\n10. ", 4 == '4') 
console.log("\n11. ", 4 === '4')
console.log("\n12. ", 0 == true)
console.log("\n13. ", 4 > 3 && 10 < 12) //true
console.log("\n14. ", 4 > 3 && 10 > 12) //false
console.log("\n15. ", 4 > 3 || 10 < 12) //true
console.log("\n16. ", 4 > 3 || 10 > 12) //true
console.log("\n17. ", !(4 > 3)) //false
console.log("\n18. ", !(4 < 3)) //true
console.log("\n18. ", !(false)) //true
console.log("\n19. ", !(4 > 3 && 10 < 12)) //false
console.log("\n20. ", !(4 > 3 && 10 > 12)) //true
console.log("\n21. ", !(4 === '4')) //true