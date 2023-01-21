import React,{useRef} from 'react'

export default function UseRefTuto() {
  const count = useRef(0)
  return (
   <>
      <div>{count.current}</div>
       <button onClick={()=>count.current =count.current +1}>increment</button>
   </>
  )
}
