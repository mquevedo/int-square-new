import React, { Component} from 'react'
import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export class MobileMenu extends Component {

  render() {
    return (
      <MobileMenuStyles>
        <StyledSlatInner className='mobile-menu__inner'>
          <div className='mobile-menu__logo' />
          <div className='mobile-menu__logoww'>
            JJJJJ
          </div>>
        </StyledSlatInner>
      </MobileMenuStyles>
    )
  }

}

const MobileMenuStyles = StyledSlatOuter.extend`
  margin: 0px;
  height: 80px;
  background-color: blue;
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

    &__logo {
        margin: 0px 0 0 15px;
        width: 205px;
        height: 80px;
        background-image: url('/images/logo--int2.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
  }
`