//window.console.log("Hello World!");

//global object

global.console.log("Hello World!"); //no window we have globals here

console.log(__dirname); //path to current directory
console.log(__filename); //path to current directory

//process object
//executing index.js with node is a process
console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);
const [, , firstname, lastname] = process.argv;
console.log(firstname);
console.log(lastname);
process.argv.forEach((item) => {
  console.log(item);
});

//in node everything can be a module variables, function...etc
//similar to react components when we export them to uset them

const a = "Hey";
const b = "You";
module.exports = a; //similar to export default in react here a became a node module

//
// const sayHello = () => {
//     console.log("Hello World!");
// }

//module.exports = { a, b, sayHello() };

exports.sayHello = () => {
  console.log("Hello World!");
};
//only use one exports
