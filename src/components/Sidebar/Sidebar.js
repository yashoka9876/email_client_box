import React from 'react'
import classes from './Sidebar.module.css'

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';

import StarRateIcon from '@mui/icons-material/StarRate';

import WatchLaterIcon from '@mui/icons-material/WatchLater';

import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import SendIcon from '@mui/icons-material/Send';

import DraftsIcon from '@mui/icons-material/Drafts';

import LabelIcon from '@mui/icons-material/Label';

import FindInPageIcon from '@mui/icons-material/FindInPage';

import DeleteIcon from '@mui/icons-material/Delete';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch, useSelector } from 'react-redux';
import { openSendMessage } from '../../store/mailSlice';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const unread=useSelector(state=>state.mail.unread);
    


    const dispatch=useDispatch();
  return (
    <div className={classes.sidebar}>
         <div>
               <div className={classes.sidebar__btn}>
               <Button
                 startIcon={<AddIcon />}
                 onClick={()=>dispatch(openSendMessage())}
            >
               Compose
            </Button>
               </div>
            <Link to='/'>
                <SidebarOptions
                Icon={InboxIcon}
                title='Inbox'
                number={unread}
                />
            </Link>

            <SidebarOptions
            Icon={StarRateIcon}
            title='Starred'
            number='224'
            />

            <SidebarOptions
            Icon={WatchLaterIcon}
            title='Snoozed'
            number='224'
            />

            <SidebarOptions
            Icon={LabelImportantIcon}
            title='Important'
            number='224'
            />
            <Link to='/sent'>
                <SidebarOptions
                Icon={FindInPageIcon}
                title='sent'
                number='224'
                />
            </Link>
            <SidebarOptions
            Icon={LabelIcon}
            title='draft'
            number='224'
            />
            <SidebarOptions
            Icon={FindInPageIcon}
            title='capacity'
            number='224'
            />
            <SidebarOptions
            Icon={DeleteIcon}
            title='Delete'
            number='224'
            />
            <SidebarOptions
            Icon={ AspectRatioIcon}
            title='[map]/trash'
            number='224'
            />

            <SidebarOptions
            Icon={ KeyboardIcon}
            title='Documents'
            number='224'
            />
        </div>
    </div>
   
  )
}

export default Sidebar