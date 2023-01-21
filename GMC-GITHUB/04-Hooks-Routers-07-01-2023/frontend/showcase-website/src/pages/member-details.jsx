import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { teamData } from '../data';
const MemberDetails = () => {
    const params = useParams()
    const [item,setItem] =useState(null)
    const [loading,setLoading] =useState(false)
    const [error,setError] =useState(false)
    useEffect(()=>{
        setLoading(true)
        // we will use api call with our db later
        const newItem = teamData.filter(el=>el.id === parseInt(params.id))
       setTimeout(()=>{
        if(newItem.length >0){
            setItem(newItem)
            setLoading(false)
        }else{
            setError(true)
            setLoading(false)
        }
       
       },3000)
    },[])
    return (
        <div>
          {
            item && item.length > 0 && (
                <>
                 <h1>
                team member details with id {params.id}
                </h1>
                <h1>{item[0].name}</h1>
                <p>{item[0].description}</p>
                </>
            )
          }
        {
          loading && !error && (
                    <h1>Loading ...</h1>
                )
          }
        {
            error && (
                 <div className="alert alert-danger">error happened</div>
            )
        }
        </div>
    );
}

export default MemberDetails;
