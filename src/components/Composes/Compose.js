import React, { useRef } from 'react'
import classes from './Compose.module.css'
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhoneIcon from '@mui/icons-material/Phone';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from '../../store/mailSlice';
import { Link } from 'react-router-dom';

const Compose = () => {
    const dispatch=useDispatch();
    const to=useRef('');
    const subject=useRef('');
    const message=useRef('');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    // const fromData=useSelector(state=>state.user.value)
    const fromData=JSON.parse(localStorage.getItem('auth')).email

    
    //console.log(fromData)

    const currTime=`${hours}:${minutes}`

    function formSubmit(e){
        e.preventDefault();
        
        let obj={
            to:to.current.value,
            subject:subject.current.value,
            message:message.current.value,
            date:currTime,
            from:fromData,
            read:false
        }

        async function sendMail(){
           
    
            const response=await fetch(`https://emailboxclient-default-rtdb.firebaseio.com/emails.json`,{
                 method:'POST',
                 body:JSON.stringify(obj),
                 headers: {
                     'Content-Type': 'application/json'
                   },
               })
               if(!response.ok){
                 throw new Error('this one is at antoher level');
               }
               const data=await response.json();
               console.log(data);
               window.location.reload();
           }

           

//this one is anoterh request and 
           sendMail().catch((err)=>{
            console.log(err);
          })


           console.log(obj);

           to.current.value=''
           subject.current.value=''
           message.current.value=''
           dispatch(closeSendMessage())
    }

  return (
    <div className={classes.compose}>

        <div className={classes.compose__header}>
            <div className={classes.compose__header__left}>
                <span>New Message</span>
            </div>
            <div className={classes.compose__header__right}>
                <RemoveIcon/>
                <HeightIcon className='HaiBro'/>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
            </div>
        </div>

    <form onSubmit={formSubmit}>

        <div className={classes.compose__body}>
            <div  className={classes.compose__bodyForm}>
                <input ref={to} type='email' placeholder='Recipents'/>
                <input ref={subject} type='text' placeholder='Subject'/>
                <textarea ref={message} placeholder='text area....' rows='13'>
                </textarea>
            </div>
        </div>


        <div className={classes.compose__footer}>
            <div className={classes.compose__footerLeft}>
                <button type='submit' className='btn btn-primary'>
                    <span>Send</span> |<ArrowDownwardIcon/>
                </button>
                <IconButton>
                    <FormatColorTextIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                     <InsertLinkIcon/>
                </IconButton>
                <IconButton>
                    <InsertEmoticonIcon/>
                </IconButton>
                <IconButton>
                  <NoteAddIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
                <IconButton>
                     <PhonelinkLockIcon/>
                </IconButton>
                <IconButton>
                     <CreateIcon/>
                </IconButton>
            </div>
            <div className='compose__footerRight'>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
                <IconButton>
                     <DeleteIcon/>
                </IconButton>
            </div>
        </div>
    </form>
    </div>
  )
}

export default Compose