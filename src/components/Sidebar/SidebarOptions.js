import React from 'react'
import classes from './SidebarOptions.module.css'
const SidebarOptions = ({Icon,title,number}) => {
  return (
    <div className={classes.SidebarOptions}>
        <Icon/>
        <h2>{title}</h2>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOptions