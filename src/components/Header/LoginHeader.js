import React from 'react'
import classes from './LoginHeader.module.css'
import { Link } from 'react-router-dom'
const LoginHeader = () => {
  return (
    <div className={classes.container }>
        <div>Fork</div>
       <Link to='/auth'> 
       <button className='btn btn-primary'>Login</button>
       </Link>
        <button className='btn btn-primary'>Create New Account</button>
    </div>
  )
}

export default LoginHeader