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

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {/* <Icon onClick={toggleSidebar}>
        <CloseIcon></CloseIcon>
      </Icon> */}
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleSidebar}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleSidebar}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleSidebar}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWapper>
          <SidebarRoute to="/signin" onClick={toggleSidebar}>
            Sign In
          </SidebarRoute>
        </SideBtnWapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
