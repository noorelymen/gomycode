 /*

 ==================================================================================================== 
                                            CONDITIONS 
 =====================================================================================================
 
 */

// Excellent > 18
// Bon >= 10
// Mauvais < 10
// Médiocre < 5

var moyenne = parseFloat(prompt("Donnez votre moyenne"))

 /* 
 ==================================================================================================== 
                                            IF ELSE 
 =====================================================================================================
 */

if(moyenne > 18) {

} else {
    if(moyenne >= 10){

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
    
    1. test only one variable
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