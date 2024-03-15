import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import classes from './EmailBody.module.css'
const EmailBody = ({name,subject,message,time}) => {
    
  return (
    <li className={classes.emailbody}>
        <div className={classes.emailbody__left}  name='emailbody__left' data-testid="emailbody__left">
            <CheckBoxOutlineBlankIcon/>
            <StarBorderIcon/>
            <LabelIcon/>
            <h6>{name}</h6>
        </div>
        <div className={classes.emailbody__middle} name='emailbody__middle' data-testid="emailbody__middle">
            <div className={classes.emailbody__middle__mgs}>
                <p><b>{subject}</b>{` - ${message}`}</p>
            </div>
        </div>
        <div className={classes.emailbody__right} name='emailbody__right' data-testid="emailbody__right">
            <p>{time}</p>
        </div>
    </li>
  )
}

export default EmailBody