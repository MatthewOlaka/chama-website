import React from 'react'
import {FooterLinkEmail, FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FLink, SocialMedia, SocialLogo, WebsiteRights, SocialMediaWrap } from './FooterElements'
import { animateScroll as scroll} from 'react-scroll/modules';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLinkEmail onClick={() => window.location = 'mailto:inquiries@chama-app.com'}>inquiries@chama-app.com</FooterLinkEmail>
                        {/* <FooterLink to='/download'>Instagram</FooterLink> */}
                        <FLink href="https://www.instagram.com/chama_app/" target="_blank" rel="noreferrer" >Instagram</FLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Chama
                    </SocialLogo>
                    <WebsiteRights>ActivSync © 2021. All rights reserved.</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer