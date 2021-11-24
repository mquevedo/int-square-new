import React, { Component} from 'react'
import styled from 'styled-components';
import StyledSlatOuter from '../../StyledSlatOuter'
import StyledSlatInner from '../../StyledSlatInner'
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

    const BarsIcon = <i
      className='mobile-menu__button fa fa-bars'
      onClick={this.toggleMobileMenu}
    />

    const CloseIcon = <i
      className='mobile-menu__button fa fa-times'
      onClick={this.toggleMobileMenu}
    />

    return (
      <MobileMenuStyles
        mobileMenuShown={this.state.mobileMenuShown}
      >
        <StyledSlatInner className='mobile-menu__inner'>
          <div className='mobile-menu__logo' />
          {
            this.state.mobileMenuShown
              ?
              CloseIcon
              :
              BarsIcon
          }
        </StyledSlatInner>
        {this.state.mobileMenuShown && <Content handleOnClick={this.toggleMobileMenu} />}
        {/* <Content /> */}
      </MobileMenuStyles>
    )
  }

}

const MobileMenuStyles = styled(StyledSlatOuter)`
  margin: 0px;
  height: 80px;
  background-color: ${({ theme }) => theme.blue};
  @media (min-width: ${({ theme }) => theme.medium.end}) {
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
        background-image: url('${process.env.PUBLIC_URL}/images/logo--int2.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
     &__button {
        cursor: pointer;
        line-height: 45px;
        font-size: 30px;
        color: white;
        position: absolute;
        right: 25px;
        top: 15px;
        width: 50px;
        height: 50px;
        border-radius: 3px;
        border: 2px solid ${({ theme }) => theme.white};
        @media (min-width: ${({ theme }) => theme.large.start}) {
          display: none;
        }
      }
  }
`