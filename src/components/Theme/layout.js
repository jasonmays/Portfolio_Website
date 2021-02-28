import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from '../../providers/themeProvider';
import GlobalStyle from "./globalStyle"
import Footer from "./footer"
import Navbar from "./Navbar/Navbar"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledLayout theme={theme}>
      <GlobalStyle theme={theme} />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout


const StyledLayout = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')};
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#212121')};
  #main-content {
    width: 100%;
    flex-grow: 1;
  }
`