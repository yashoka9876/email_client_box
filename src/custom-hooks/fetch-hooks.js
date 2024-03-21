import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unreadHandler } from "../store/mailSlice";

export function useFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log('three')
    let auth=JSON.parse(localStorage.getItem('auth'))
    if(auth){
        auth=auth.email
    }
    console.log(auth);

    const dispatch=useDispatch();

    useEffect(()=>{
            async function sendMail(){
                const response=await fetch(url)
                   if(!response.ok){
                     throw new Error('this one is at antoher level');
                   }
                   const data=await response.json();
                   const arrayOfObjects = Object.entries(data).map(([key, value]) => ({ key, value }));
    
                    setData(arrayOfObjects);
                    setLoading(false)
                   
                    
               }
    
              //  setInterval(() => {
              //   sendMail().catch((err)=>{
              //     console.log(err);
              //   })
              //  }, 2000);
              sendMail().catch((err)=>{
                    console.log(err);
                    setError(err);
                    setLoading(false)
                  }) 
              
        },[url])

        //find the unread message brother

      useEffect(()=>{
      let count=0
    const countRead = data.filter(obj => obj.value.read === false && obj.value.to===auth).length;
    console.log("Number of objects with read property set to true:", countRead);
    dispatch(unreadHandler(countRead))
    },[data,auth,dispatch])

    return {data,loading,error}
    
}