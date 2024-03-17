import React from 'react'
import classes from './ImageSidebar.module.css'
import { useDispatch } from 'react-redux'
import { signUp } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
const ImageSidebar = () => {
    const navigate=useNavigate();
   const dispatch= useDispatch();
   const logout=()=>{
    dispatch(signUp());
    navigate('/')
   }
  return (
    <div className={classes.container}>
       <button className='btn btn-primary' onClick={logout}>Logout</button>
    </div>
  )
}

export default ImageSidebar