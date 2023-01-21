import React,{useEffect,useState} from 'react';

const UseEffectTuto = () => {
    useEffect(()=>{
        // AAPEL WITH DB
        console.log("hello the first effect")

        //clean up function
        return ()=>{
            
        }
    },[])

    const [count,setCount] = useState(0)

    return (
        <div>
            use effect tuto
            <h1>{count}</h1>
            <button onClick={()=>setCount(count +1)}>click</button>
        </div>
    );
}

export default UseEffectTuto;
