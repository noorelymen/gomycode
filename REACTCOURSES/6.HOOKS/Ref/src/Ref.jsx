import React, { useRef } from 'react'
/*
------------------------------------------------------------------------------------------------------------------------
                                                    USE REF HOOK
------------------------------------------------------------------------------------------------------------------------

    1. Easy but hard to find use cases for it
    2. Whenever an action is taken we will be able to focus on an input
    3. Easiest way to access and manipulate DOM elements
    4. Example: click on button triggers placing the cursor inside the input for the user to start writing
    5. Equivalent to document.getElementById... in Vanilla JS but the whole point in React is we souldn't
       do that because React has a virtual DOM and we shouldn't be manipulating individual elements and 
       the state of the application should be updating everything for us
    6. However there are situations where we need to manipulate certain DOM elements
*/

export default function Ref() {
  const inputRef = useRef(null); 
  //initial value of null because we haven't passed the reference yet
  //when we declare somthing like inputRef which is a reference to a certain DOM element 
  //we need to pass a property inside of that element called ref and inside of it we pass the name of the reference created
  //and then we are able to access many information related to that specific input 
  
  //example onclick function
  
  const onClick = () => {
    console.log(inputRef.current.value) //current because we need to acces the current value of the reference
    inputRef.current.value="";
    inputRef.current.focus();
  }

  //another example focus on the inpu on button click
  //one of the most common use cases is to do lists where we need to clear the input when we add a todo an position
  //the cursor inside of the input to write the next to do

  return (

    <div>
      <h1>USE REF</h1>
      <h2>Noor</h2>
      <input type="text" placeholder="Ex..." ref={inputRef}/>
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}
