import React from 'react'
import Icon from '../../images/letterc.png'
import successIcon from '../../images/checkmark.png'
import { Container, LogoWrapper, LogoImg, ContentContainer, MainText, SuccessImg, H1, H2 } from './SuccessElements'

const Success = () => {
    return (
        <>

            <Container>
                <LogoWrapper to="/">
                    <LogoImg src={Icon} />
                </LogoWrapper>
                <ContentContainer>
                    <MainText>
                        Success!
                    </MainText>
                    
                        <SuccessImg src={successIcon} />
                   

                    <H1>
                        You have succesfully registered your<br />group on Stripe and are now all set up for payments via Card, Apple pay and Google pay.

                    </H1>
                    <H2>
                        You may now return to the app
                    </H2>


                </ContentContainer>
            </Container>

        </>
    )
}

export default Success