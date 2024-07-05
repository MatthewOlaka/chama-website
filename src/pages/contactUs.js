import React from 'react'
import { LogoImg, LogoWrapper } from '../components/Download/DownloadElements'
import Icon from '../images/letterc.png'
import ContactUs from '../components/ContactUs'


const ContactUsPage = () => {
  return (
    <>
        <div className="gradient-background" style={{ minHeight: '100vh', padding: '20px' }}>

            <LogoWrapper to="/">
                <LogoImg src={Icon} />
            </LogoWrapper>
            <ContactUs />
        </div>

    </>
  )
}

export default ContactUsPage