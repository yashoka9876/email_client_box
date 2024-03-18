import React, { useEffect, useState } from 'react'
import './EmailList.module.css'
import EmailBody from './EmailBody'
import { useDispatch, useSelector } from 'react-redux'
import { unreadHandler } from '../../store/mailSlice';


const EmailList = () => {
  let Unread=0;
   const [BackanedData,setBackendData]=useState([]);
   const From=useSelector(state=>state.user.value);
   const dispatch=useDispatch();
   console.log(From);



    useEffect(()=>{
        async function sendMail(){
          console.log('hia')
            const response=await fetch('https://emailboxclient-default-rtdb.firebaseio.com/emails.json')
               if(!response.ok){
                 throw new Error('this one is at antoher level');
               }
               const data=await response.json();
               const arrayOfObjects = Object.entries(data).map(([key, value]) => ({ key, value }));

                setBackendData(arrayOfObjects);
                
           }

           setInterval(() => {
            sendMail().catch((err)=>{
              console.log(err);
            })
           }, 2000);
          
          
    },[])

  return (
    <ul className='emailist'  style={{ listStyleType: 'none' }}>
        {
            BackanedData.map(({key,value})=>{ 
                if(value.to === 'yashoka51@gmail.com') {
                    return <li key={key}><EmailBody  id={key} name={value.to} subject={value.subject} message={value.message} time={value.date} read={!value.read}/></li>
                }
                return null;
            })
        }
    </ul>
  )
}

export default EmailList