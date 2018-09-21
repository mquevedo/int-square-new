import React, { Component } from 'react'
import InnerStyledSection from './StyledSlatInner'
import OuterStyledSection from './StyledSlatOuter'


export class HomePageHeader extends Component {
  render() {
    return (
      <HomePageHeaderStyles className='home-page-header__outer'>
        <InnerStyledSection className='home-page-header__inner'>
          <div className='home-page-header__image' />
          <div className='carousel'>
            <div className='carousel__item'>
              <div className='carousel__container'>
                <div className='carousel__item__logo' />
                <div className='carousel__item__text'>
                  The Int2 project focuses on sending young professionals from El Salvador to companies abroad, in order to rapidly develop their skills, creating a pool of world class software developers and innovation leaders available for future allied projects.
                </div>
                <div className='carousel__item__button'>
                  <a
                    href='#apply'
                  >
                    ¿How to apply?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </InnerStyledSection>
      </HomePageHeaderStyles>
    )
  }
}

const HomePageHeaderStyles = OuterStyledSection.extend`
  height: 500px;
  overflow: visible;
  ${'' /* margin: -80px 0 0 0; */}
  @media(min-width: ${({ theme }) => theme.medium.start}) {
    height: 600px;
    ${'' /* top: 0; */}
    ${'' /* margin: -80px 0 0 0; */}
  }
  .home-page-header {
    &__inner {
      height: 100%;
      padding: 0px;
      margin: 0;
      width: 100%;
      max-width: 100% !important;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        margin: auto;
      }
    }

    &__image {
      z-index: -99999;
      position: absolute;
      background-color: white;
      top: 0;
      width: 100%;
      height: 440px;
      background-image: url('/images/header.png');
      background-repeat: no-repeat;
      background-size: cover;
      @media(min-width: ${({ theme }) => theme.medium.end}) {
        background-position-y: 80%;
      }
      @media(min-width: ${({ theme }) => theme.medium.start}) {
        height: 600px;
        ${'' /* top: 0; */}
        ${'' /* margin: -80px 0 0 0; */}
      }
      @media(max-width: ${({ theme }) => theme.small.end}) {
        height: 550px;
      }
    }
  }
  .carousel {

    &__item {
      width: 80%;
      margin: 0px 10%;
      float: right;

      &__logo {
        float: right;
        width: 370px;
        height: 150px;
        background-image: url('/images/logo--int2.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      &__text {
        color: ${({ theme }) => theme.white};
        width: 370px;
        float: right;
        clear: both;
        text-align: justify;
        font-weight: 600;
        font-size: 1.2em;
      }

      &__button {
        width: 370px;
        height: auto;
        margin: 50px 0 0 0;
        float: right;
        a {
          text-decoration: none;
          padding: 25px 80px;
          border-radius: 5px;
          ${'' /* width: 90%; */}
          ${'' /* height: 85px; */}
          border: 3px solid white;
          background-color: transparent;
          color: white;
          font-weight: 800;
          font-size: 1.5em;
          cursor: pointer;
          &:hover {
            background-color: #D6DBDF;
            color: black;
          }
        }
      }
      @media(max-width: ${({ theme }) => theme.small.end}) {
          margin: 10px 10%;

          &__logo {
          width: 100%;
          height: 125px;
        }

        &__text {
          width: 100%;
          font-size: 1em;
        }
        &__button {
          width: 100%;
          ${'' /* margin: 20px 0 0 0; */}
          a {
            padding: 25px 20px;
          }
        }
      }
    }

    &__container {
        float: right;
        width: 50%;
        @media(max-width: ${({ theme }) => theme.small.end}) {
          width: 100%;
        }
      }
}
`