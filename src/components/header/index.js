import React from 'react'
import Video from '../../assets/Video.mp4'
import { HeaderContainer, HeaderBg, VideoBg, HeroContent,
        HeroH1, HeroP, HeroBtnWrapper} from './Header'

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeaderBg>
        <HeroContent>
          <HeroH1>Abraham Beltran</HeroH1>
          <HeroP>Building things for the web.</HeroP>
          <HeroBtnWrapper>
            <Button to="/resume">
              Resume
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeaderContainer>
  )
}

export default Header