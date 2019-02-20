import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export const CompaniesSection = () => {
  return (
    <CompaniesSectionStyles>
      <StyledSlatOuter id="brands" className='companies__outer'>
        <StyledSlatInner className='companies__inner'>
          <a
            className='companies__logo companies__logo--korinver'
            href={EXTERNAL_LINKS.KORINVER}
            target='_blank'
            rel='noopener noreferrer'
          />
          <a
            className='companies__logo companies__logo--gen-ui'
            href={EXTERNAL_LINKS.GEN_UI}
            target='_blank'
            rel='noopener noreferrer'
          />
          <a
            className='companies__logo companies__logo--ibes'
            href={EXTERNAL_LINKS.IBES}
            target='_blank'
            rel='noopener noreferrer'
          />
        </StyledSlatInner>
      </StyledSlatOuter>
    </CompaniesSectionStyles>
  )
}

const CompaniesSectionStyles = styled.div`
  .companies {
    &__outer {
      font-family: ${({ theme }) => theme.secondaryFont};
    }

    &__inner {
      margin: 0 15px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media(min-width: ${({theme}) => theme.large.start}) {
        margin: auto;
      }
    }

    &__logo {
      width: 45%;
      height: 100px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      @media(min-width: ${({theme}) => theme.medium.start}) {
        width: 30%;
      }

      &--korinver {
        background-image: url(images/logo--korinver.png);
      }

      &--gen-ui {
        background-image: url(images/logo--gen-ui.png);
        @media(min-width: ${({theme}) => theme.medium.start}) {
          background-position: right;
        }
      }

      &--ibes {
        background-image: url(images/logo--ibes.png);
        background-position: center;
        margin: auto;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          background-position: right;
          margin: 0;
        }
      }
    }
  }
`