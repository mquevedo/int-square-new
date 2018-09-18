import React, { Component } from 'react'
import OuterStyledSection from './StyledSlatOuter'
// import InnerStyledSection from './StyledSlatInner'
import { Menu } from './'

export class Header extends Component {

  render() {
    return (
      <HeaderStyles>
          <header className="header">
            <Menu />
          </header>
      </HeaderStyles>
    )
  }
}

const HeaderStyles = OuterStyledSection.extend`
  background-color: ${({ theme }) => theme.transparent};
  height: 80px;
`