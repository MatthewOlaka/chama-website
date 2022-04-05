import React from 'react'
import Icon from '../../images/letterc.png'
import failIcon from '../../images/cross.png'
import { Container, LogoWrapper, LogoImg, ContentContainer, MainText, FailImg, H1, H2 } from './FailElements'

const Fail = () => {
    return (
        <>

            <Container>
                <LogoWrapper to="/">
                    <LogoImg src={Icon} />
                </LogoWrapper>
                <ContentContainer>
                    <MainText>
                        Oops!
                    </MainText>
                    
                        <FailImg src={failIcon} />
                   

                    <H1>
                        Something went wrong!<br/><br/>
                        Please try again or contact contact customer care if problem persists
                    </H1>
                    <H2>
                        You may now return to the app
                    </H2>


                </ContentContainer>
            </Container>

        </>
    )
}

export default Fail