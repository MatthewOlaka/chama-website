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
                        Chama App ©
                    </LogoText>
                    <H1>
                        Available at
                    </H1>
                    <ButtonWrapper>
                    <a href="https://apps.apple.com/ca/app/chama-app/id1594190242" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'inherit'}}>
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
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.activsync.chama" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'inherit'}}>

                        <Btn>
                            
                            <ButtonImg src={GooglePlayIcon} />
                            <ButtonText>
                                <Top>
                                    Get it on
                                </Top>
                                <Bottom>
                                    Google Play
                                </Bottom>
                            </ButtonText>

                        </Btn>
                        </a>
                    </ButtonWrapper>
                </ContentContainer>
            </Container>
        </>
    )
}

export default Download