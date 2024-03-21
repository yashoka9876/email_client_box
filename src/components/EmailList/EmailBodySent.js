import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import classes from './EmailBody.module.css'
import { Link } from 'react-router-dom';
import { useFetch } from '../../custom-hooks/fetch-hooks';
const EmailBodyIndex = () => {
  
   
    const {data:BackanedData,loading,error}=useFetch('https://emailboxclient-default-rtdb.firebaseio.com/emails.json')

    const auth=JSON.parse(localStorage.getItem('auth')).email;
    

    if(loading){
        return <h1>Loading.......</h1>
      }
      if(error){
        return <h2>erro has occure brother</h2>
      }

  return (
    <div className='emailist'>
        {
            BackanedData.map(({key,value})=>{ 
                if(value.from === auth) {
                    return <Link to={key}>
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