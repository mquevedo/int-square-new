// @flow
import React, { Component } from 'react'
import _ from 'lodash/fp'

import StyledSlatOuter from '../../StyledSlatOuter'
import StyledSlatInner from '../../StyledSlatInner'
import SectionsData from '../../../lib/data'

export class Content extends Component {
  render() {
    const { handleOnClick } = this.props
    return (
      <MobileMenuStyles>
        <StyledSlatInner className='mobile-menu__inner'>
          {
            _.map((section) =>
              <a
                key={section.id}
                className='mobile-menu__option'
                href={`${section.slug}`}
                target={section.slug.startsWith('#') ? '_self' : '_blank'}
                onClick={handleOnClick}
              >
                {section.title}
              </a>
            )(SectionsData)
          }
        </StyledSlatInner>
      </MobileMenuStyles>
    )
  }
}

const MobileMenuStyles = StyledSlatOuter.extend`
  position: absolute;
  margin: 0px;
  @media (min-width: ${({ theme }) => theme.large.start}) {
    display: none;
  }

  .mobile-menu {
    &__inner {
      margin: 0px;
      padding: 0px;
      display: flex;
      flex-flow: column;
      align-items: start;
    }
    &__option {
      background-color: ${({ theme }) => theme.white};
      width: 100%;
      height: 65px;
      border-bottom: solid ${({ theme }) => theme.blue};
      display: flex;
      align-items: center;
      padding-left: 30px;
      color: ${({ theme }) => theme.blue};
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
    }
  }

`
