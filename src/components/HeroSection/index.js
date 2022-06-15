//import { hover } from '@testing-library/user-event/dist/hover';
import React, {useState} from 'react';
import Image from '../../images/hero1Chama.png';
import {BtnLink, HeroContainer, HeroBg, ImageBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight} from './HeroElements';
//import {Button} from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


  return (
    <HeroContainer id='home'>
        <HeroBg>
            <ImageBg img src={Image}/> 
           {/*  <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
        </HeroBg>
        <HeroContent>
            
            <HeroH1>Manage your group </HeroH1>
            <HeroH1>finances with ease,<br />together </HeroH1>

            <HeroP>
                Download the app to easily make payments<br /> and keep track of all your groups' activity<br /> from the convenience of your own phone.
            </HeroP>
            <HeroBtnWrapper>
                <BtnLink to='/download' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                    Download {hover? <ArrowForward /> : <ArrowRight />}
                </BtnLink>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection