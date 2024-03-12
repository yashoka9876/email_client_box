import React, { useEffect, useState } from 'react'
import './EmailList.module.css'
import EmailBody from './EmailBody'
import { useSelector } from 'react-redux'

const EmailList = () => {
   const [BackanedData,setBackendData]=useState([]);
   const From=useSelector(state=>state.user.value);
   console.log(From);



    useEffect(()=>{
        async function sendMail(){
    
            const response=await fetch('https://emailboxclient-default-rtdb.firebaseio.com/emails.json')
               if(!response.ok){
                 throw new Error('this one is at antoher level');
               }
               const data=await response.json();
               const arrayOfObjects = Object.entries(data).map(([key, value]) => ({ key, value }));

                setBackendData(arrayOfObjects);
                
           }
          
           sendMail().catch((err)=>{
             console.log(err);
           })
    },[])

  return (
    <div className='emailist'>
        {
            BackanedData.map(({key,value})=>{ 
                if(value.from === 'sameer@gmail.com') {
                    return <EmailBody key={key} name={value.to} subject={value.subject} message={value.message} time={value.date}/>
                }
                return null;
            })
        }
    </div>
  )
}

export default EmailList