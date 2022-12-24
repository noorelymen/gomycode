/*
=========================================================================
                                EXERCICE 2
=========================================================================

Figure out the result of the following comparison expression first without using console.log(). After you decide 
the result confirm it using console.log() :

1. 4 > 3  -> true
2. 4 >= 3 -> true
3. 4 < 3 -> false
4. 4 <= 3 -> false
5. 4 == 4 -> true
6. 4 === 4 -> true
7. 4 != 4 -> false
8. 4 !== 4 -> false
9. 4 != '4' -> false
10 4 == '4' -> true
11. 4 === '4' -> false
12. 0 == true -> false
13. 4 > 3 && 10 < 12 -> true
14. 4 > 3 && 10 > 12 -> false
15. 4 > 3 || 10 < 12 -> true
16. 4 > 3 || 10 > 12 -> true
17. !(4 > 3) -> false
18. !(4 < 3) -> true
19. !(false) -> true
20. !(4 > 3 && 10 < 12) -> false
21. !(4 > 3 && 10 > 12) -> true
22. !(4 === '4') -> true
*/

console.log(`\n`);
console.log(`-----------------------------------------------------------`);
console.log(`------------------------ EXERCICE 2 -----------------------`);
console.log(`-----------------------------------------------------------`);

/*
-------------------------------------------------------------------------
                        Checking the results
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`Checking the results`);
console.log(`-----------------------------------------------------------`);
console.log(`\n`);

console.log("1. ", 4 > 3);
console.log("\n2. ", 4 >= 3);
console.log("\n3. ", 4 < 3);
console.log("\n4. ", 4 <= 3);
console.log("\n5. ", 4 == 4);
console.log("\n6. ", 4 === 4);
console.log("\n7. ", 4 != 4);
console.log("\n8. ", 4 !== 4);
console.log("\n9. ", 4 != "4"); // js essaie de convertir les deux variables au meme type avant de comparer leurs valeurs
console.log("\n10. ", 4 == "4");
console.log("\n11. ", 4 === "4");
console.log("\n12. ", 0 == true);
console.log("\n13. ", 4 > 3 && 10 < 12);
console.log("\n14. ", 4 > 3 && 10 > 12);
console.log("\n15. ", 4 > 3 || 10 < 12);
console.log("\n16. ", 4 > 3 || 10 > 12);
console.log("\n17. ", !(4 > 3));
console.log("\n18. ", !(4 < 3));
console.log("\n19. ", !false);
console.log("\n20. ", !(4 > 3 && 10 < 12));
console.log("\n21. ", !(4 > 3 && 10 > 12));
console.log("\n22. ", !(4 === "4"));
