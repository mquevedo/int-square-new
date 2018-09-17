import React, { Component } from 'react'
import _ from 'lodash/fp'
import OuterStyledSection from './StyledSlatOuter'
import InnerStyledSection from './StyledSlatInner'
import MenuList from '../lib/data'

export class Menu extends Component {
  render() {
    return (
      <DesktopMenuStyles className='desktop-menu__outer'>
        <InnerStyledSection className='desktop-menu__inner'>
          <nav className='desktop-menu__nav-list'>
            {
              _.map((section) =>
                <li key={section.id}>
                  <a href="#">{section.title}</a>
                </li>
              )(MenuList)
            }
          </nav>
        </InnerStyledSection>
      </DesktopMenuStyles>
    )
  }
}

const DesktopMenuStyles = OuterStyledSection.extend`
  padding: 0;
  display: none;
  @media(min-width: ${({ theme }) => theme.large.start}) {
    display: inline-block;
  }

  nav {
    width: 100%;
    ${'' /* height: 70px; */}
    display: flex;
    justify-content: center;
  }

  .desktop-menu {
    &__inner {
      display: flex;
      height: 70px;
    }

    &__nav-list {
      margin: 0 0 0 15%;
      width: 70%;
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      padding: 0px;

      li {
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  a {
    width: 100%;
    height: 70px;
    line-height: 70px;
    ${'' /* padding: 15px; */}
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    font-weight: 800;
  }
`