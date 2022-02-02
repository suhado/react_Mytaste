import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>SUHA</NavLogo>
                  <MobileIcon onClick={toggle}>
                    <FaBars />
                  </MobileIcon>
                  <NavMenu>
                    <NavItem>
                      <NavLinks
                        to="phrase"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                      >
                        PHRASE
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks
                        to="music"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                      >
                        MUSIC
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks
                        to="photo"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                        PHOTO
                      </NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks
                        to="you"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                      >
                        HOW ABOUT YOU
                      </NavLinks>
                    </NavItem>
                  </NavMenu>
                  <NavBtn>
                    <NavBtnLink to="/developer">Developer</NavBtnLink>
                  </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar
