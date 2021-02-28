import React, {useContext} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ThemeContext } from '../../../providers/themeProvider';
import sunIcon from '../../../assets/Icons/sun.svg';
import moonIcon from '../../../assets/Icons/moon.svg';

const NavbarLinks = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <Wrapper theme={theme}>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/blogPosts">Blog</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem>
        <iconButton type="button" onClick={toggleTheme}>
          <img src={theme === 'light' ? sunIcon : moonIcon} alt={theme} />
        </iconButton>
      </NavItem>
    </Wrapper>
  )
}

export default NavbarLinks



export const Wrapper = styled.div`
  a {
    color: #000;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')};
    

		@media (max-width: 960px) {
			color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')};
      
		}
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const iconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  @media (max-width: 960px) {
    text-align: right;
  }

  img {
    margin-bottom: unset;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: ${({ theme }) => (theme === 'light' ? 'hsla(0, 0%, 0%, 0.8)' : '#fff')};
    flex-direction: column;
    position: relative;
  }
`