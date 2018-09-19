import React, { Component} from 'react'
import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { Content } from './Content'

export class MobileMenu extends Component {

  state = {
    mobileMenuShown: false,
  }

  toggleMobileMenu = () => {
    this.setState({
      mobileMenuShown: !this.state.mobileMenuShown,
    })
  }

  render() {
    return (
      <MobileMenuStyles
        mobileMenuShown={this.state.mobileMenuShown}
      >
        <StyledSlatInner className='mobile-menu__inner'>
          <div className='mobile-menu__logo' />
          <button
            className='mobile-menu__button'
            onClick={this.toggleMobileMenu}
          />
        </StyledSlatInner>
        {this.state.mobileMenuShown && <Content handleOnClick={this.toggleMobileMenu} />}
        {/* <Content /> */}
      </MobileMenuStyles>
    )
  }

}

const MobileMenuStyles = StyledSlatOuter.extend`
  margin: 0px;
  height: 80px;
  background-color: ${({ theme }) => theme.blue};
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
     &__button {
        position: absolute;
        right: 25px;
        top: 15px;
        width: 50px;
        height: 50px;
        border-radius: 3px;
        border: 2px solid ${({ theme }) => theme.blue};
        background-image: ${({ mobileMenuShown }) => mobileMenuShown ? 'url(/svg/icon--x-red.svg)' : 'url(svg/icon--hamburger-red.svg)'};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-size: 25px;
        @media (min-width: ${({ theme }) => theme.large.start}) {
          display: none;
        }
      }
  }
`