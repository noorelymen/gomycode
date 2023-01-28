import React, { useState, useReducer } from 'react'
/*
------------------------------------------------------------------------------------------------------------------------
                                                    USE STATE HOOK
------------------------------------------------------------------------------------------------------------------------

    1. Similar/alternative/replacement to React State they have the same purpose
    2. State and Reducer Hooks allow the user to create variables that when tehir values are changed the page will rerender to show the new values
    4. There's a specific benefit to using Reducers 
    5. Useful when we have multiple states to change (multiple actions) to avoid having many different states and change them individually 
    3. Used with Redux mostly
*/


  //the reducer function takes 2 arguments
  //1. state so the reducer would have constent access to the value of each of the states inside of the state object 
  //2. action performed on the states
  const reducer = (state, action) => {
    //reducers use switch case
    //accept multiple actions
    //we test the type of action passed (to be performed)
    switch(action.type) {
      case "INCREMENT":
        return {count: state.count + 1, showText: state.showText}
        // the increment action shouldn't affect the showText value
      case "toggleShowText":
        return {count: state.count, showText: !state.showText}
      default:
      //else return the empty state as it was initially to make sure to always return something
        return state
    }
  }


export default function Reducer() {

  //MULTI STATE DECLARATION

  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  //NEW WAY SINGLE DECLARATION
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true });
  
  //the state variable here is an object
  //first parameter reducer: is a function
  //second parameter: initial values for all the states inside the object we'll have inside the reducer (count and showText)

  return (
    <div>

     {/* 
     
      //OLD WAY
      
      <h1>Count: {count}</h1>

      //The button is altering the value of the count and the showText states 
      <button onClick={() => {
          setCount(count + 1);
          setShowText(!showText)
        }}>Click me !</button>

          //if showText is true display p tag 
          { showText && <p>This is a text</p> }
      */
      }

      {/* NEW WAY TO ALTER THE VALUES */}

      <h1>Count: {state.count}</h1>
      <button onClick={() => {
        dispatch({ type : "INCREMENT" });
        dispatch({ type : "toggleShowText" });
      }}>
        Click me !
      </button>
      { state.showText && <p>This is a text</p> }

    </div>
  )
}
