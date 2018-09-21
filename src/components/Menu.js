import React, { Component } from 'react'
import _ from 'lodash/fp'
import OuterStyledSection from './StyledSlatOuter'
import InnerStyledSection from './StyledSlatInner'
import MenuList from '../lib/data'

type Props = {}

type State = {
  mobileMenuShown: boolean,
}

export class Menu extends Component<Props, State> {
  state = {
    mobileMenuShown: false,
  }

  render() {
    const { mobileMenuShown } = this.state;
    return (
      <div>
        <DesktopMenuStyles className='desktop-menu__outer'>
          <InnerStyledSection className='desktop-menu__inner'>
            <nav className='desktop-menu__nav-list'>
              {
                _.map((section) =>
                  <li key={section.id}>
                    <a
                      href={`${section.slug}`}
                      target={section.slug.startsWith('#') ? '_self' : '_blank'}
                    >
                      {section.title}
                    </a>
                  </li>
                )(MenuList)
              }
            </nav>
          </InnerStyledSection>
        </DesktopMenuStyles>
      </div>
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
    display: flex;
    justify-content: center;
  }

  .desktop-menu {
    &__inner {
      display: flex;
      height: 70px;
      width: 100% !important;
      margin: 0 auto;
      max-width: 90%;
    }

    &__nav-list {
      margin: 0 0 0 5%;
      width: 100%;
      list-style-type: none;
      display: flex;
      justify-content: space-around;
      padding: 0px;
      li {
        ${'' /* white-space: nowrap; */}
        display: flex;
        justify-content: space-around;
        align-items: center;
        ${'' /* font-weight: 800 !important; */}
      }
      a {
        width: 100%;
        ${'' /* height: 70px; */}
        ${'' /* line-height: 70px; */}
        ${'' /* padding: 15px; */}
        text-decoration: none;
        color: ${({ theme }) => theme.white};
        font-weight: 800 !important;
        font-size: 1.4em;
        &:hover {
          border-bottom: 3px solid ${({ theme }) => theme.blue};
        }
      }
    }
  }
`