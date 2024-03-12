import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import EmailListSetting from '../components/EmailList/EmailListSetting'
import EmailType from '../components/EmailList/EmailType'

const RootLayout = () => {
  return <>
   {/* {isAuthenticate && <Header/>} */}
   <Header/>
   <div className='app_body'>
        <Sidebar/>
        <div className='d-flex flex-column'>
        <EmailListSetting/>
        <EmailType/>
            <Outlet/>
        </div>
   </div>
  </>
}

export default RootLayout