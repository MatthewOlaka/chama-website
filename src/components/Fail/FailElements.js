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

export const MainText = styled.text`
    font-size: 50px;
`

export const FailImg = styled.img`
    z-index: 9;
    width: 200px;
    height: auto;
    padding-top: 30px;
    
`

export const H1 = styled.h1`
    padding-top: 50px;
    font-weight: 300;
    font-size: 25px;
    padding-left: 20px;
`

export const H2 = styled.h2`
    padding-top: 20px;
    font-weight: 100;
`

