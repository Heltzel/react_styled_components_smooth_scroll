import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWapper,
  SidebarRoute,
} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWapper>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
