import React, { Component } from 'react'
import OuterStyledSection from './OuterStyledSection'
import InnerStyledSection from './InnerStyledSection'
import { Menu } from './'

export class Header extends Component {

  render() {
    return (
      <HeaderStyles>
        <InnerStyledSection>
          <header className="header">
            <Menu />
          </header>
        </InnerStyledSection>
      </HeaderStyles>
    )
  }
}

const HeaderStyles = OuterStyledSection.extend`
  background-color: ${({ theme }) => theme.transparent};
  height: 70px;
`