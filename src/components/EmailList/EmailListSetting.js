import { IconButton } from '@mui/material'
import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const EmailListSetting = () => {
  return (
    <div className='emailist__settings border-1 border'>
        <div className='emailist__settingLeft'>
            <IconButton>
                <CheckBoxOutlineBlankIcon/>
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
            <IconButton>
                <RefreshIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default EmailListSetting