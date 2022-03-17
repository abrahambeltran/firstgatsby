import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper,
        SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './Sidebar'
const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='about' onClick={toggle}>About</SideBarLink>
                <SideBarLink to='projects' onClick={toggle}>Projects</SideBarLink>
                <SideBarLink to='experience' onClick={toggle}>Experience</SideBarLink>
                <SideBarLink to='contacts' onClick={toggle}>Contact</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
              <SideBarRoute to="/resume">Resume</SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar