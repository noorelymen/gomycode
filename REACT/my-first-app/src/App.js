import logo from "./logo.svg"; //logo is variable used throughout
import "./App.css"; //equivalent to link css in html
//html mixed with js is jsx
import Component from "./Component";

function App() {
  //this is a componentpreferably has the same name as the js file and it haaaaas to start with an uppercase
  const names = ["John", "Marc", "Max"];
  const namesH3 = names.map((element, index) => {
    return <h3>{element}</h3>;
  });
  console.log(namesH3);
  return (
    //react doesn't return 2 html elements we have to put them in a div
    <div>
      <p>Hello</p>
      {namesH3}
      <Component />
    </div>
  );
  /*
  const names = ["John", "Marc", "Max"];
  return (
    //react doesn't return 2 html elements we have to put them in a div
    <div>
      {
        names.map((element, index) => <h3>{element}</h3>
        //or
        names.map((element, index) => {
          return <h3>{element}</h3>;
        });
      }
    </div>
  );
  */
}

export default App;
