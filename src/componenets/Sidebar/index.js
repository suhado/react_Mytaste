import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="phrase" onClick={toggle}>PHRASE</SidebarLink>
          <SidebarLink to="music" onClick={toggle}>MUSIC</SidebarLink>
          <SidebarLink to="photo" onClick={toggle}>PHOTO</SidebarLink>
          <SidebarLink to="you" onClick={toggle}>HOW ABOUT YOU</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/developer">Developer</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar
