import React from 'react'
import classes from './Header.module.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/userSlice';
import { toggleHandler } from '../../store/mailSlice';


const Header = () => {
  const dispatch= useDispatch();
  return <div className={classes.header}>
    <div className={classes.header__left}>
      <IconButton>
         <ReorderIcon/>
      </IconButton>
      <img 
       src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg' width='80px' height='40px' alt='gamil_pick'/>
    </div>
    <div className='header__medium'>
      <div className={classes.search__mail}>
      <IconButton>
         <SearchIcon/>
      </IconButton>
      <input placeholder='search email' type="text" />
      <IconButton>
         <ExpandMoreIcon/>
      </IconButton>
      </div>
    </div>
    <div className={classes.header__right}>
    <IconButton>
         <HelpOutlineIcon/>
      </IconButton>
      <IconButton
      >
         <SettingsIcon
         />
      </IconButton>
      <IconButton>
         <AppsIcon/>
      </IconButton>
      <Avatar
      onClick={()=>dispatch(toggleHandler())}
       className={classes.avatar}
      src='https://upload.wikimedia.org/wikipedia/commons/d/d2/Ranbir_Kapoor_promoting_Brahmastra.jpg'></Avatar>

          </div>
  </div>
}

export default Header