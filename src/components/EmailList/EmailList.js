import React, { useEffect, useState } from 'react'
import './EmailList.module.css'
import EmailBody from './EmailBody'
import { useDispatch, useSelector } from 'react-redux'
import { unreadHandler } from '../../store/mailSlice';
import { useFetch } from '../../custom-hooks/fetch-hooks';


const EmailList = () => {
  let Unread=0;
  //  const [BackanedData,setBackendData]=useState([]);
   const From=useSelector(state=>state.user.value);
   const dispatch=useDispatch();


    const {data,loading,error}=useFetch('https://emailboxclient-default-rtdb.firebaseio.com/emails.json')


    // useEffect(()=>{
    //   let count=0
    //   BackanedData.map(({key,value})=>{ 
    //     if(!value.read && value.to==='yashoka51@gmail.com'){
    //       console.log("count hia")
    //       count=count+1;
    //     }
       
    // })

    // },[BackanedData])
    console.log(data);
    if(loading){
      return <h1>Loading.......</h1>
    }
    if(error){
      return <h2>erro has occure brother</h2>
    }

  return (
    <ul className='emailist'  style={{ listStyleType: 'none' }}>
        {data &&
            data.map(({key,value})=>{ 
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