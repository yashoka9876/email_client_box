import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import Auth from '../components/Auth/Auth'
import Welcome from '../components/Header/Welcome'

const Home = () => {
 const[idtoken,setIdToken]=useState(null);
  
  return <>
  { idtoken && <Welcome/> }
  <Header/>
  <Auth setIdToken={setIdToken}/>
  </>
}

export default Home