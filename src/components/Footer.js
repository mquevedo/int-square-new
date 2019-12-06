// @flow
import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import { CONTACT_URLS } from '../lib/appConstants'

export const Footer = () => {
  return (
    <FooterStyles>
      <StyledSlatOuter id="contact-us" className='footer__contact__outer'>
        <StyledSlatInner className='footer__contact__inner'>
          <h2 className='footer__contact__title'>contact us:</h2>

          <div className='footer__contact__options'>
            <div className='footer__contact__info'>
              <a
                href={CONTACT_URLS.MAP}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='footer__contact__info__logo footer__contact__info__logo--address' />
              </a>
              <span className='footer__contact__info__text'>
                <a
                  href={CONTACT_URLS.MAP}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Zona Franca,<br />
                  Santa Tecla Local 2B2, <br />
                  La Libertad, El Salvador
                </a>
              </span>
            </div>

            <div className='footer__contact__info'>
              <a href="tel:+50322520014">
                <div className='footer__contact__info__logo footer__contact__info__logo--phone' />
              </a>
              <span className='footer__contact__info__text'>
                <a href="tel:+50322520014">
                  +503-2252-0014
                </a>
              </span>
            </div>

            <div className='footer__contact__info'>
              <a
                href={`mailto:${CONTACT_URLS.EMAIL}?Subject=Información%20IntSquare%20`}
              >
                <div className='footer__contact__info__logo footer__contact__info__logo--email' />
              </a>
              <span className='footer__contact__info__text'>
                <a
                  href={`mailto:${CONTACT_URLS.EMAIL}?Subject=Información%20IntSquare%20`}>
                  {CONTACT_URLS.EMAIL}
                </a>
              </span>
            </div>

            <div className='footer__contact__info'>
              <a
                href={CONTACT_URLS.FACEBOOK_SHORT}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='footer__contact__info__logo footer__contact__info__logo--facebook' />
              </a>
              <span className='footer__contact__info__text'>
                <a
                  href={CONTACT_URLS.FACEBOOK_SHORT}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {CONTACT_URLS.FACEBOOK_SHORT}
                </a>
              </span>
            </div>
          </div>
        </StyledSlatInner>
      </StyledSlatOuter>

      <StyledSlatOuter className='footer__disclosure__outer'>
        <StyledSlatInner className='footer__disclosure__inner'>
          <div className='footer__disclosure__text'>
            &copy; 2018 Korinver. All rights reserved
          </div>
        </StyledSlatInner>
      </StyledSlatOuter>
    </FooterStyles>
  )
}

const FooterStyles = styled.div`
  .footer {
    &__contact {
      &__inner {
        margin: 0 15px;
        @media(min-width: ${({theme}) => theme.large.start}) {
          margin: 0 auto;
        }
      }
      &__title {
        font-size: 25px;
        font-weight: 600;
        margin: 0;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.blue};
        text-transform: uppercase;
        text-align: left;
        @media(min-width: ${({theme}) => theme.large.start}) {
          margin-bottom: 0px;
          font-size: 35px;
        }
      }

      &__options {
        font-family: ${({ theme }) => theme.secondaryFont};
        width: 100%;
        height: 300px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          height: 150px;
          flex-flow: row;
          flex-wrap: wrap;
        }
      }

      &__info {
        width: 100%;
        height: 25%;
        display: flex;
        align-items: center;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          width: 50%;
          height: 50%;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          width: auto;
          height: 100%;
          max-width: 30%;
        }

        &__logo {
          width: 40px;
          height: 40px;
          background-size: contain;
          background-repeat: no-repeat;
          background-color: transparent;
          background-position: center;
          margin-right: 10px;
          @media(min-width: ${({theme}) => theme.medium.start}) {
            width: 50px;
            height: 50px;
          }

          &--address {
            background-image: url(/svg/icon--pin--blue.svg);
          }

          &--phone {
            background-image: url(/svg/icon--phone--blue.svg);
          }

          &--email {
            background-image: url(/svg/icon--mail--blue.svg);
          }

          &--facebook {
            background-image: url(/svg/icon--facebook--blue.svg);
          }
        }

        &__text {
          font-size: 16px;
          text-align: left;
          color: ${({ theme }) => theme.blue};
          @media(min-width: ${({theme}) => theme.large.start}) {
            font-size: 18px;
          }
          a {
            color: inherit;
            text-decoration: none;

            :hover {
              background-color: ${( {theme} ) => theme.blue};
              color: ${( {theme} ) => theme.white};
              text-decoration: underline;
            }
          }
        }
      }
    }

    &__disclosure {
      &__outer {
        height: 90px;
        background-color: ${({theme}) => theme.blue};
      }

      &__text {
        color: ${({ theme }) => theme.white};
        font-size: 12px;
      }
    }
  }
`
