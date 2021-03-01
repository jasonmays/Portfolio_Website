import React, { useState, useContext } from "react"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import styled from 'styled-components'
import { ThemeContext } from '../../../providers/themeProvider';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const { theme } = useContext(ThemeContext);

  return (
    <Navigation theme={theme}>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger theme={theme} open /> : <Hamburger theme={theme} />}
      </Toggle>
      {navbarOpen ? (
        <Navbox theme={theme}>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: sticky;
  top: 0;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0 5vw;
  z-index: 2;
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#212121')};

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;

    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#212121')};
  }
`

const Hamburger = styled.div`
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  background-color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
