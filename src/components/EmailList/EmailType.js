import React from 'react'
import classes from './EmailType.module.css'
import InboxIcon from '@mui/icons-material/Inbox';

import PeopleIcon from '@mui/icons-material/People';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
const EmailType = () => {
  return (
    <div className={classes.emailType}>
        <div className={classes.emailType__options}  >
            <InboxIcon/>
            <p>Primary</p>
        </div>
        <div className={classes.emailType__options}>
            <PeopleIcon/>
            <p>Social</p>
        </div>
        <div className={classes.emailType__options}>
            <LocalOfferIcon/>
            <p>Promotion</p>
        </div>
    </div>
  )
}

export default EmailType