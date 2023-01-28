import React, { useLayoutEffect, useEffect, useRef } from 'react'
/*
------------------------------------------------------------------------------------------------------------------------
                                                    USE LAYOUT EFFECT HOOK
------------------------------------------------------------------------------------------------------------------------

    1. Similar to useEffect but useLayoutEffect is called first fundamentally 
       in the earlier stage of the page rendering than the useEffect even if it's defined last
    2. When React recognizes that it needs to render a component it goes through many stages
       including understanding where the component is, if there are changes in the state of the component, 
       rendering the component but most importantly, printing the value of the component to the website 
    3. When the useEffect will do everything it can to show/print the stuff to the user than call the useEffect
    4. We don't realise the useEffect is only called after the render of the page because it changes the state so fast that we don't see it
       but when we do an action that takes more time like data fetch from API or DB that takes more time to load 
       we can notice that the page shows smth different because the useEffect is called only when everything is shown to the user
    5. useLayoutEffect does the contrary and is called before the stuff is printed to the user

*/

export default function LayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
      console.log('UseLayoutEffect');
      console.log(inputRef.current.value)
  }, []);

  useEffect(() => {
    console.log('UseEffect');
    inputRef.current.value = "HELLO";
  }, []);

  return (

    <div>
      <h1>USE LAYOUT EFFECT</h1>
      <input ref={inputRef} value="NOOR"/>
    </div>
  )
}
