import React from 'react'
import Banner from "../components/Banner"
import Welcome from '../components/Welcome'
import SendMail from '../components/SendMail'
import Inbox from '../components/Inbox'

const WelcomePage = () => {
  return (
    <>
    <Banner />
    <Welcome />
   <Inbox />
   {/* <SendMail /> */}
   
    </>
  )
}

export default WelcomePage