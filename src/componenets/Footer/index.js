import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaBloggerB
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

    return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to ="/react_Mytaste" onClick={toggleHome}>SUHA</SocialLogo>
            <WebsiteRights>
              SUHA © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://github.com/suhado" target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="https://twitter.com/dearmy_zz" target="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/do_obliviate" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://blog.naver.com/tngkrhdwn6" target="_blank" aria-label="Blog">
                <FaBloggerB />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
