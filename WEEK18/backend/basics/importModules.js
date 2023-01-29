const { sayHello, b } = require("./index"); //we use require if we want to use import/export like react we have to install babel
//console.log(a);
console.log(b);

const allExports = require("./index");
console.log(allExports.a);
console.log(allExports.b);

sayHello();

//if we want to use the built-in node modules
const fs = require("fs"); //file system readinf from file

//synchronous blocking way
const file = fs.readFileSync("./index.txt", "UTF-8"); //readdirSync takes 2 arguments the file path absolute and the encoding
console.log(file);
console.log("Starting reading file");

//asynchronous non blocking way
fs.readFile("./test.txt", "utf-8", (err, data) => {
  //3 args like the sync + error first callback function
  if (err) {
    console.log(`Error message: ${err.message}`);
  } else {
    console.log(data);
  }
});
console.log("Start reading file");

// writing in a file

//sync
let newText = "Hello from write file";

fs.writeFileSync("./index.txt", newText); //overrides the file
console.log("Start writing file");

fs.appendFileSync(newText);

//async
let newText2 = "Text 2";
fs.writeFile("./index.txt", newText2, (err) => {
  if (err) {
    console.log(`Error message ${err.message}`);
  } else {
    console.log(data);
  }
});
