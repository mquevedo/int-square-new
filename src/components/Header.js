import React, { Component } from 'react'
import OuterStyledSection from './StyledSlatOuter'
// import InnerStyledSection from './StyledSlatInner'
import { Menu, MobileMenu } from './'

export class Header extends Component {

  render() {
    return (
      <HeaderStyles>
        <header className="header">
          <Menu />
          <MobileMenu />
        </header>
      </HeaderStyles>
    )
  }
}

const HeaderStyles = OuterStyledSection.extend`
  background-color: ${({ theme }) => theme.transparent};
  ${'' /* height: 80px; */}
  }
`