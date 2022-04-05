import React from 'react'
import { Container, LogoImg, LogoImg2, LogoWrapper, HeroLogoWrapper, ContentContainer, LogoText, H1, Btn, ButtonWrapper, ButtonImg, ButtonText, Top, Bottom } from './DownloadElements'
import Icon from '../../images/letterc.png'
import AppleStoreIcon from '../../images/asLogo.png'
import GooglePlayIcon from '../../images/gplogo.png'

const Download = () => {
    return (
        <>

            <Container>
                <LogoWrapper to="/">
                    <LogoImg src={Icon} />
                </LogoWrapper>
                <ContentContainer>
                    <HeroLogoWrapper>
                        <LogoImg2 src={Icon} />
                    </HeroLogoWrapper>
                    <LogoText>
                        Chama ©
                    </LogoText>
                    <H1>
                        Available at
                    </H1>
                    <ButtonWrapper>
                        <Btn>
                            <ButtonImg src={AppleStoreIcon} />
                            <ButtonText>
                                <Top>
                                    Download on the
                                </Top>
                                <Bottom>
                                    App Store
                                </Bottom>
                            </ButtonText>
                        </Btn>
                        <Btn>
                            <ButtonImg src={GooglePlayIcon} />
                            <ButtonText>
                                <Top>
                                    Android App on
                                </Top>
                                <Bottom>
                                    Google Play
                                </Bottom>
                            </ButtonText>

                        </Btn>
                    </ButtonWrapper>


                </ContentContainer>
            </Container>

        </>
    )
}

export default Download