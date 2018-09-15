import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export const BrandsSection = () => {
  return (
    <BrandsSectionStyle>
      <StyledSlatOuter className='brands__outer'>
        <StyledSlatInner className='brands__inner'>
          <p>Friends who make INT2 possible:</p>
          <a
            className='brands__logo brands__logo--us-embassy'
            href={EXTERNAL_LINKS.KORINVER}
            target='_blank'
            rel='noopener noreferrer'
          ></a>
          <a
            className='brands__logo brands__logo--ed-usa'
            href={EXTERNAL_LINKS.GEN_UI}
            target='_blank'
            rel='noopener noreferrer'
          />
          <a
            className='brands__logo brands__logo--probesa'
            href={EXTERNAL_LINKS.IBES}
            target='_blank'
            rel='noopener noreferrer'
          />
        </StyledSlatInner>
      </StyledSlatOuter>
    </BrandsSectionStyle>
  )
}

const BrandsSectionStyle = styled.div`
  .brands {
    &__outer {
        p {
            width: 100%;
            font-size: 25px;
            font-weight: 600;
            color: ${({ theme }) => theme.blue};
            text-align: left;
            @media(min-width: ${({theme}) => theme.large.start}) {
                margin-bottom: 0px;
                font-size: 35px;
            }
        }
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
      height: 200px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center bottom;
      @media(min-width: ${({theme}) => theme.medium.start}) {
        width: 30%;
      }
      
      &--us-embassy {
        background-image: url(https://int2.blob.core.windows.net/public/brandsection/brands-us-embassy.png);
        background-position: left bottom;
      }

      &--ed-usa {
        background-image: url(https://int2.blob.core.windows.net/public/brandsection/brands-edusa.png);
      }

      &--probesa {
        background-image: url(https://int2.blob.core.windows.net/public/brandsection/brands-probesa.png);
        margin: auto;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          margin: 0;
        }
      }
    }
  }
`