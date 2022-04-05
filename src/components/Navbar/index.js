import React, {useEffect, useState} from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLogoImg } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll/modules';
import Icon from '../../images/letterc.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
        };
    

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [] );

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value ={{color: '#000'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                    <NavLogoImg  src={Icon} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="payments" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Payments</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="features" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="platforms" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Platforms</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/download" >Download</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar