import React from 'react'
import { SidebarContainer,Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarLink, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
           <CloseIcon />
       </Icon> 
       <SidebarWrapper>
           <SidebarMenu>
               <SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</SidebarLink>
               <SidebarLink to='payments' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Payments</SidebarLink>              
               <SidebarLink to='features' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Features</SidebarLink>
               <SidebarLink to='platforms' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Platforms</SidebarLink>
               
           </SidebarMenu>
           <SideBtnWrap>
               <SidebarRoute to="/download">Download</SidebarRoute>
           </SideBtnWrap>
       </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar