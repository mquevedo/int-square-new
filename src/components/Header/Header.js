import React, { Component } from 'react'
import styled from 'styled-components'
import OuterStyledSection from '../StyledSlatOuter'
// import InnerStyledSection from './StyledSlatInner'
import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu/MobileMenu'
import { TabletMenu } from './TabletMenu'

export class Header extends Component {

  render() {
    return (
      <HeaderStyles>
        <header className="header">
          <Menu />
          <TabletMenu />
          <MobileMenu />
        </header>
      </HeaderStyles>
    )
  }
}

const HeaderStyles = styled(OuterStyledSection)`
  background-color: ${({ theme }) => theme.transparent};
  ${'' /* height: 80px; */}
  }
`;
