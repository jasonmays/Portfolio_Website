import React, { useContext } from "react"
import styled from 'styled-components'
import { ThemeContext } from '../../providers/themeProvider';
import introImage from '../../assets/Illustrations/Programmer.svg';

const Intro = () => {
  const { theme } = useContext(ThemeContext);
  return( 
      <StyledIntro>
        <StyledHeader theme={theme}>
            <h1 style={{fontSize: '50px'}}> Hi There! </h1>
            <h2 style={{fontSize:'35px'}}>I am a Front-End Software Developer</h2>
        </StyledHeader>
        <StyledImgDiv>
          <StyledImg src={introImage} alt="I’m Jason and I'm a Web Developer!"/>
        </StyledImgDiv>
      </StyledIntro>
    )
}

export default Intro

const StyledIntro = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  z-index: -1;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
const StyledHeader = styled.div`
  padding: 0 5vw;
  margin: 0;
  @media (max-width: 1024px) {
    padding-bottom: 10px
  }
`
const StyledImgDiv = styled.div`
  width: 45%;
  aligh-items: right;
  @media (max-width: 1024px) {
    width: 100%
  }
`
const StyledImg = styled.img`
  width: 80%;
  float: right;
  @media (max-width: 1024px) {
    width: 100%
  }
`