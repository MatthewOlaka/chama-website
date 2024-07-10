//import { hover } from '@testing-library/user-event/dist/hover';
import React, {useState, useEffect} from 'react';
import GroupImage from '../../images/group3.png';
import ContributionImage from '../../images/pieChart.jpeg';
import TotalContributionImage from '../../images/contributionChart.PNG';
import CreateGroupImage from '../../images/createGroup.PNG';
import JoinGroupImage from '../../images/joinGroup.jpg';
import TotalRaisedImage from '../../images/totalAmountRaised.jpg';
import IphoneImg from '../../images/mockup1.png';
import AndroidImg from '../../images/newmockup.png';
import {BtnLink, ArrowForward, ArrowRight} from './HeroElements';
import "./styles.scss";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const iphoneImg = document.querySelector('.iphone-img');
            const androidImg = document.querySelector('.android-img');

            const rotationDegree = Math.min(scrollPosition / 10, 10); // Adjust the divisor for sensitivity
            const moveDistance = Math.min(scrollPosition / 20, 20); // Adjust the divisor for sensitivity

            if (iphoneImg && androidImg) {
                iphoneImg.style.transform = `translateX(${moveDistance}px) rotate(${rotationDegree}deg)`;
                androidImg.style.transform = `translateX(-${moveDistance}px) rotate(-${rotationDegree}deg)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className='hero-wrapper'>
            <div className='hero-container'>
                <div className='hero-inner-container'>
                    <div className='hero-left-col'>
                        <h1 className='hero-title'>Connect Globally,<br />Grow Together</h1>
                        <div className='hero-button'>
                            <BtnLink to='/download' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" >
                                Download the app {hover? <ArrowForward /> : <ArrowRight />}
                            </BtnLink>
                        </div>
                    </div>
                    <div className='hero-right-col'>
                        <img className='contribution-img' src={ContributionImage} alt='Image1'></img>
                        <img className='total-contribution-img' src={TotalContributionImage} alt='Image2'></img>
                        <img className='create-group-img' src={CreateGroupImage} alt='Image3'></img>
                        <img className='join-group-img' src={JoinGroupImage} alt='Image4'></img>
                        <img className='total-raised-img' src={TotalRaisedImage} alt='Image5'></img>
                        <img className='group-img' src={GroupImage} alt='GroupImage'></img>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1719214816">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
                        </svg>
                </div>
            </div>
            <div className='mid-sec-wrapper'>
                <img className='android-img' src={AndroidImg} alt='Image6'></img>
                <div className='center-text'>
                    <p className='top-text'>Investment Group Management</p>
                    <h2 className='mid-text'>Unleash Your Chama's Potential</h2>
                    <p className='bottom-text'>
                        Our app provides a solution for managing Chamas, making it easier to collaborate and grow together.
                        Connect with members across the globe, track contributions, and monitor the overall performance of your group.
                        Stay organized and make informed decisions with our intuitive platform designed specifically for investment groups.
                    </p>
                </div>
                <img className='iphone-img' src={IphoneImg} alt='Image7'></img>
            </div>
        </div>
    )
}

export default HeroSection