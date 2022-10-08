 /*

 ==================================================================================================== 
                                            CONDITIONS 
 =====================================================================================================
 
 */

// Excellent > 18
// Bon >= 10
// Mauvais >= 5
// Médiocre < 5

var moyenne = parseFloat(prompt("Donnez votre moyenne"))

 /* 
 ==================================================================================================== 
                                            IF ELSE 
 =====================================================================================================
 */

if (moyenne > 18) {
    alert("Excellent")
} else {
    if(moyenne >= 10){
        alert("Excellent")
    } else {
        if(moyenne >= 5) {
            alert("Mauvais")
        } else {
            alert("Médiocre")
            
        }
    }
}

var forfait = parseFloat(prompt("Choisissez un forfait"))

if (forfait == 1) {
    alert("Premium")
} else {
    if (forfait == 2) {
        alert("Pro")
    } else {
        if (forfait == 3) {
            alert("Standard")
        } else {
            if (forfait == 4) {
                alert("Basic")
            }
        }
    }
}

 /* 

 =====================================================================================================
                                            SWITCH CASE
 =====================================================================================================
    
    1. test only one condition no && or ||
    2. conditions have to be exact var = value not var <> value
    3. break: without the break the switch executes the other lines anyway
    4. default: all other cases not mentionner

 */

switch(forfait) {
    case 1:
        alert("Premium") break
    case 2:
        alert("Pro") break
    case 3:
        alert("Standard") break
    case 4:
        alert("Basic") break
    default:
        alert("Forfait erroné")
}

 /* 

 =====================================================================================================
                                            INCREMENTATION
 =====================================================================================================
    
    1. 

 */

var a = 1
// a += 1, a++
console.log(a++) // displays first increments then
console.log(a)   
console.log(++a) // increments first displays then

 /* 

 =====================================================================================================
                                            LOOPS
                                            WHILE
 =====================================================================================================
    
    var a = 1
    console.log(a)
    a = a + 1
    console.log(a)
    a = a + 1
    console.log(a)
    a = a + 1
    console.log(a)
    a = a + 1
    console.log(a)

 */

    var a = 1

    while (a < 100) {
        console.log(a)
        a = a + 1
    }

    while (a > 10 || a < 0) {
        alert("Chiffre")

    }