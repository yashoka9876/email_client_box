import React, { useEffect, useState } from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import classes from './EmailBody.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const EmailBodyIndex = ({name,subject,message,time}) => {
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
                if(value.from === 'yashoka@gmail.com') {
                    return <Link to={value.subject}>
                        <div className={classes.emailbody}>
                        <div className={classes.emailbody__left}>
                            <CheckBoxOutlineBlankIcon/>
                            <StarBorderIcon/>
                            <LabelIcon/>
                            <h6>{value.from.email}</h6>
                        </div>
                        <div className={classes.emailbody__middle}>
                            <div className={classes.emailbody__middle__mgs}>
                                <p><b>{value.subject}</b>{` - ${value.message}`}</p>
                            </div>
                        </div>
                        <div className={classes.emailbody__right}>
                            <p>{value.time}</p>
                        </div>
                    </div>
                    </Link>
                }
                return null;
            })
        }
    </div>

  )
}

export default EmailBodyIndex