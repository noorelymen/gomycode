import React, { useState } from "react";

/*
------------------------------------------------------------------------------------------------------------------------
                                                    USE STATE HOOK
------------------------------------------------------------------------------------------------------------------------

    1. Simplest and one of the most used React Hooks
    2. Used to change the values of variables and rerender the page
    3. States can be number, strings or booleans

*/

export default function state() {

  const [counter, setCounter] = useState(0); 

  /* 
  
    Destructuring the react state object

    1. counter: is the state variable's name it can be data...
    2. setCounter: function that will change the value of the counter variable (mutate it)
    3. useState(0) initial value passed to the state variable
  
  */
  const [word, setWord] = useState("Noor"); 

  //const counter = 0;
  const increment = () => {

    //OLD WAY
    //counter++;

    //NEW WAY
    setCounter(counter+1); 
    //in the function to render the result we can not user a simple assignement =
    //we need to use setCounter() 
    //we can't use counter++ but counter + 1

    console.log(counter);
  };

  const decrement = () => {
    //counter--;
    setCounter(counter-1);
    console.log(counter);
  };

  const changeWord = (event) => {
    const inputValue = event.target.value; //get value in the inpu
    setWord(inputValue);
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <h1>Name: {word}</h1>
      <input type="text" placeholder="Type your name..." onChange={changeWord}/>
    </div>
  );
}
