/*
=========================================================================
                                EXERCICE 3
=========================================================================

1. Write a script that prompts the user to enter base and height of the 
   triangle and calculate an area of a triangle (area = 0.5 x b x h).
2. Write a script that prompts the user to enter side a, side b, and side 
   c of the triangle and calculates the perimeter of triangle 
   (perimeter = a + b + c)
3. Get length and width using prompt and calculate an area of rectangle 
   (area = length x width) and the perimeter of rectangle 
   (perimeter = 2 x (length + width))
4. Get radius using prompt and calculate the area of a circle 
   (area = pi x r x r) and circumference of a circle 
   (circumference = 2 x pi x r) where pi = 3.14

*/

console.log(`\n`);
console.log(`-----------------------------------------------------------`);
console.log(`------------------------ EXERCICE 3 -----------------------`);
console.log(`-----------------------------------------------------------`);

/*
-------------------------------------------------------------------------
                        1. Triangle Area
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`1. Triangle Area`);
console.log(`-----------------------------------------------------------`);
console.log(`\n`);

var base = parseInt(prompt("Type the base of your triangle (cm) : "));
var height = parseInt(prompt("Type the height of your triangle (cm) : "));

var area = 0.5 * base * height;
alert("The area of your triangle is: " + area + "cm²");
console.log("The area of your triangle is: ", area, "cm²");

/*
-------------------------------------------------------------------------
                        2. Triangle Perimeter
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`2. Triangle Perimeter`);
console.log(`-----------------------------------------------------------`);
console.log(`\n`);

var sideA = parseInt(prompt("Type the side A of your triangle (cm) : "));
var sideB = parseInt(prompt("Type the side B of your triangle (cm) : "));
var sideC = parseInt(prompt("Type the side C of your triangle (cm) : "));

var perimeter = sideA + sideB + sideC;

alert("The perimeter of your triangle is: " + perimeter + "cm");
console.log("The perimeter of your triangle is: ", perimeter, "cm");

/*
-------------------------------------------------------------------------
                    3. Rectangle Perimeter and Area
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`3. Rectangle Perimeter and Area`);
console.log(`-----------------------------------------------------------`);
console.log(`\n`);

var width = parseInt(prompt("Type the width of your rectangle (cm) : "));
var length = parseInt(prompt("Type the length of your rectangle (cm) : "));

var perimeterRectangle = (length + width) * 2;
var areaRectangle = length * width;

alert("The perimeter of your rectangle is: " + perimeterRectangle + "cm");
console.log("The perimeter of your rectangle is: ", areaRectangle, "cm");

alert("The area of your rectangle is: " + areaRectangle + "cm");
console.log("The area of your rectangle is: ", areaRectangle, "cm");

/*
-------------------------------------------------------------------------
                    4. Circle circumference and Area
-------------------------------------------------------------------------
*/

console.log(`\n`);
console.log(`4. Circle Circumference and Area`);
console.log(`-----------------------------------------------------------`);
console.log(`\n`);

var radius = parseInt(prompt("Type the radius of your circle (cm) : "));

var circumferenceCircle = 2 * 3.14 * radius;
var areaCircle = 3.14 * radius * radius;

alert("The circumference of your circle is: " + circumferenceCircle + "cm");
console.log("The circumference of your circle is: ", areaCircle, "cm");

alert("The area of your circle is: " + areaCircle + "cm");
console.log("The area of your circle is: ", areaCircle, "cm");
