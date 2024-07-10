import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link} from 'react-router-dom'



export const HeroContainer = styled.div`
    background: #FAFAF2;
    display: flex;
    flex-direction: row;
    //justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin-top: -80px;

    /*Add :before styles */
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    //left: 0;
    width: 50%;
    //width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (max-width: 768px){
        width: 100%;
        
        
    }
`

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #232a34;
//     justify-content: center;
// `

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: transparent;
//     background-color: rgba(0, 0, 0, 0.5);
// `;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #FAFAF2;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;

    @media screen and (max-width: 768px){
        align-items: center;
        text-align: center;
        left: 0px;
        right: 0px;
        
    }
`

export const HeroH1 = styled.h1`
    color: #254D8D;
    //color: #fff;
    font-size: 50px;
    text-align: left;
    font-weight: bold;
    font-family: 'Sora';

  /*  color: white;
  -webkit-text-fill-color: #254D8D; 
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white; */

    @media screen and (max-width: 1024px){
        font-size: 45px;
    }
    

    @media screen and (max-width: 768px){
        font-size: 45px;
        text-align: center;
       // align-items: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        text-align: center;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #212121;
    font-size: 24px;
    text-align: left;
    max-width: 600px;
    padding-top: 10px;
    font-family: 'Sora';

    @media screen and (max-width: 1024px){
        font-size: 22px;
    }

    @media screen and (max-width: 768px){
        font-size: 25px;
        text-align: center;
        
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`

export const BtnLink = styled(Link)`

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes slideRight {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

    border-radius: 50px;
    background: ${({primary}) => (primary ? '#254D8C' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff':'#010606')};
    font-size: ${({fontBig}) => (fontBig? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: "Sora";
    width: 60%;
    animation: slideRight 0.5s ease forwards; /* Slide down animation */
    animation-delay: 0.8s; /* Delay to start the animation */
    opacity: 0; /* Ensure visibility */

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#1B83C2' : '#254D8C')};
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`


