import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import EmailListSetting from '../components/EmailList/EmailListSetting'
import EmailType from '../components/EmailList/EmailType'
import ImageSidebar from '../components/Sidebar/ImageSidebar'
import LoginHeader from '../components/Header/LoginHeader'
import { useSelector } from 'react-redux'
import Compose from '../components/Composes/Compose'

const RootLayout = () => {
  const toggle=useSelector(state=>state.mail.toggle);
  const sendMessageIsOpen=useSelector(state=>state.mail.sendMessageIsOpen);
  console.log(toggle);
  return <>
  {sendMessageIsOpen && <Compose/>}
   {true && <Header/>}
   <div className='app_body'>
        {true && <Sidebar/>}
        <div className='d-flex flex-column'>
        {true && <EmailListSetting/>}
        {toggle && <ImageSidebar/>}
        {true &&<EmailType/>}
            <Outlet/>
        </div>
   </div>
  </>
}

export default RootLayout