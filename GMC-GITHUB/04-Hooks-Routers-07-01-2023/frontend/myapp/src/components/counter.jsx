import React, {useState} from 'react'

export default function Counter() {
  var counter = 0
  const [count,setCount] = useState(0)
  const handleIncrement =()=>{
    //  counter = counter+1
    //  console.log(counter)
    setCount(count+1)
  }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}
