import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Auth from '../components/Auth/Auth'
import Compose from '../components/Composes/Compose'
import Sidebar from '../components/Sidebar/Sidebar'
import EmailList from '../components/EmailList/EmailList'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../store/userSlice'


const Home = () => {
 const dispatch=useDispatch();
 const isMessageIsOpen=useSelector(state=>state.mail.sendMessageIsOpen);
 const isAuthenticate=useSelector(state=>state.user.value);
 
 useEffect(()=>{
   let a=JSON.parse(localStorage.getItem('auth'))
  dispatch(signIn(a));
 },[dispatch])

  return <>

  </>
}

export default Home