import React, { useState, useEffect } from 'react'
/*
------------------------------------------------------------------------------------------------------------------------
                                                    USE EFFECT HOOK
------------------------------------------------------------------------------------------------------------------------

    1. When we need to render data from APIs and DBs
    2. Function that will be called whenever the page rerenders
    3. Use case: call a function or display data immediately when the page is rendered
    4. UseEffect will be called everytime the state is changed because a change of state means rerendering the page which means calling useeffect
    5. Use Case: Query/Fetch data from a public API and display it in our application

*/

export default function Effect() {

  const [data, setData] = useState("")
  //const [count, setCount] = useState(0);

  useEffect(() => {

    // api call
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((jsonData) => { 
      setData(jsonData[0].email);
      console.log('API CALLED')
    });
  }, []);

  return (

    <div>
      <h1>{data}</h1>
      <h2>{count}</h2>
      <button onClick={ () => {
        setCount(count + 1)
      }}>Click</button>
    </div>
  )
}
