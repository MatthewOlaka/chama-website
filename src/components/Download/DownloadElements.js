import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    //background: red;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
`





export const HeroLogoWrapper = styled.div`
//display: flex;
    background-color: #254D8C;
    width: 160px;
    height: 160px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 25px ;
    padding-bottom: 20px;
    z-index: 2;
    border-radius: 30px;

`

export const ContentContainer = styled.div`
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
//flex-flow: row wrap

`

export const LogoWrapper = styled(Link)`
    margin: 20px;

`

export const LogoImg = styled.img`
    z-index: 9;
    width: 40px;
    height: auto;
    margin-top: 30px;
    margin-left: 30px;
    
`

export const LogoImg2 = styled.img`
    z-index: 9;
    width: 100px;
    height: auto;
    
`

export const LogoText = styled.div`
    padding-top: 10px;
    font-size: 20px;
    color: #000;
    font-weight: bold;
   // padding-left: 10px;

`



export const H1 = styled.h1`
    padding-top: 30px;
    font-weight: 400;
`


export const ButtonWrapper = styled.div`
    //padding: 50px;
    width: 100%;
    height: 160px;
    align-items: center;
    display: flex;
    //flex-direction: row;
    justify-content: space-evenly;
    max-width: 1000px;
    margin: 0 auto 0 auto;

    @media screen and (max-width: 846px){
        margin-top: 50px;
        flex-direction: column;
        justify-content: space-between;
    }


`

export const Btn = styled.button`
    display: flex;
    flex-direction: row;
    color: #fff;
    background: #254D8C;
    width: 400px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: #000;

    @media screen and (max-width: 425px) {
        width: 300px;
        height: 50px;
    }
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #1B83C2;
    }



`

/* export const IOSButton = styled.button`
    display: flex;
    flex-direction: row;
    color: #fff;
    background: #254D8C;
    width: 250px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
` */

export const ButtonImg = styled.img`
    height: 40px;
    width: 83px;
    padding-right: 50px;
`
export const ButtonText = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`

export const Top = styled.p`
    font-size: 13px;

@media screen and (max-width: 425px) {
        font-size: 10px;
    }
`

export const Bottom = styled.h3`
font-size: 25px;

@media screen and (max-width: 425px) {
        font-size: 20px;
    }
`